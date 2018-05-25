// Copyright 2018 IBM RESEARCH. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// =============================================================================

"use strict";

import * as fs from "fs";
import { Util } from "./utils";

export namespace VizManager {

    export function createViz(codePath: string, result: object): string {
        if (this.detectProperViz(codePath) === "HISTOGRAM") {
            console.log("Histogram detected");
            let templatePath = Util.getOSDependentPath("../../resources/html-templates/temp-plot-shots.html");

            let resultString = result.toString().replace(/'/g, '"');
            try {
                let execResult = JSON.parse(String(resultString));
                return VizManager.createHistogram(
                    execResult.result[0].data.counts,
                    templatePath
                );
            } catch (err) {
                try {
                    let execResult = JSON.parse(String(resultString));
                    return VizManager.createHistogram(
                        execResult,
                        templatePath
                    );
                } catch (err) {
                    return `<pre>${resultString}</pre>`;
                }
            }
        } else if (this.detectProperViz(codePath) === "TEXT") {
            console.log("Text detected");
            return `<pre>${result}</pre>`;
        } else if (this.detectProperViz(codePath) === "STATUS") {
            console.log("Device status detected");
            let templatePath = Util.getOSDependentPath("../../resources/html-templates/temp-devices-status.html");

            let resultString = result.toString().replace(/'/g, '"');
            let execResult = JSON.parse(String(resultString));

            // console.log("execResult", execResult);
            // console.log("execResult[0].hasOwnProperty('status')", execResult[0].hasOwnProperty('status'));

            if (execResult[0].hasOwnProperty('status')) {
                return VizManager.createDeviceStatus(
                    execResult,
                    templatePath
                );
            } else {
                return `${result}`;
            }
        } else {
            console.log("none detected");
            return `${result}`;
        }
    }

    export function detectProperViz(codePath: string): string {
        let codeFile = undefined;

        //console.log("codePath", codePath);
        if (codePath === Util.getOSDependentPath("../../resources/qiskitScripts/listRemoteBackends.py")) {
            return "STATUS";
        }

        codeFile = fs.readFileSync(codePath, { encoding: "utf8" });
        if (codeFile !== undefined) {
            // console.log(codeFile);
            codeFile = codeFile.split("\n");
            codeFile = codeFile.filter(Boolean);

            let codeFileArray: Array<string> = [];

            for (let key in codeFile) {
                codeFileArray.push(codeFile[key]);
            }

            // console.log(codeFileArray);
            let codeFileArrayRev = codeFileArray.reverse();

            for (let i = 0; i < codeFileArrayRev.length; i++) {
                if (
                    new RegExp(/^\/\/.*/g).test(codeFileArrayRev[i]) === true ||
                    new RegExp(/^#.*/g).test(codeFileArrayRev[i]) === true
                ) {
                    //Comment to end the file, go to the next line
                } else if (
                    new RegExp(/^ *print\(.*\.get_counts\(.*\)\)/g).test(
                        codeFileArrayRev[i]
                    ) === true
                ) {
                    // If the result is printed using the get_counts, the proper viz to show is the histogram
                    return "HISTOGRAM";
                } else if (
                    new RegExp(/^ *print\(.*\._result.*\)\)/g).test(
                        codeFileArrayRev[i]
                    ) === true
                ) {
                    // If the result is printed using the _result (probably using QASM), the proper viz to show is the histogram
                    return "HISTOGRAM";
                } else {
                    // If we don't find the proper viz method, continue seeking for that.
                    // If the array ends without a proper result, we will render it as text.
                }
            }
            return "TEXT";
        } else {
            return "TEXT";
        }
    }

    export function createHistogram(
        countsArray: object | string,
        templatePath: string
    ): string {
        let xArray = [];
        let yArray = [];

        const countsArrayOrd = {};
        Object.keys(countsArray)
            .sort()
            .forEach(function (key) {
                countsArrayOrd[key] = countsArray[key];
            });

        for (let element in countsArrayOrd) {
            xArray.push(element);
            yArray.push(countsArray[element]);
        }

        let html = undefined;
        html = fs.readFileSync(templatePath, { encoding: "utf8" });
        if (html !== undefined) {
            let str2Replace =
                '"x": ["000", "001", "010", "011", "100", "101", "110", "111"], "y": [117, 136, 119, 119, 149, 142, 129, 113]';
            let replacement = `"x": ["${xArray}"], "y": [${yArray}]`;

            console.log("replacement", replacement);

            html = html.replace(str2Replace, replacement);

            return html;
        } else {
            return `<pre>${countsArray}</pre>`;
        }
    }

    export function createDeviceStatus(
        devicesArray: Array<object>,
        templatePath: string
    ): string {
        let html = undefined;
        html = fs.readFileSync(templatePath, { encoding: "utf8" });
        if (html !== undefined) {
            devicesArray.forEach(element => {
                let str2Replace = `<small class="">[${element['status']['name']}]</small></span><div class="pull-right"><ibm-q-tag ng-class="{'label-danger': $ctrl.backendStatus[backend.name].tag.color === 'danger','label-success': $ctrl.backendStatus[backend.name].tag.color === 'success','label-info': $ctrl.backendStatus[backend.name].tag.color === 'info'}"ng-show="$ctrl.backendStatus[backend.name].tag" class="label-success">Active: Calibrating</ibm-q-tag>`;
                let str2ReplaceSimulator = `<small class="">[${element['status']['name']}]</small></span><div class="pull-right"><ibm-q-tag class="label-success">ACTIVE</ibm-q-tag>`;

                let statusTag = "label-success";
                let statusMessage = "Active";
                if (element['status']['available'] === false) {
                    statusTag = "label-danger";
                    statusMessage = "Maintenance";
                }

                let replacement = `<small class="">[${element['status']['name']}]</small></span><div class="pull-right"><ibm-q-tag ng-class="{'label-danger': $ctrl.backendStatus[backend.name].tag.color === 'danger','label-success': $ctrl.backendStatus[backend.name].tag.color === 'success', 'label-info': $ctrl.backendStatus[backend.name].tag.color === 'info'}" ng-show="$ctrl.backendStatus[backend.name].tag" class="${statusTag}">${statusMessage}</ibm-q-tag>`;
                let replacementSimulator = `<small class="">[${element['status']['name']}]</small></span><div class="pull-right"><ibm-q-tag class="${statusTag}">${statusMessage}</ibm-q-tag>`;

                html = html.replace(str2Replace, replacement);
                html = html.replace(str2ReplaceSimulator, replacementSimulator);
            });
            return html;
        } else {
            return `<pre>${devicesArray}</pre>`;
        }
    }
}
