// Generated from Python3.g4 by ANTLR 4.6-SNAPSHOT


import { QiskitSymbolTable, VariableSymbol, ClassSymbol } from '../compiler/qiskitSymbolTable';
import { Symbol } from '../../tools/symbolTable';
import { AssignmentsStack, Assignment, MethodCall } from './tools/assignmentsStack';
import { ArgumentsTester, ParserArgumentsErrorHandler } from './tools/argumentsTester';


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { Python3Listener } from './Python3Listener';
import { Python3Visitor } from './Python3Visitor';


export class Python3Parser extends Parser {
	public static readonly DEF=1;
	public static readonly RETURN=2;
	public static readonly RAISE=3;
	public static readonly FROM=4;
	public static readonly IMPORT=5;
	public static readonly AS=6;
	public static readonly GLOBAL=7;
	public static readonly NONLOCAL=8;
	public static readonly ASSERT=9;
	public static readonly IF=10;
	public static readonly ELIF=11;
	public static readonly ELSE=12;
	public static readonly WHILE=13;
	public static readonly FOR=14;
	public static readonly IN=15;
	public static readonly TRY=16;
	public static readonly FINALLY=17;
	public static readonly WITH=18;
	public static readonly EXCEPT=19;
	public static readonly LAMBDA=20;
	public static readonly OR=21;
	public static readonly AND=22;
	public static readonly NOT=23;
	public static readonly IS=24;
	public static readonly NONE=25;
	public static readonly TRUE=26;
	public static readonly FALSE=27;
	public static readonly CLASS=28;
	public static readonly YIELD=29;
	public static readonly DEL=30;
	public static readonly PASS=31;
	public static readonly CONTINUE=32;
	public static readonly BREAK=33;
	public static readonly NEWLINE=34;
	public static readonly NAME=35;
	public static readonly STRING_LITERAL=36;
	public static readonly BYTES_LITERAL=37;
	public static readonly DECIMAL_INTEGER=38;
	public static readonly OCT_INTEGER=39;
	public static readonly HEX_INTEGER=40;
	public static readonly BIN_INTEGER=41;
	public static readonly FLOAT_NUMBER=42;
	public static readonly IMAG_NUMBER=43;
	public static readonly DOT=44;
	public static readonly ELLIPSIS=45;
	public static readonly STAR=46;
	public static readonly OPEN_PAREN=47;
	public static readonly CLOSE_PAREN=48;
	public static readonly COMMA=49;
	public static readonly COLON=50;
	public static readonly SEMI_COLON=51;
	public static readonly POWER=52;
	public static readonly ASSIGN=53;
	public static readonly OPEN_BRACK=54;
	public static readonly CLOSE_BRACK=55;
	public static readonly OR_OP=56;
	public static readonly XOR=57;
	public static readonly AND_OP=58;
	public static readonly LEFT_SHIFT=59;
	public static readonly RIGHT_SHIFT=60;
	public static readonly ADD=61;
	public static readonly MINUS=62;
	public static readonly DIV=63;
	public static readonly MOD=64;
	public static readonly IDIV=65;
	public static readonly NOT_OP=66;
	public static readonly OPEN_BRACE=67;
	public static readonly CLOSE_BRACE=68;
	public static readonly LESS_THAN=69;
	public static readonly GREATER_THAN=70;
	public static readonly EQUALS=71;
	public static readonly GT_EQ=72;
	public static readonly LT_EQ=73;
	public static readonly NOT_EQ_1=74;
	public static readonly NOT_EQ_2=75;
	public static readonly AT=76;
	public static readonly ARROW=77;
	public static readonly ADD_ASSIGN=78;
	public static readonly SUB_ASSIGN=79;
	public static readonly MULT_ASSIGN=80;
	public static readonly AT_ASSIGN=81;
	public static readonly DIV_ASSIGN=82;
	public static readonly MOD_ASSIGN=83;
	public static readonly AND_ASSIGN=84;
	public static readonly OR_ASSIGN=85;
	public static readonly XOR_ASSIGN=86;
	public static readonly LEFT_SHIFT_ASSIGN=87;
	public static readonly RIGHT_SHIFT_ASSIGN=88;
	public static readonly POWER_ASSIGN=89;
	public static readonly IDIV_ASSIGN=90;
	public static readonly SKIP_=91;
	public static readonly UNKNOWN_CHAR=92;
	public static readonly INDENT=93;
	public static readonly DEDENT=94;
	public static readonly RULE_single_input = 0;
	public static readonly RULE_file_input = 1;
	public static readonly RULE_eval_input = 2;
	public static readonly RULE_decorator = 3;
	public static readonly RULE_decorators = 4;
	public static readonly RULE_decorated = 5;
	public static readonly RULE_funcdef = 6;
	public static readonly RULE_parameters = 7;
	public static readonly RULE_typedargslist = 8;
	public static readonly RULE_tfpdef = 9;
	public static readonly RULE_varargslist = 10;
	public static readonly RULE_vfpdef = 11;
	public static readonly RULE_stmt = 12;
	public static readonly RULE_simple_stmt = 13;
	public static readonly RULE_small_stmt = 14;
	public static readonly RULE_expr_stmt = 15;
	public static readonly RULE_testlist_star_expr = 16;
	public static readonly RULE_augassign = 17;
	public static readonly RULE_del_stmt = 18;
	public static readonly RULE_pass_stmt = 19;
	public static readonly RULE_flow_stmt = 20;
	public static readonly RULE_break_stmt = 21;
	public static readonly RULE_continue_stmt = 22;
	public static readonly RULE_return_stmt = 23;
	public static readonly RULE_yield_stmt = 24;
	public static readonly RULE_raise_stmt = 25;
	public static readonly RULE_import_stmt = 26;
	public static readonly RULE_import_name = 27;
	public static readonly RULE_import_from = 28;
	public static readonly RULE_import_as_name = 29;
	public static readonly RULE_dotted_as_name = 30;
	public static readonly RULE_import_as_names = 31;
	public static readonly RULE_dotted_as_names = 32;
	public static readonly RULE_dotted_name = 33;
	public static readonly RULE_global_stmt = 34;
	public static readonly RULE_nonlocal_stmt = 35;
	public static readonly RULE_assert_stmt = 36;
	public static readonly RULE_compound_stmt = 37;
	public static readonly RULE_if_stmt = 38;
	public static readonly RULE_while_stmt = 39;
	public static readonly RULE_for_stmt = 40;
	public static readonly RULE_try_stmt = 41;
	public static readonly RULE_with_stmt = 42;
	public static readonly RULE_with_item = 43;
	public static readonly RULE_except_clause = 44;
	public static readonly RULE_suite = 45;
	public static readonly RULE_test = 46;
	public static readonly RULE_test_nocond = 47;
	public static readonly RULE_lambdef = 48;
	public static readonly RULE_lambdef_nocond = 49;
	public static readonly RULE_or_test = 50;
	public static readonly RULE_and_test = 51;
	public static readonly RULE_not_test = 52;
	public static readonly RULE_comparison = 53;
	public static readonly RULE_comp_op = 54;
	public static readonly RULE_star_expr = 55;
	public static readonly RULE_expr = 56;
	public static readonly RULE_xor_expr = 57;
	public static readonly RULE_and_expr = 58;
	public static readonly RULE_shift_expr = 59;
	public static readonly RULE_arith_expr = 60;
	public static readonly RULE_term = 61;
	public static readonly RULE_factor = 62;
	public static readonly RULE_power = 63;
	public static readonly RULE_atom = 64;
	public static readonly RULE_testlist_comp = 65;
	public static readonly RULE_trailer = 66;
	public static readonly RULE_subscriptlist = 67;
	public static readonly RULE_subscript = 68;
	public static readonly RULE_sliceop = 69;
	public static readonly RULE_exprlist = 70;
	public static readonly RULE_testlist = 71;
	public static readonly RULE_dictorsetmaker = 72;
	public static readonly RULE_classdef = 73;
	public static readonly RULE_arglist = 74;
	public static readonly RULE_argument = 75;
	public static readonly RULE_comp_iter = 76;
	public static readonly RULE_comp_for = 77;
	public static readonly RULE_comp_if = 78;
	public static readonly RULE_yield_expr = 79;
	public static readonly RULE_yield_arg = 80;
	public static readonly RULE_str = 81;
	public static readonly RULE_number = 82;
	public static readonly RULE_integer = 83;
	public static readonly ruleNames: string[] = [
		"single_input", "file_input", "eval_input", "decorator", "decorators", 
		"decorated", "funcdef", "parameters", "typedargslist", "tfpdef", "varargslist", 
		"vfpdef", "stmt", "simple_stmt", "small_stmt", "expr_stmt", "testlist_star_expr", 
		"augassign", "del_stmt", "pass_stmt", "flow_stmt", "break_stmt", "continue_stmt", 
		"return_stmt", "yield_stmt", "raise_stmt", "import_stmt", "import_name", 
		"import_from", "import_as_name", "dotted_as_name", "import_as_names", 
		"dotted_as_names", "dotted_name", "global_stmt", "nonlocal_stmt", "assert_stmt", 
		"compound_stmt", "if_stmt", "while_stmt", "for_stmt", "try_stmt", "with_stmt", 
		"with_item", "except_clause", "suite", "test", "test_nocond", "lambdef", 
		"lambdef_nocond", "or_test", "and_test", "not_test", "comparison", "comp_op", 
		"star_expr", "expr", "xor_expr", "and_expr", "shift_expr", "arith_expr", 
		"term", "factor", "power", "atom", "testlist_comp", "trailer", "subscriptlist", 
		"subscript", "sliceop", "exprlist", "testlist", "dictorsetmaker", "classdef", 
		"arglist", "argument", "comp_iter", "comp_for", "comp_if", "yield_expr", 
		"yield_arg", "str", "number", "integer"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'def'", "'return'", "'raise'", "'from'", "'import'", "'as'", 
		"'global'", "'nonlocal'", "'assert'", "'if'", "'elif'", "'else'", "'while'", 
		"'for'", "'in'", "'try'", "'finally'", "'with'", "'except'", "'lambda'", 
		"'or'", "'and'", "'not'", "'is'", "'None'", "'True'", "'False'", "'class'", 
		"'yield'", "'del'", "'pass'", "'continue'", "'break'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'.'", "'...'", "'*'", "'('", "')'", "','", "':'", "';'", "'**'", 
		"'='", "'['", "']'", "'|'", "'^'", "'&'", "'<<'", "'>>'", "'+'", "'-'", 
		"'/'", "'%'", "'//'", "'~'", "'{'", "'}'", "'<'", "'>'", "'=='", "'>='", 
		"'<='", "'<>'", "'!='", "'@'", "'->'", "'+='", "'-='", "'*='", "'@='", 
		"'/='", "'%='", "'&='", "'|='", "'^='", "'<<='", "'>>='", "'**='", "'//='"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "DEF", "RETURN", "RAISE", "FROM", "IMPORT", "AS", "GLOBAL", 
		"NONLOCAL", "ASSERT", "IF", "ELIF", "ELSE", "WHILE", "FOR", "IN", "TRY", 
		"FINALLY", "WITH", "EXCEPT", "LAMBDA", "OR", "AND", "NOT", "IS", "NONE", 
		"TRUE", "FALSE", "CLASS", "YIELD", "DEL", "PASS", "CONTINUE", "BREAK", 
		"NEWLINE", "NAME", "STRING_LITERAL", "BYTES_LITERAL", "DECIMAL_INTEGER", 
		"OCT_INTEGER", "HEX_INTEGER", "BIN_INTEGER", "FLOAT_NUMBER", "IMAG_NUMBER", 
		"DOT", "ELLIPSIS", "STAR", "OPEN_PAREN", "CLOSE_PAREN", "COMMA", "COLON", 
		"SEMI_COLON", "POWER", "ASSIGN", "OPEN_BRACK", "CLOSE_BRACK", "OR_OP", 
		"XOR", "AND_OP", "LEFT_SHIFT", "RIGHT_SHIFT", "ADD", "MINUS", "DIV", "MOD", 
		"IDIV", "NOT_OP", "OPEN_BRACE", "CLOSE_BRACE", "LESS_THAN", "GREATER_THAN", 
		"EQUALS", "GT_EQ", "LT_EQ", "NOT_EQ_1", "NOT_EQ_2", "AT", "ARROW", "ADD_ASSIGN", 
		"SUB_ASSIGN", "MULT_ASSIGN", "AT_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN", 
		"AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "LEFT_SHIFT_ASSIGN", "RIGHT_SHIFT_ASSIGN", 
		"POWER_ASSIGN", "IDIV_ASSIGN", "SKIP_", "UNKNOWN_CHAR", "INDENT", "DEDENT"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Python3Parser._LITERAL_NAMES, Python3Parser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return Python3Parser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "Python3.g4"; }

	@Override
	public get ruleNames(): string[] { return Python3Parser.ruleNames; }

	@Override
	public get serializedATN(): string { return Python3Parser._serializedATN; }


	public symbolTable = QiskitSymbolTable.build();
	private assignments = new AssignmentsStack();
	private argumentsScope = false;
	private argumentsErrorHandler = new ParserArgumentsErrorHandler(this);

	declaredVariables(): string[] {
	    return this.symbolTable.definedSymbols();
	}

	checkMethodInvocation(symbol: string): void {
	  console.log(`Checking method invocation on ${symbol}`);
	}

	applyAssignment(symbol: string): void {
	  let lastAssignment = this.assignments.popLastAssignment();

	  console.log(`Assignment ${lastAssignment}`);

	  if (this.isAssignmentAppliable(lastAssignment, symbol)) {
	    this.verifyMethodCall(lastAssignment.call);

	    let parentSymbol = this.findParentSymbolWith(lastAssignment);
	    if (parentSymbol !== null) {
	      let variable = new VariableSymbol(symbol, parentSymbol);
	      this.symbolTable.define(variable);
	    }
	  }
	}

	private verifyMethodCall(call: MethodCall,): void {
	  new ArgumentsTester(this.symbolTable, this.argumentsErrorHandler)
	    .check(call);
	}

	findParentSymbolWith(assignment: Assignment): Symbol {
	  let currentSymbol = this.symbolTable.lookup(assignment.call.variable.text);
	  if (currentSymbol === null) {
	    return null;
	  }
	  assignment.call.trailingMethods.forEach((method) => {
	    let classType = currentSymbol.type as ClassSymbol;
	    let compatibleMethod = classType.getMethods().find((m) => m.getName() === method.methodName.text);
	    if (compatibleMethod) {
	      currentSymbol = this.symbolTable.lookup(compatibleMethod.type.getName());
	    } 
	  });

	  return currentSymbol;
	}

	isAssignmentAppliable(assignment: Assignment, symbol: string): boolean {
	  if (assignment === null) {
	    return false;
	  }
	  if (assignment.symbol.text !== symbol) {
	    return false;
	  }

	  return true;
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Python3Parser._ATN, this);
	}
	@RuleVersion(0)
	public single_input(): Single_inputContext {
		let _localctx: Single_inputContext = new Single_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Python3Parser.RULE_single_input);
		try {
			this.state = 173;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NEWLINE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 168;
				this.match(Python3Parser.NEWLINE);
				}
				break;
			case Python3Parser.RETURN:
			case Python3Parser.RAISE:
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
			case Python3Parser.GLOBAL:
			case Python3Parser.NONLOCAL:
			case Python3Parser.ASSERT:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.YIELD:
			case Python3Parser.DEL:
			case Python3Parser.PASS:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 169;
				this.simple_stmt();
				}
				break;
			case Python3Parser.DEF:
			case Python3Parser.IF:
			case Python3Parser.WHILE:
			case Python3Parser.FOR:
			case Python3Parser.TRY:
			case Python3Parser.WITH:
			case Python3Parser.CLASS:
			case Python3Parser.AT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 170;
				this.compound_stmt();
				this.state = 171;
				this.match(Python3Parser.NEWLINE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public file_input(): File_inputContext {
		let _localctx: File_inputContext = new File_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Python3Parser.RULE_file_input);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.DEF) | (1 << Python3Parser.RETURN) | (1 << Python3Parser.RAISE) | (1 << Python3Parser.FROM) | (1 << Python3Parser.IMPORT) | (1 << Python3Parser.GLOBAL) | (1 << Python3Parser.NONLOCAL) | (1 << Python3Parser.ASSERT) | (1 << Python3Parser.IF) | (1 << Python3Parser.WHILE) | (1 << Python3Parser.FOR) | (1 << Python3Parser.TRY) | (1 << Python3Parser.WITH) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE) | (1 << Python3Parser.CLASS) | (1 << Python3Parser.YIELD) | (1 << Python3Parser.DEL) | (1 << Python3Parser.PASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Python3Parser.CONTINUE - 32)) | (1 << (Python3Parser.BREAK - 32)) | (1 << (Python3Parser.NEWLINE - 32)) | (1 << (Python3Parser.NAME - 32)) | (1 << (Python3Parser.STRING_LITERAL - 32)) | (1 << (Python3Parser.BYTES_LITERAL - 32)) | (1 << (Python3Parser.DECIMAL_INTEGER - 32)) | (1 << (Python3Parser.OCT_INTEGER - 32)) | (1 << (Python3Parser.HEX_INTEGER - 32)) | (1 << (Python3Parser.BIN_INTEGER - 32)) | (1 << (Python3Parser.FLOAT_NUMBER - 32)) | (1 << (Python3Parser.IMAG_NUMBER - 32)) | (1 << (Python3Parser.ELLIPSIS - 32)) | (1 << (Python3Parser.STAR - 32)) | (1 << (Python3Parser.OPEN_PAREN - 32)) | (1 << (Python3Parser.OPEN_BRACK - 32)) | (1 << (Python3Parser.ADD - 32)) | (1 << (Python3Parser.MINUS - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (Python3Parser.NOT_OP - 66)) | (1 << (Python3Parser.OPEN_BRACE - 66)) | (1 << (Python3Parser.AT - 66)))) !== 0)) {
				{
				this.state = 177;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.NEWLINE:
					{
					this.state = 175;
					this.match(Python3Parser.NEWLINE);
					}
					break;
				case Python3Parser.DEF:
				case Python3Parser.RETURN:
				case Python3Parser.RAISE:
				case Python3Parser.FROM:
				case Python3Parser.IMPORT:
				case Python3Parser.GLOBAL:
				case Python3Parser.NONLOCAL:
				case Python3Parser.ASSERT:
				case Python3Parser.IF:
				case Python3Parser.WHILE:
				case Python3Parser.FOR:
				case Python3Parser.TRY:
				case Python3Parser.WITH:
				case Python3Parser.LAMBDA:
				case Python3Parser.NOT:
				case Python3Parser.NONE:
				case Python3Parser.TRUE:
				case Python3Parser.FALSE:
				case Python3Parser.CLASS:
				case Python3Parser.YIELD:
				case Python3Parser.DEL:
				case Python3Parser.PASS:
				case Python3Parser.CONTINUE:
				case Python3Parser.BREAK:
				case Python3Parser.NAME:
				case Python3Parser.STRING_LITERAL:
				case Python3Parser.BYTES_LITERAL:
				case Python3Parser.DECIMAL_INTEGER:
				case Python3Parser.OCT_INTEGER:
				case Python3Parser.HEX_INTEGER:
				case Python3Parser.BIN_INTEGER:
				case Python3Parser.FLOAT_NUMBER:
				case Python3Parser.IMAG_NUMBER:
				case Python3Parser.ELLIPSIS:
				case Python3Parser.STAR:
				case Python3Parser.OPEN_PAREN:
				case Python3Parser.OPEN_BRACK:
				case Python3Parser.ADD:
				case Python3Parser.MINUS:
				case Python3Parser.NOT_OP:
				case Python3Parser.OPEN_BRACE:
				case Python3Parser.AT:
					{
					this.state = 176;
					this.stmt();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 182;
			this.match(Python3Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public eval_input(): Eval_inputContext {
		let _localctx: Eval_inputContext = new Eval_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Python3Parser.RULE_eval_input);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.testlist();
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.NEWLINE) {
				{
				{
				this.state = 185;
				this.match(Python3Parser.NEWLINE);
				}
				}
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 191;
			this.match(Python3Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public decorator(): DecoratorContext {
		let _localctx: DecoratorContext = new DecoratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Python3Parser.RULE_decorator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.match(Python3Parser.AT);
			this.state = 194;
			this.dotted_name();
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.OPEN_PAREN) {
				{
				this.state = 195;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (Python3Parser.POWER - 52)) | (1 << (Python3Parser.OPEN_BRACK - 52)) | (1 << (Python3Parser.ADD - 52)) | (1 << (Python3Parser.MINUS - 52)) | (1 << (Python3Parser.NOT_OP - 52)) | (1 << (Python3Parser.OPEN_BRACE - 52)))) !== 0)) {
					{
					this.state = 196;
					this.arglist();
					}
				}

				this.state = 199;
				this.match(Python3Parser.CLOSE_PAREN);
				}
			}

			this.state = 202;
			this.match(Python3Parser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public decorators(): DecoratorsContext {
		let _localctx: DecoratorsContext = new DecoratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Python3Parser.RULE_decorators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 204;
				this.decorator();
				}
				}
				this.state = 207; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===Python3Parser.AT );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public decorated(): DecoratedContext {
		let _localctx: DecoratedContext = new DecoratedContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Python3Parser.RULE_decorated);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.decorators();
			this.state = 212;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.CLASS:
				{
				this.state = 210;
				this.classdef();
				}
				break;
			case Python3Parser.DEF:
				{
				this.state = 211;
				this.funcdef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public funcdef(): FuncdefContext {
		let _localctx: FuncdefContext = new FuncdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Python3Parser.RULE_funcdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.match(Python3Parser.DEF);
			this.state = 215;
			this.match(Python3Parser.NAME);
			this.state = 216;
			this.parameters();
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.ARROW) {
				{
				this.state = 217;
				this.match(Python3Parser.ARROW);
				this.state = 218;
				this.test();
				}
			}

			this.state = 221;
			this.match(Python3Parser.COLON);
			this.state = 222;
			this.suite();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Python3Parser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.match(Python3Parser.OPEN_PAREN);
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (Python3Parser.NAME - 35)) | (1 << (Python3Parser.STAR - 35)) | (1 << (Python3Parser.POWER - 35)))) !== 0)) {
				{
				this.state = 225;
				this.typedargslist();
				}
			}

			this.state = 228;
			this.match(Python3Parser.CLOSE_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typedargslist(): TypedargslistContext {
		let _localctx: TypedargslistContext = new TypedargslistContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Python3Parser.RULE_typedargslist);
		let _la: number;
		try {
			let _alt: number;
			this.state = 295;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 230;
				this.tfpdef();
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.ASSIGN) {
					{
					this.state = 231;
					this.match(Python3Parser.ASSIGN);
					this.state = 232;
					this.test();
					}
				}

				this.state = 243;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,12,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 235;
						this.match(Python3Parser.COMMA);
						this.state = 236;
						this.tfpdef();
						this.state = 239;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===Python3Parser.ASSIGN) {
							{
							this.state = 237;
							this.match(Python3Parser.ASSIGN);
							this.state = 238;
							this.test();
							}
						}

						}
						} 
					}
					this.state = 245;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,12,this._ctx);
				}
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COMMA) {
					{
					this.state = 246;
					this.match(Python3Parser.COMMA);
					this.state = 269;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.STAR:
						{
						this.state = 247;
						this.match(Python3Parser.STAR);
						this.state = 249;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===Python3Parser.NAME) {
							{
							this.state = 248;
							this.tfpdef();
							}
						}

						this.state = 259;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,15,this._ctx);
						while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
							if ( _alt===1 ) {
								{
								{
								this.state = 251;
								this.match(Python3Parser.COMMA);
								this.state = 252;
								this.tfpdef();
								this.state = 255;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la===Python3Parser.ASSIGN) {
									{
									this.state = 253;
									this.match(Python3Parser.ASSIGN);
									this.state = 254;
									this.test();
									}
								}

								}
								} 
							}
							this.state = 261;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input,15,this._ctx);
						}
						this.state = 265;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===Python3Parser.COMMA) {
							{
							this.state = 262;
							this.match(Python3Parser.COMMA);
							this.state = 263;
							this.match(Python3Parser.POWER);
							this.state = 264;
							this.tfpdef();
							}
						}

						}
						break;
					case Python3Parser.POWER:
						{
						this.state = 267;
						this.match(Python3Parser.POWER);
						this.state = 268;
						this.tfpdef();
						}
						break;
					case Python3Parser.CLOSE_PAREN:
						break;
					default:
						break;
					}
					}
				}

				}
				break;
			case Python3Parser.STAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 273;
				this.match(Python3Parser.STAR);
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.NAME) {
					{
					this.state = 274;
					this.tfpdef();
					}
				}

				this.state = 285;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,21,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 277;
						this.match(Python3Parser.COMMA);
						this.state = 278;
						this.tfpdef();
						this.state = 281;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===Python3Parser.ASSIGN) {
							{
							this.state = 279;
							this.match(Python3Parser.ASSIGN);
							this.state = 280;
							this.test();
							}
						}

						}
						} 
					}
					this.state = 287;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,21,this._ctx);
				}
				this.state = 291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COMMA) {
					{
					this.state = 288;
					this.match(Python3Parser.COMMA);
					this.state = 289;
					this.match(Python3Parser.POWER);
					this.state = 290;
					this.tfpdef();
					}
				}

				}
				break;
			case Python3Parser.POWER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 293;
				this.match(Python3Parser.POWER);
				this.state = 294;
				this.tfpdef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tfpdef(): TfpdefContext {
		let _localctx: TfpdefContext = new TfpdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Python3Parser.RULE_tfpdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.match(Python3Parser.NAME);
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COLON) {
				{
				this.state = 298;
				this.match(Python3Parser.COLON);
				this.state = 299;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public varargslist(): VarargslistContext {
		let _localctx: VarargslistContext = new VarargslistContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Python3Parser.RULE_varargslist);
		let _la: number;
		try {
			let _alt: number;
			this.state = 367;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 302;
				this.vfpdef();
				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.ASSIGN) {
					{
					this.state = 303;
					this.match(Python3Parser.ASSIGN);
					this.state = 304;
					this.test();
					}
				}

				this.state = 315;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,27,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 307;
						this.match(Python3Parser.COMMA);
						this.state = 308;
						this.vfpdef();
						this.state = 311;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===Python3Parser.ASSIGN) {
							{
							this.state = 309;
							this.match(Python3Parser.ASSIGN);
							this.state = 310;
							this.test();
							}
						}

						}
						} 
					}
					this.state = 317;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,27,this._ctx);
				}
				this.state = 343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COMMA) {
					{
					this.state = 318;
					this.match(Python3Parser.COMMA);
					this.state = 341;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.STAR:
						{
						this.state = 319;
						this.match(Python3Parser.STAR);
						this.state = 321;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===Python3Parser.NAME) {
							{
							this.state = 320;
							this.vfpdef();
							}
						}

						this.state = 331;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,30,this._ctx);
						while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
							if ( _alt===1 ) {
								{
								{
								this.state = 323;
								this.match(Python3Parser.COMMA);
								this.state = 324;
								this.vfpdef();
								this.state = 327;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la===Python3Parser.ASSIGN) {
									{
									this.state = 325;
									this.match(Python3Parser.ASSIGN);
									this.state = 326;
									this.test();
									}
								}

								}
								} 
							}
							this.state = 333;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input,30,this._ctx);
						}
						this.state = 337;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===Python3Parser.COMMA) {
							{
							this.state = 334;
							this.match(Python3Parser.COMMA);
							this.state = 335;
							this.match(Python3Parser.POWER);
							this.state = 336;
							this.vfpdef();
							}
						}

						}
						break;
					case Python3Parser.POWER:
						{
						this.state = 339;
						this.match(Python3Parser.POWER);
						this.state = 340;
						this.vfpdef();
						}
						break;
					case Python3Parser.COLON:
						break;
					default:
						break;
					}
					}
				}

				}
				break;
			case Python3Parser.STAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 345;
				this.match(Python3Parser.STAR);
				this.state = 347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.NAME) {
					{
					this.state = 346;
					this.vfpdef();
					}
				}

				this.state = 357;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,36,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 349;
						this.match(Python3Parser.COMMA);
						this.state = 350;
						this.vfpdef();
						this.state = 353;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===Python3Parser.ASSIGN) {
							{
							this.state = 351;
							this.match(Python3Parser.ASSIGN);
							this.state = 352;
							this.test();
							}
						}

						}
						} 
					}
					this.state = 359;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,36,this._ctx);
				}
				this.state = 363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COMMA) {
					{
					this.state = 360;
					this.match(Python3Parser.COMMA);
					this.state = 361;
					this.match(Python3Parser.POWER);
					this.state = 362;
					this.vfpdef();
					}
				}

				}
				break;
			case Python3Parser.POWER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 365;
				this.match(Python3Parser.POWER);
				this.state = 366;
				this.vfpdef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public vfpdef(): VfpdefContext {
		let _localctx: VfpdefContext = new VfpdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Python3Parser.RULE_vfpdef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this.match(Python3Parser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, Python3Parser.RULE_stmt);
		try {
			this.state = 373;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.RETURN:
			case Python3Parser.RAISE:
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
			case Python3Parser.GLOBAL:
			case Python3Parser.NONLOCAL:
			case Python3Parser.ASSERT:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.YIELD:
			case Python3Parser.DEL:
			case Python3Parser.PASS:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 371;
				this.simple_stmt();
				}
				break;
			case Python3Parser.DEF:
			case Python3Parser.IF:
			case Python3Parser.WHILE:
			case Python3Parser.FOR:
			case Python3Parser.TRY:
			case Python3Parser.WITH:
			case Python3Parser.CLASS:
			case Python3Parser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 372;
				this.compound_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public simple_stmt(): Simple_stmtContext {
		let _localctx: Simple_stmtContext = new Simple_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Python3Parser.RULE_simple_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
			this.small_stmt();
			this.state = 380;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,40,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 376;
					this.match(Python3Parser.SEMI_COLON);
					this.state = 377;
					this.small_stmt();
					}
					} 
				}
				this.state = 382;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,40,this._ctx);
			}
			this.state = 384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.SEMI_COLON) {
				{
				this.state = 383;
				this.match(Python3Parser.SEMI_COLON);
				}
			}

			this.state = 386;
			this.match(Python3Parser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public small_stmt(): Small_stmtContext {
		let _localctx: Small_stmtContext = new Small_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, Python3Parser.RULE_small_stmt);
		try {
			this.state = 396;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 388;
				this.expr_stmt();
				}
				break;
			case Python3Parser.DEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 389;
				this.del_stmt();
				}
				break;
			case Python3Parser.PASS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 390;
				this.pass_stmt();
				}
				break;
			case Python3Parser.RETURN:
			case Python3Parser.RAISE:
			case Python3Parser.YIELD:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 391;
				this.flow_stmt();
				}
				break;
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 392;
				this.import_stmt();
				}
				break;
			case Python3Parser.GLOBAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 393;
				this.global_stmt();
				}
				break;
			case Python3Parser.NONLOCAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 394;
				this.nonlocal_stmt();
				}
				break;
			case Python3Parser.ASSERT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 395;
				this.assert_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expr_stmt(): Expr_stmtContext {
		let _localctx: Expr_stmtContext = new Expr_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, Python3Parser.RULE_expr_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			_localctx._ls = this.testlist_star_expr();
			 this.checkMethodInvocation((_localctx._ls!=null?(_localctx._ls._start):undefined).text); 
			this.state = 418;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.ADD_ASSIGN:
			case Python3Parser.SUB_ASSIGN:
			case Python3Parser.MULT_ASSIGN:
			case Python3Parser.AT_ASSIGN:
			case Python3Parser.DIV_ASSIGN:
			case Python3Parser.MOD_ASSIGN:
			case Python3Parser.AND_ASSIGN:
			case Python3Parser.OR_ASSIGN:
			case Python3Parser.XOR_ASSIGN:
			case Python3Parser.LEFT_SHIFT_ASSIGN:
			case Python3Parser.RIGHT_SHIFT_ASSIGN:
			case Python3Parser.POWER_ASSIGN:
			case Python3Parser.IDIV_ASSIGN:
				{
				this.state = 400;
				this.augassign();
				this.state = 403;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.YIELD:
					{
					this.state = 401;
					this.yield_expr();
					}
					break;
				case Python3Parser.LAMBDA:
				case Python3Parser.NOT:
				case Python3Parser.NONE:
				case Python3Parser.TRUE:
				case Python3Parser.FALSE:
				case Python3Parser.NAME:
				case Python3Parser.STRING_LITERAL:
				case Python3Parser.BYTES_LITERAL:
				case Python3Parser.DECIMAL_INTEGER:
				case Python3Parser.OCT_INTEGER:
				case Python3Parser.HEX_INTEGER:
				case Python3Parser.BIN_INTEGER:
				case Python3Parser.FLOAT_NUMBER:
				case Python3Parser.IMAG_NUMBER:
				case Python3Parser.ELLIPSIS:
				case Python3Parser.STAR:
				case Python3Parser.OPEN_PAREN:
				case Python3Parser.OPEN_BRACK:
				case Python3Parser.ADD:
				case Python3Parser.MINUS:
				case Python3Parser.NOT_OP:
				case Python3Parser.OPEN_BRACE:
					{
					this.state = 402;
					this.testlist();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case Python3Parser.NEWLINE:
			case Python3Parser.SEMI_COLON:
			case Python3Parser.ASSIGN:
				{
				this.state = 415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Python3Parser.ASSIGN) {
					{
					{
					this.state = 405;
					this.match(Python3Parser.ASSIGN);
					 this.assignments.newAssignmentOn((_localctx._ls!=null?(_localctx._ls._start):undefined)); 
					this.state = 411;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.YIELD:
						{
						this.state = 407;
						this.yield_expr();
						}
						break;
					case Python3Parser.LAMBDA:
					case Python3Parser.NOT:
					case Python3Parser.NONE:
					case Python3Parser.TRUE:
					case Python3Parser.FALSE:
					case Python3Parser.NAME:
					case Python3Parser.STRING_LITERAL:
					case Python3Parser.BYTES_LITERAL:
					case Python3Parser.DECIMAL_INTEGER:
					case Python3Parser.OCT_INTEGER:
					case Python3Parser.HEX_INTEGER:
					case Python3Parser.BIN_INTEGER:
					case Python3Parser.FLOAT_NUMBER:
					case Python3Parser.IMAG_NUMBER:
					case Python3Parser.ELLIPSIS:
					case Python3Parser.STAR:
					case Python3Parser.OPEN_PAREN:
					case Python3Parser.OPEN_BRACK:
					case Python3Parser.ADD:
					case Python3Parser.MINUS:
					case Python3Parser.NOT_OP:
					case Python3Parser.OPEN_BRACE:
						{
						this.state = 408;
						this.testlist_star_expr();
						 this.applyAssignment((_localctx._ls!=null?this._input.getTextFromRange(_localctx._ls._start,_localctx._ls._stop):undefined)); 
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					this.state = 417;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public testlist_star_expr(): Testlist_star_exprContext {
		let _localctx: Testlist_star_exprContext = new Testlist_star_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, Python3Parser.RULE_testlist_star_expr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,47,this._ctx) ) {
			case 1:
				{
				this.state = 420;
				this.test();
				}
				break;

			case 2:
				{
				this.state = 421;
				this.star_expr();
				}
				break;
			}
			this.state = 431;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,49,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 424;
					this.match(Python3Parser.COMMA);
					this.state = 427;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,48,this._ctx) ) {
					case 1:
						{
						this.state = 425;
						this.test();
						}
						break;

					case 2:
						{
						this.state = 426;
						this.star_expr();
						}
						break;
					}
					}
					} 
				}
				this.state = 433;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,49,this._ctx);
			}
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 434;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public augassign(): AugassignContext {
		let _localctx: AugassignContext = new AugassignContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, Python3Parser.RULE_augassign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			_la = this._input.LA(1);
			if ( !(((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Python3Parser.ADD_ASSIGN - 78)) | (1 << (Python3Parser.SUB_ASSIGN - 78)) | (1 << (Python3Parser.MULT_ASSIGN - 78)) | (1 << (Python3Parser.AT_ASSIGN - 78)) | (1 << (Python3Parser.DIV_ASSIGN - 78)) | (1 << (Python3Parser.MOD_ASSIGN - 78)) | (1 << (Python3Parser.AND_ASSIGN - 78)) | (1 << (Python3Parser.OR_ASSIGN - 78)) | (1 << (Python3Parser.XOR_ASSIGN - 78)) | (1 << (Python3Parser.LEFT_SHIFT_ASSIGN - 78)) | (1 << (Python3Parser.RIGHT_SHIFT_ASSIGN - 78)) | (1 << (Python3Parser.POWER_ASSIGN - 78)) | (1 << (Python3Parser.IDIV_ASSIGN - 78)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public del_stmt(): Del_stmtContext {
		let _localctx: Del_stmtContext = new Del_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Python3Parser.RULE_del_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.match(Python3Parser.DEL);
			this.state = 440;
			this.exprlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public pass_stmt(): Pass_stmtContext {
		let _localctx: Pass_stmtContext = new Pass_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, Python3Parser.RULE_pass_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this.match(Python3Parser.PASS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public flow_stmt(): Flow_stmtContext {
		let _localctx: Flow_stmtContext = new Flow_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, Python3Parser.RULE_flow_stmt);
		try {
			this.state = 449;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.BREAK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 444;
				this.break_stmt();
				}
				break;
			case Python3Parser.CONTINUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 445;
				this.continue_stmt();
				}
				break;
			case Python3Parser.RETURN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 446;
				this.return_stmt();
				}
				break;
			case Python3Parser.RAISE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 447;
				this.raise_stmt();
				}
				break;
			case Python3Parser.YIELD:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 448;
				this.yield_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public break_stmt(): Break_stmtContext {
		let _localctx: Break_stmtContext = new Break_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, Python3Parser.RULE_break_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
			this.match(Python3Parser.BREAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public continue_stmt(): Continue_stmtContext {
		let _localctx: Continue_stmtContext = new Continue_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, Python3Parser.RULE_continue_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			this.match(Python3Parser.CONTINUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public return_stmt(): Return_stmtContext {
		let _localctx: Return_stmtContext = new Return_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, Python3Parser.RULE_return_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this.match(Python3Parser.RETURN);
			this.state = 457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (Python3Parser.OPEN_BRACK - 54)) | (1 << (Python3Parser.ADD - 54)) | (1 << (Python3Parser.MINUS - 54)) | (1 << (Python3Parser.NOT_OP - 54)) | (1 << (Python3Parser.OPEN_BRACE - 54)))) !== 0)) {
				{
				this.state = 456;
				this.testlist();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public yield_stmt(): Yield_stmtContext {
		let _localctx: Yield_stmtContext = new Yield_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, Python3Parser.RULE_yield_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			this.yield_expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public raise_stmt(): Raise_stmtContext {
		let _localctx: Raise_stmtContext = new Raise_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, Python3Parser.RULE_raise_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 461;
			this.match(Python3Parser.RAISE);
			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (Python3Parser.OPEN_BRACK - 54)) | (1 << (Python3Parser.ADD - 54)) | (1 << (Python3Parser.MINUS - 54)) | (1 << (Python3Parser.NOT_OP - 54)) | (1 << (Python3Parser.OPEN_BRACE - 54)))) !== 0)) {
				{
				this.state = 462;
				this.test();
				this.state = 465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.FROM) {
					{
					this.state = 463;
					this.match(Python3Parser.FROM);
					this.state = 464;
					this.test();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public import_stmt(): Import_stmtContext {
		let _localctx: Import_stmtContext = new Import_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, Python3Parser.RULE_import_stmt);
		try {
			this.state = 471;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.IMPORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 469;
				this.import_name();
				}
				break;
			case Python3Parser.FROM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 470;
				this.import_from();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public import_name(): Import_nameContext {
		let _localctx: Import_nameContext = new Import_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, Python3Parser.RULE_import_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this.match(Python3Parser.IMPORT);
			this.state = 474;
			this.dotted_as_names();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public import_from(): Import_fromContext {
		let _localctx: Import_fromContext = new Import_fromContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, Python3Parser.RULE_import_from);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
			this.match(Python3Parser.FROM);
			this.state = 489;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,58,this._ctx) ) {
			case 1:
				{
				this.state = 480;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Python3Parser.DOT || _la===Python3Parser.ELLIPSIS) {
					{
					{
					this.state = 477;
					_la = this._input.LA(1);
					if ( !(_la===Python3Parser.DOT || _la===Python3Parser.ELLIPSIS) ) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					this.state = 482;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 483;
				this.dotted_name();
				}
				break;

			case 2:
				{
				this.state = 485; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 484;
					_la = this._input.LA(1);
					if ( !(_la===Python3Parser.DOT || _la===Python3Parser.ELLIPSIS) ) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					this.state = 487; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===Python3Parser.DOT || _la===Python3Parser.ELLIPSIS );
				}
				break;
			}
			this.state = 491;
			this.match(Python3Parser.IMPORT);
			this.state = 498;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STAR:
				{
				this.state = 492;
				this.match(Python3Parser.STAR);
				}
				break;
			case Python3Parser.OPEN_PAREN:
				{
				this.state = 493;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 494;
				this.import_as_names();
				this.state = 495;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case Python3Parser.NAME:
				{
				this.state = 497;
				this.import_as_names();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public import_as_name(): Import_as_nameContext {
		let _localctx: Import_as_nameContext = new Import_as_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, Python3Parser.RULE_import_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			this.match(Python3Parser.NAME);
			this.state = 503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.AS) {
				{
				this.state = 501;
				this.match(Python3Parser.AS);
				this.state = 502;
				this.match(Python3Parser.NAME);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dotted_as_name(): Dotted_as_nameContext {
		let _localctx: Dotted_as_nameContext = new Dotted_as_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, Python3Parser.RULE_dotted_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 505;
			this.dotted_name();
			this.state = 508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.AS) {
				{
				this.state = 506;
				this.match(Python3Parser.AS);
				this.state = 507;
				this.match(Python3Parser.NAME);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public import_as_names(): Import_as_namesContext {
		let _localctx: Import_as_namesContext = new Import_as_namesContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, Python3Parser.RULE_import_as_names);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			this.import_as_name();
			this.state = 515;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,62,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 511;
					this.match(Python3Parser.COMMA);
					this.state = 512;
					this.import_as_name();
					}
					} 
				}
				this.state = 517;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,62,this._ctx);
			}
			this.state = 519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 518;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dotted_as_names(): Dotted_as_namesContext {
		let _localctx: Dotted_as_namesContext = new Dotted_as_namesContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, Python3Parser.RULE_dotted_as_names);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			this.dotted_as_name();
			this.state = 526;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.COMMA) {
				{
				{
				this.state = 522;
				this.match(Python3Parser.COMMA);
				this.state = 523;
				this.dotted_as_name();
				}
				}
				this.state = 528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dotted_name(): Dotted_nameContext {
		let _localctx: Dotted_nameContext = new Dotted_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, Python3Parser.RULE_dotted_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this.match(Python3Parser.NAME);
			this.state = 534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.DOT) {
				{
				{
				this.state = 530;
				this.match(Python3Parser.DOT);
				this.state = 531;
				this.match(Python3Parser.NAME);
				}
				}
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public global_stmt(): Global_stmtContext {
		let _localctx: Global_stmtContext = new Global_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, Python3Parser.RULE_global_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			this.match(Python3Parser.GLOBAL);
			this.state = 538;
			this.match(Python3Parser.NAME);
			this.state = 543;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.COMMA) {
				{
				{
				this.state = 539;
				this.match(Python3Parser.COMMA);
				this.state = 540;
				this.match(Python3Parser.NAME);
				}
				}
				this.state = 545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public nonlocal_stmt(): Nonlocal_stmtContext {
		let _localctx: Nonlocal_stmtContext = new Nonlocal_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, Python3Parser.RULE_nonlocal_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(Python3Parser.NONLOCAL);
			this.state = 547;
			this.match(Python3Parser.NAME);
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.COMMA) {
				{
				{
				this.state = 548;
				this.match(Python3Parser.COMMA);
				this.state = 549;
				this.match(Python3Parser.NAME);
				}
				}
				this.state = 554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assert_stmt(): Assert_stmtContext {
		let _localctx: Assert_stmtContext = new Assert_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, Python3Parser.RULE_assert_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 555;
			this.match(Python3Parser.ASSERT);
			this.state = 556;
			this.test();
			this.state = 559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 557;
				this.match(Python3Parser.COMMA);
				this.state = 558;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public compound_stmt(): Compound_stmtContext {
		let _localctx: Compound_stmtContext = new Compound_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, Python3Parser.RULE_compound_stmt);
		try {
			this.state = 569;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 561;
				this.if_stmt();
				}
				break;
			case Python3Parser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 562;
				this.while_stmt();
				}
				break;
			case Python3Parser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 563;
				this.for_stmt();
				}
				break;
			case Python3Parser.TRY:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 564;
				this.try_stmt();
				}
				break;
			case Python3Parser.WITH:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 565;
				this.with_stmt();
				}
				break;
			case Python3Parser.DEF:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 566;
				this.funcdef();
				}
				break;
			case Python3Parser.CLASS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 567;
				this.classdef();
				}
				break;
			case Python3Parser.AT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 568;
				this.decorated();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public if_stmt(): If_stmtContext {
		let _localctx: If_stmtContext = new If_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, Python3Parser.RULE_if_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 571;
			this.match(Python3Parser.IF);
			this.state = 572;
			this.test();
			this.state = 573;
			this.match(Python3Parser.COLON);
			this.state = 574;
			this.suite();
			this.state = 582;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.ELIF) {
				{
				{
				this.state = 575;
				this.match(Python3Parser.ELIF);
				this.state = 576;
				this.test();
				this.state = 577;
				this.match(Python3Parser.COLON);
				this.state = 578;
				this.suite();
				}
				}
				this.state = 584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 588;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.ELSE) {
				{
				this.state = 585;
				this.match(Python3Parser.ELSE);
				this.state = 586;
				this.match(Python3Parser.COLON);
				this.state = 587;
				this.suite();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public while_stmt(): While_stmtContext {
		let _localctx: While_stmtContext = new While_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, Python3Parser.RULE_while_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 590;
			this.match(Python3Parser.WHILE);
			this.state = 591;
			this.test();
			this.state = 592;
			this.match(Python3Parser.COLON);
			this.state = 593;
			this.suite();
			this.state = 597;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.ELSE) {
				{
				this.state = 594;
				this.match(Python3Parser.ELSE);
				this.state = 595;
				this.match(Python3Parser.COLON);
				this.state = 596;
				this.suite();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public for_stmt(): For_stmtContext {
		let _localctx: For_stmtContext = new For_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, Python3Parser.RULE_for_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 599;
			this.match(Python3Parser.FOR);
			this.state = 600;
			this.exprlist();
			this.state = 601;
			this.match(Python3Parser.IN);
			this.state = 602;
			this.testlist();
			this.state = 603;
			this.match(Python3Parser.COLON);
			this.state = 604;
			this.suite();
			this.state = 608;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.ELSE) {
				{
				this.state = 605;
				this.match(Python3Parser.ELSE);
				this.state = 606;
				this.match(Python3Parser.COLON);
				this.state = 607;
				this.suite();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public try_stmt(): Try_stmtContext {
		let _localctx: Try_stmtContext = new Try_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, Python3Parser.RULE_try_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 610;
			this.match(Python3Parser.TRY);
			this.state = 611;
			this.match(Python3Parser.COLON);
			this.state = 612;
			this.suite();
			this.state = 634;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.EXCEPT:
				{
				this.state = 617; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 613;
					this.except_clause();
					this.state = 614;
					this.match(Python3Parser.COLON);
					this.state = 615;
					this.suite();
					}
					}
					this.state = 619; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===Python3Parser.EXCEPT );
				this.state = 624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.ELSE) {
					{
					this.state = 621;
					this.match(Python3Parser.ELSE);
					this.state = 622;
					this.match(Python3Parser.COLON);
					this.state = 623;
					this.suite();
					}
				}

				this.state = 629;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.FINALLY) {
					{
					this.state = 626;
					this.match(Python3Parser.FINALLY);
					this.state = 627;
					this.match(Python3Parser.COLON);
					this.state = 628;
					this.suite();
					}
				}

				}
				break;
			case Python3Parser.FINALLY:
				{
				this.state = 631;
				this.match(Python3Parser.FINALLY);
				this.state = 632;
				this.match(Python3Parser.COLON);
				this.state = 633;
				this.suite();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public with_stmt(): With_stmtContext {
		let _localctx: With_stmtContext = new With_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, Python3Parser.RULE_with_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			this.match(Python3Parser.WITH);
			this.state = 637;
			this.with_item();
			this.state = 642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.COMMA) {
				{
				{
				this.state = 638;
				this.match(Python3Parser.COMMA);
				this.state = 639;
				this.with_item();
				}
				}
				this.state = 644;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 645;
			this.match(Python3Parser.COLON);
			this.state = 646;
			this.suite();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public with_item(): With_itemContext {
		let _localctx: With_itemContext = new With_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, Python3Parser.RULE_with_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 648;
			this.test();
			this.state = 651;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.AS) {
				{
				this.state = 649;
				this.match(Python3Parser.AS);
				this.state = 650;
				this.expr();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public except_clause(): Except_clauseContext {
		let _localctx: Except_clauseContext = new Except_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, Python3Parser.RULE_except_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 653;
			this.match(Python3Parser.EXCEPT);
			this.state = 659;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (Python3Parser.OPEN_BRACK - 54)) | (1 << (Python3Parser.ADD - 54)) | (1 << (Python3Parser.MINUS - 54)) | (1 << (Python3Parser.NOT_OP - 54)) | (1 << (Python3Parser.OPEN_BRACE - 54)))) !== 0)) {
				{
				this.state = 654;
				this.test();
				this.state = 657;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.AS) {
					{
					this.state = 655;
					this.match(Python3Parser.AS);
					this.state = 656;
					this.match(Python3Parser.NAME);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public suite(): SuiteContext {
		let _localctx: SuiteContext = new SuiteContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, Python3Parser.RULE_suite);
		let _la: number;
		try {
			this.state = 671;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.RETURN:
			case Python3Parser.RAISE:
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
			case Python3Parser.GLOBAL:
			case Python3Parser.NONLOCAL:
			case Python3Parser.ASSERT:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.YIELD:
			case Python3Parser.DEL:
			case Python3Parser.PASS:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 661;
				this.simple_stmt();
				}
				break;
			case Python3Parser.NEWLINE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 662;
				this.match(Python3Parser.NEWLINE);
				this.state = 663;
				this.match(Python3Parser.INDENT);
				this.state = 665; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 664;
					this.stmt();
					}
					}
					this.state = 667; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.DEF) | (1 << Python3Parser.RETURN) | (1 << Python3Parser.RAISE) | (1 << Python3Parser.FROM) | (1 << Python3Parser.IMPORT) | (1 << Python3Parser.GLOBAL) | (1 << Python3Parser.NONLOCAL) | (1 << Python3Parser.ASSERT) | (1 << Python3Parser.IF) | (1 << Python3Parser.WHILE) | (1 << Python3Parser.FOR) | (1 << Python3Parser.TRY) | (1 << Python3Parser.WITH) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE) | (1 << Python3Parser.CLASS) | (1 << Python3Parser.YIELD) | (1 << Python3Parser.DEL) | (1 << Python3Parser.PASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Python3Parser.CONTINUE - 32)) | (1 << (Python3Parser.BREAK - 32)) | (1 << (Python3Parser.NAME - 32)) | (1 << (Python3Parser.STRING_LITERAL - 32)) | (1 << (Python3Parser.BYTES_LITERAL - 32)) | (1 << (Python3Parser.DECIMAL_INTEGER - 32)) | (1 << (Python3Parser.OCT_INTEGER - 32)) | (1 << (Python3Parser.HEX_INTEGER - 32)) | (1 << (Python3Parser.BIN_INTEGER - 32)) | (1 << (Python3Parser.FLOAT_NUMBER - 32)) | (1 << (Python3Parser.IMAG_NUMBER - 32)) | (1 << (Python3Parser.ELLIPSIS - 32)) | (1 << (Python3Parser.STAR - 32)) | (1 << (Python3Parser.OPEN_PAREN - 32)) | (1 << (Python3Parser.OPEN_BRACK - 32)) | (1 << (Python3Parser.ADD - 32)) | (1 << (Python3Parser.MINUS - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (Python3Parser.NOT_OP - 66)) | (1 << (Python3Parser.OPEN_BRACE - 66)) | (1 << (Python3Parser.AT - 66)))) !== 0) );
				this.state = 669;
				this.match(Python3Parser.DEDENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public test(): TestContext {
		let _localctx: TestContext = new TestContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, Python3Parser.RULE_test);
		let _la: number;
		try {
			this.state = 682;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 673;
				this.or_test();
				this.state = 679;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.IF) {
					{
					this.state = 674;
					this.match(Python3Parser.IF);
					this.state = 675;
					this.or_test();
					this.state = 676;
					this.match(Python3Parser.ELSE);
					this.state = 677;
					this.test();
					}
				}

				}
				break;
			case Python3Parser.LAMBDA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 681;
				this.lambdef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public test_nocond(): Test_nocondContext {
		let _localctx: Test_nocondContext = new Test_nocondContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, Python3Parser.RULE_test_nocond);
		try {
			this.state = 686;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 684;
				this.or_test();
				}
				break;
			case Python3Parser.LAMBDA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 685;
				this.lambdef_nocond();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lambdef(): LambdefContext {
		let _localctx: LambdefContext = new LambdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, Python3Parser.RULE_lambdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 688;
			this.match(Python3Parser.LAMBDA);
			this.state = 690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (Python3Parser.NAME - 35)) | (1 << (Python3Parser.STAR - 35)) | (1 << (Python3Parser.POWER - 35)))) !== 0)) {
				{
				this.state = 689;
				this.varargslist();
				}
			}

			this.state = 692;
			this.match(Python3Parser.COLON);
			this.state = 693;
			this.test();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lambdef_nocond(): Lambdef_nocondContext {
		let _localctx: Lambdef_nocondContext = new Lambdef_nocondContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, Python3Parser.RULE_lambdef_nocond);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 695;
			this.match(Python3Parser.LAMBDA);
			this.state = 697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (Python3Parser.NAME - 35)) | (1 << (Python3Parser.STAR - 35)) | (1 << (Python3Parser.POWER - 35)))) !== 0)) {
				{
				this.state = 696;
				this.varargslist();
				}
			}

			this.state = 699;
			this.match(Python3Parser.COLON);
			this.state = 700;
			this.test_nocond();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public or_test(): Or_testContext {
		let _localctx: Or_testContext = new Or_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, Python3Parser.RULE_or_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 702;
			this.and_test();
			this.state = 707;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.OR) {
				{
				{
				this.state = 703;
				this.match(Python3Parser.OR);
				this.state = 704;
				this.and_test();
				}
				}
				this.state = 709;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public and_test(): And_testContext {
		let _localctx: And_testContext = new And_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, Python3Parser.RULE_and_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 710;
			this.not_test();
			this.state = 715;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.AND) {
				{
				{
				this.state = 711;
				this.match(Python3Parser.AND);
				this.state = 712;
				this.not_test();
				}
				}
				this.state = 717;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public not_test(): Not_testContext {
		let _localctx: Not_testContext = new Not_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, Python3Parser.RULE_not_test);
		try {
			this.state = 721;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 718;
				this.match(Python3Parser.NOT);
				this.state = 719;
				this.not_test();
				}
				break;
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 720;
				this.comparison();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, Python3Parser.RULE_comparison);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 723;
			this.star_expr();
			this.state = 729;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.IN) | (1 << Python3Parser.NOT) | (1 << Python3Parser.IS))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Python3Parser.LESS_THAN - 69)) | (1 << (Python3Parser.GREATER_THAN - 69)) | (1 << (Python3Parser.EQUALS - 69)) | (1 << (Python3Parser.GT_EQ - 69)) | (1 << (Python3Parser.LT_EQ - 69)) | (1 << (Python3Parser.NOT_EQ_1 - 69)) | (1 << (Python3Parser.NOT_EQ_2 - 69)))) !== 0)) {
				{
				{
				this.state = 724;
				this.comp_op();
				this.state = 725;
				this.star_expr();
				}
				}
				this.state = 731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public comp_op(): Comp_opContext {
		let _localctx: Comp_opContext = new Comp_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, Python3Parser.RULE_comp_op);
		try {
			this.state = 745;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,93,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 732;
				this.match(Python3Parser.LESS_THAN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 733;
				this.match(Python3Parser.GREATER_THAN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 734;
				this.match(Python3Parser.EQUALS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 735;
				this.match(Python3Parser.GT_EQ);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 736;
				this.match(Python3Parser.LT_EQ);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 737;
				this.match(Python3Parser.NOT_EQ_1);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 738;
				this.match(Python3Parser.NOT_EQ_2);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 739;
				this.match(Python3Parser.IN);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 740;
				this.match(Python3Parser.NOT);
				this.state = 741;
				this.match(Python3Parser.IN);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 742;
				this.match(Python3Parser.IS);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 743;
				this.match(Python3Parser.IS);
				this.state = 744;
				this.match(Python3Parser.NOT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public star_expr(): Star_exprContext {
		let _localctx: Star_exprContext = new Star_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, Python3Parser.RULE_star_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.STAR) {
				{
				this.state = 747;
				this.match(Python3Parser.STAR);
				}
			}

			this.state = 750;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, Python3Parser.RULE_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 752;
			this.xor_expr();
			this.state = 757;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.OR_OP) {
				{
				{
				this.state = 753;
				this.match(Python3Parser.OR_OP);
				this.state = 754;
				this.xor_expr();
				}
				}
				this.state = 759;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public xor_expr(): Xor_exprContext {
		let _localctx: Xor_exprContext = new Xor_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, Python3Parser.RULE_xor_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 760;
			this.and_expr();
			this.state = 765;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.XOR) {
				{
				{
				this.state = 761;
				this.match(Python3Parser.XOR);
				this.state = 762;
				this.and_expr();
				}
				}
				this.state = 767;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public and_expr(): And_exprContext {
		let _localctx: And_exprContext = new And_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, Python3Parser.RULE_and_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 768;
			this.shift_expr();
			this.state = 773;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.AND_OP) {
				{
				{
				this.state = 769;
				this.match(Python3Parser.AND_OP);
				this.state = 770;
				this.shift_expr();
				}
				}
				this.state = 775;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public shift_expr(): Shift_exprContext {
		let _localctx: Shift_exprContext = new Shift_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, Python3Parser.RULE_shift_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 776;
			this.arith_expr();
			this.state = 783;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.LEFT_SHIFT || _la===Python3Parser.RIGHT_SHIFT) {
				{
				this.state = 781;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.LEFT_SHIFT:
					{
					this.state = 777;
					this.match(Python3Parser.LEFT_SHIFT);
					this.state = 778;
					this.arith_expr();
					}
					break;
				case Python3Parser.RIGHT_SHIFT:
					{
					this.state = 779;
					this.match(Python3Parser.RIGHT_SHIFT);
					this.state = 780;
					this.arith_expr();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 785;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arith_expr(): Arith_exprContext {
		let _localctx: Arith_exprContext = new Arith_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, Python3Parser.RULE_arith_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 786;
			this.term();
			this.state = 793;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.ADD || _la===Python3Parser.MINUS) {
				{
				this.state = 791;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.ADD:
					{
					this.state = 787;
					this.match(Python3Parser.ADD);
					this.state = 788;
					this.term();
					}
					break;
				case Python3Parser.MINUS:
					{
					this.state = 789;
					this.match(Python3Parser.MINUS);
					this.state = 790;
					this.term();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 795;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, Python3Parser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 796;
			this.factor();
			this.state = 809;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (Python3Parser.STAR - 46)) | (1 << (Python3Parser.DIV - 46)) | (1 << (Python3Parser.MOD - 46)) | (1 << (Python3Parser.IDIV - 46)) | (1 << (Python3Parser.AT - 46)))) !== 0)) {
				{
				this.state = 807;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.STAR:
					{
					this.state = 797;
					this.match(Python3Parser.STAR);
					this.state = 798;
					this.factor();
					}
					break;
				case Python3Parser.DIV:
					{
					this.state = 799;
					this.match(Python3Parser.DIV);
					this.state = 800;
					this.factor();
					}
					break;
				case Python3Parser.MOD:
					{
					this.state = 801;
					this.match(Python3Parser.MOD);
					this.state = 802;
					this.factor();
					}
					break;
				case Python3Parser.IDIV:
					{
					this.state = 803;
					this.match(Python3Parser.IDIV);
					this.state = 804;
					this.factor();
					}
					break;
				case Python3Parser.AT:
					{
					this.state = 805;
					this.match(Python3Parser.AT);
					this.state = 806;
					this.factor();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 811;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, Python3Parser.RULE_factor);
		try {
			this.state = 819;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.ADD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 812;
				this.match(Python3Parser.ADD);
				this.state = 813;
				this.factor();
				}
				break;
			case Python3Parser.MINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 814;
				this.match(Python3Parser.MINUS);
				this.state = 815;
				this.factor();
				}
				break;
			case Python3Parser.NOT_OP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 816;
				this.match(Python3Parser.NOT_OP);
				this.state = 817;
				this.factor();
				}
				break;
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 818;
				this.power();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public power(): PowerContext {
		let _localctx: PowerContext = new PowerContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, Python3Parser.RULE_power);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 821;
			this.atom();
			this.state = 825;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (Python3Parser.DOT - 44)) | (1 << (Python3Parser.OPEN_PAREN - 44)) | (1 << (Python3Parser.OPEN_BRACK - 44)))) !== 0)) {
				{
				{
				this.state = 822;
				this.trailer();
				}
				}
				this.state = 827;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 830;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.POWER) {
				{
				this.state = 828;
				this.match(Python3Parser.POWER);
				this.state = 829;
				this.factor();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, Python3Parser.RULE_atom);
		let _la: number;
		try {
			this.state = 864;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 832;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 835;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.YIELD:
					{
					this.state = 833;
					this.yield_expr();
					}
					break;
				case Python3Parser.LAMBDA:
				case Python3Parser.NOT:
				case Python3Parser.NONE:
				case Python3Parser.TRUE:
				case Python3Parser.FALSE:
				case Python3Parser.NAME:
				case Python3Parser.STRING_LITERAL:
				case Python3Parser.BYTES_LITERAL:
				case Python3Parser.DECIMAL_INTEGER:
				case Python3Parser.OCT_INTEGER:
				case Python3Parser.HEX_INTEGER:
				case Python3Parser.BIN_INTEGER:
				case Python3Parser.FLOAT_NUMBER:
				case Python3Parser.IMAG_NUMBER:
				case Python3Parser.ELLIPSIS:
				case Python3Parser.STAR:
				case Python3Parser.OPEN_PAREN:
				case Python3Parser.OPEN_BRACK:
				case Python3Parser.ADD:
				case Python3Parser.MINUS:
				case Python3Parser.NOT_OP:
				case Python3Parser.OPEN_BRACE:
					{
					this.state = 834;
					this.testlist_comp();
					}
					break;
				case Python3Parser.CLOSE_PAREN:
					break;
				default:
					break;
				}
				this.state = 837;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case Python3Parser.OPEN_BRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 838;
				this.match(Python3Parser.OPEN_BRACK);
				this.state = 840;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (Python3Parser.OPEN_BRACK - 54)) | (1 << (Python3Parser.ADD - 54)) | (1 << (Python3Parser.MINUS - 54)) | (1 << (Python3Parser.NOT_OP - 54)) | (1 << (Python3Parser.OPEN_BRACE - 54)))) !== 0)) {
					{
					this.state = 839;
					this.testlist_comp();
					}
				}

				this.state = 842;
				this.match(Python3Parser.CLOSE_BRACK);
				}
				break;
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 843;
				this.match(Python3Parser.OPEN_BRACE);
				this.state = 845;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (Python3Parser.OPEN_BRACK - 54)) | (1 << (Python3Parser.ADD - 54)) | (1 << (Python3Parser.MINUS - 54)) | (1 << (Python3Parser.NOT_OP - 54)) | (1 << (Python3Parser.OPEN_BRACE - 54)))) !== 0)) {
					{
					this.state = 844;
					this.dictorsetmaker();
					}
				}

				this.state = 847;
				this.match(Python3Parser.CLOSE_BRACE);
				}
				break;
			case Python3Parser.NAME:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 848;
				_localctx._NAME = this.match(Python3Parser.NAME);
				 
				   if (this.argumentsScope) {
				    this.assignments.addArgument(_localctx._NAME, this.symbolTable.lookup((_localctx._NAME!=null?_localctx._NAME.text:undefined)));
				   } else {
				    this.assignments.setVariable(_localctx._NAME); 
				   }
				 
				}
				break;
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 850;
				_localctx._number = this.number();
				 this.assignments.addArgument((_localctx._number!=null?(_localctx._number._start):undefined), this.symbolTable.lookup('int')); 
				}
				break;
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 854; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 853;
					_localctx._str = this.str();
					}
					}
					this.state = 856; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===Python3Parser.STRING_LITERAL || _la===Python3Parser.BYTES_LITERAL );
				 this.assignments.addArgument((_localctx._str!=null?(_localctx._str._start):undefined), this.symbolTable.lookup('string')); 
				}
				break;
			case Python3Parser.ELLIPSIS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 860;
				this.match(Python3Parser.ELLIPSIS);
				}
				break;
			case Python3Parser.NONE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 861;
				this.match(Python3Parser.NONE);
				}
				break;
			case Python3Parser.TRUE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 862;
				this.match(Python3Parser.TRUE);
				}
				break;
			case Python3Parser.FALSE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 863;
				this.match(Python3Parser.FALSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public testlist_comp(): Testlist_compContext {
		let _localctx: Testlist_compContext = new Testlist_compContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, Python3Parser.RULE_testlist_comp);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 866;
			this.test();
			this.state = 878;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.FOR:
				{
				this.state = 867;
				this.comp_for();
				}
				break;
			case Python3Parser.CLOSE_PAREN:
			case Python3Parser.COMMA:
			case Python3Parser.CLOSE_BRACK:
				{
				this.state = 872;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,112,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 868;
						this.match(Python3Parser.COMMA);
						this.state = 869;
						this.test();
						}
						} 
					}
					this.state = 874;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,112,this._ctx);
				}
				this.state = 876;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COMMA) {
					{
					this.state = 875;
					this.match(Python3Parser.COMMA);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public trailer(): TrailerContext {
		let _localctx: TrailerContext = new TrailerContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, Python3Parser.RULE_trailer);
		let _la: number;
		try {
			this.state = 894;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				 this.argumentsScope = true; 
				this.state = 881;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 883;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (Python3Parser.POWER - 52)) | (1 << (Python3Parser.OPEN_BRACK - 52)) | (1 << (Python3Parser.ADD - 52)) | (1 << (Python3Parser.MINUS - 52)) | (1 << (Python3Parser.NOT_OP - 52)) | (1 << (Python3Parser.OPEN_BRACE - 52)))) !== 0)) {
					{
					this.state = 882;
					this.arglist();
					}
				}

				this.state = 885;
				this.match(Python3Parser.CLOSE_PAREN);
				 this.argumentsScope = false; 
				}
				break;
			case Python3Parser.OPEN_BRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 887;
				this.match(Python3Parser.OPEN_BRACK);
				this.state = 888;
				this.subscriptlist();
				this.state = 889;
				this.match(Python3Parser.CLOSE_BRACK);
				}
				break;
			case Python3Parser.DOT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 891;
				this.match(Python3Parser.DOT);
				this.state = 892;
				_localctx._NAME = this.match(Python3Parser.NAME);
				 this.assignments.addTrailingMethod(_localctx._NAME); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public subscriptlist(): SubscriptlistContext {
		let _localctx: SubscriptlistContext = new SubscriptlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, Python3Parser.RULE_subscriptlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 896;
			this.subscript();
			this.state = 901;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,117,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 897;
					this.match(Python3Parser.COMMA);
					this.state = 898;
					this.subscript();
					}
					} 
				}
				this.state = 903;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,117,this._ctx);
			}
			this.state = 905;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 904;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public subscript(): SubscriptContext {
		let _localctx: SubscriptContext = new SubscriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, Python3Parser.RULE_subscript);
		let _la: number;
		try {
			this.state = 918;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,122,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 907;
				this.test();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 909;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (Python3Parser.OPEN_BRACK - 54)) | (1 << (Python3Parser.ADD - 54)) | (1 << (Python3Parser.MINUS - 54)) | (1 << (Python3Parser.NOT_OP - 54)) | (1 << (Python3Parser.OPEN_BRACE - 54)))) !== 0)) {
					{
					this.state = 908;
					this.test();
					}
				}

				this.state = 911;
				this.match(Python3Parser.COLON);
				this.state = 913;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (Python3Parser.OPEN_BRACK - 54)) | (1 << (Python3Parser.ADD - 54)) | (1 << (Python3Parser.MINUS - 54)) | (1 << (Python3Parser.NOT_OP - 54)) | (1 << (Python3Parser.OPEN_BRACE - 54)))) !== 0)) {
					{
					this.state = 912;
					this.test();
					}
				}

				this.state = 916;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COLON) {
					{
					this.state = 915;
					this.sliceop();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public sliceop(): SliceopContext {
		let _localctx: SliceopContext = new SliceopContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, Python3Parser.RULE_sliceop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 920;
			this.match(Python3Parser.COLON);
			this.state = 922;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (Python3Parser.OPEN_BRACK - 54)) | (1 << (Python3Parser.ADD - 54)) | (1 << (Python3Parser.MINUS - 54)) | (1 << (Python3Parser.NOT_OP - 54)) | (1 << (Python3Parser.OPEN_BRACE - 54)))) !== 0)) {
				{
				this.state = 921;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public exprlist(): ExprlistContext {
		let _localctx: ExprlistContext = new ExprlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, Python3Parser.RULE_exprlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 924;
			this.star_expr();
			this.state = 929;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,124,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 925;
					this.match(Python3Parser.COMMA);
					this.state = 926;
					this.star_expr();
					}
					} 
				}
				this.state = 931;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,124,this._ctx);
			}
			this.state = 933;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 932;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public testlist(): TestlistContext {
		let _localctx: TestlistContext = new TestlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, Python3Parser.RULE_testlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 935;
			this.test();
			this.state = 940;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,126,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 936;
					this.match(Python3Parser.COMMA);
					this.state = 937;
					this.test();
					}
					} 
				}
				this.state = 942;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,126,this._ctx);
			}
			this.state = 944;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 943;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dictorsetmaker(): DictorsetmakerContext {
		let _localctx: DictorsetmakerContext = new DictorsetmakerContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, Python3Parser.RULE_dictorsetmaker);
		let _la: number;
		try {
			let _alt: number;
			this.state = 979;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,134,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 946;
				this.test();
				this.state = 947;
				this.match(Python3Parser.COLON);
				this.state = 948;
				this.test();
				this.state = 963;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.FOR:
					{
					this.state = 949;
					this.comp_for();
					}
					break;
				case Python3Parser.COMMA:
				case Python3Parser.CLOSE_BRACE:
					{
					this.state = 957;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,128,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 950;
							this.match(Python3Parser.COMMA);
							this.state = 951;
							this.test();
							this.state = 952;
							this.match(Python3Parser.COLON);
							this.state = 953;
							this.test();
							}
							} 
						}
						this.state = 959;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,128,this._ctx);
					}
					this.state = 961;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===Python3Parser.COMMA) {
						{
						this.state = 960;
						this.match(Python3Parser.COMMA);
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 965;
				this.test();
				this.state = 977;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.FOR:
					{
					this.state = 966;
					this.comp_for();
					}
					break;
				case Python3Parser.COMMA:
				case Python3Parser.CLOSE_BRACE:
					{
					this.state = 971;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,131,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 967;
							this.match(Python3Parser.COMMA);
							this.state = 968;
							this.test();
							}
							} 
						}
						this.state = 973;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,131,this._ctx);
					}
					this.state = 975;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===Python3Parser.COMMA) {
						{
						this.state = 974;
						this.match(Python3Parser.COMMA);
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classdef(): ClassdefContext {
		let _localctx: ClassdefContext = new ClassdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, Python3Parser.RULE_classdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 981;
			this.match(Python3Parser.CLASS);
			this.state = 982;
			this.match(Python3Parser.NAME);
			this.state = 988;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.OPEN_PAREN) {
				{
				this.state = 983;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 985;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (Python3Parser.POWER - 52)) | (1 << (Python3Parser.OPEN_BRACK - 52)) | (1 << (Python3Parser.ADD - 52)) | (1 << (Python3Parser.MINUS - 52)) | (1 << (Python3Parser.NOT_OP - 52)) | (1 << (Python3Parser.OPEN_BRACE - 52)))) !== 0)) {
					{
					this.state = 984;
					this.arglist();
					}
				}

				this.state = 987;
				this.match(Python3Parser.CLOSE_PAREN);
				}
			}

			this.state = 990;
			this.match(Python3Parser.COLON);
			this.state = 991;
			this.suite();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arglist(): ArglistContext {
		let _localctx: ArglistContext = new ArglistContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, Python3Parser.RULE_arglist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 998;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,137,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 993;
					this.argument();
					this.state = 994;
					this.match(Python3Parser.COMMA);
					}
					} 
				}
				this.state = 1000;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,137,this._ctx);
			}
			this.state = 1021;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,141,this._ctx) ) {
			case 1:
				{
				this.state = 1001;
				this.argument();
				this.state = 1003;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COMMA) {
					{
					this.state = 1002;
					this.match(Python3Parser.COMMA);
					}
				}

				}
				break;

			case 2:
				{
				this.state = 1005;
				this.match(Python3Parser.STAR);
				this.state = 1006;
				this.test();
				this.state = 1011;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,139,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 1007;
						this.match(Python3Parser.COMMA);
						this.state = 1008;
						this.argument();
						}
						} 
					}
					this.state = 1013;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,139,this._ctx);
				}
				this.state = 1017;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COMMA) {
					{
					this.state = 1014;
					this.match(Python3Parser.COMMA);
					this.state = 1015;
					this.match(Python3Parser.POWER);
					this.state = 1016;
					this.test();
					}
				}

				}
				break;

			case 3:
				{
				this.state = 1019;
				this.match(Python3Parser.POWER);
				this.state = 1020;
				this.test();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, Python3Parser.RULE_argument);
		let _la: number;
		try {
			this.state = 1031;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,143,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1023;
				this.test();
				this.state = 1025;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.FOR) {
					{
					this.state = 1024;
					this.comp_for();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1027;
				this.test();
				this.state = 1028;
				this.match(Python3Parser.ASSIGN);
				this.state = 1029;
				this.test();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public comp_iter(): Comp_iterContext {
		let _localctx: Comp_iterContext = new Comp_iterContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, Python3Parser.RULE_comp_iter);
		try {
			this.state = 1035;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.FOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1033;
				this.comp_for();
				}
				break;
			case Python3Parser.IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1034;
				this.comp_if();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public comp_for(): Comp_forContext {
		let _localctx: Comp_forContext = new Comp_forContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, Python3Parser.RULE_comp_for);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1037;
			this.match(Python3Parser.FOR);
			this.state = 1038;
			this.exprlist();
			this.state = 1039;
			this.match(Python3Parser.IN);
			this.state = 1040;
			this.or_test();
			this.state = 1042;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.IF || _la===Python3Parser.FOR) {
				{
				this.state = 1041;
				this.comp_iter();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public comp_if(): Comp_ifContext {
		let _localctx: Comp_ifContext = new Comp_ifContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, Python3Parser.RULE_comp_if);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1044;
			this.match(Python3Parser.IF);
			this.state = 1045;
			this.test_nocond();
			this.state = 1047;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.IF || _la===Python3Parser.FOR) {
				{
				this.state = 1046;
				this.comp_iter();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public yield_expr(): Yield_exprContext {
		let _localctx: Yield_exprContext = new Yield_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, Python3Parser.RULE_yield_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1049;
			this.match(Python3Parser.YIELD);
			this.state = 1051;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & ((1 << (Python3Parser.FROM - 4)) | (1 << (Python3Parser.LAMBDA - 4)) | (1 << (Python3Parser.NOT - 4)) | (1 << (Python3Parser.NONE - 4)) | (1 << (Python3Parser.TRUE - 4)) | (1 << (Python3Parser.FALSE - 4)) | (1 << (Python3Parser.NAME - 4)))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (Python3Parser.STRING_LITERAL - 36)) | (1 << (Python3Parser.BYTES_LITERAL - 36)) | (1 << (Python3Parser.DECIMAL_INTEGER - 36)) | (1 << (Python3Parser.OCT_INTEGER - 36)) | (1 << (Python3Parser.HEX_INTEGER - 36)) | (1 << (Python3Parser.BIN_INTEGER - 36)) | (1 << (Python3Parser.FLOAT_NUMBER - 36)) | (1 << (Python3Parser.IMAG_NUMBER - 36)) | (1 << (Python3Parser.ELLIPSIS - 36)) | (1 << (Python3Parser.STAR - 36)) | (1 << (Python3Parser.OPEN_PAREN - 36)) | (1 << (Python3Parser.OPEN_BRACK - 36)) | (1 << (Python3Parser.ADD - 36)) | (1 << (Python3Parser.MINUS - 36)) | (1 << (Python3Parser.NOT_OP - 36)) | (1 << (Python3Parser.OPEN_BRACE - 36)))) !== 0)) {
				{
				this.state = 1050;
				this.yield_arg();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public yield_arg(): Yield_argContext {
		let _localctx: Yield_argContext = new Yield_argContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, Python3Parser.RULE_yield_arg);
		try {
			this.state = 1056;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.FROM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1053;
				this.match(Python3Parser.FROM);
				this.state = 1054;
				this.test();
				}
				break;
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1055;
				this.testlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public str(): StrContext {
		let _localctx: StrContext = new StrContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, Python3Parser.RULE_str);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1058;
			_la = this._input.LA(1);
			if ( !(_la===Python3Parser.STRING_LITERAL || _la===Python3Parser.BYTES_LITERAL) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, Python3Parser.RULE_number);
		try {
			this.state = 1063;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1060;
				this.integer();
				}
				break;
			case Python3Parser.FLOAT_NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1061;
				this.match(Python3Parser.FLOAT_NUMBER);
				}
				break;
			case Python3Parser.IMAG_NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1062;
				this.match(Python3Parser.IMAG_NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, Python3Parser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1065;
			_la = this._input.LA(1);
			if ( !(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.DECIMAL_INTEGER - 38)) | (1 << (Python3Parser.OCT_INTEGER - 38)) | (1 << (Python3Parser.HEX_INTEGER - 38)) | (1 << (Python3Parser.BIN_INTEGER - 38)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03`\u042E\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04"+
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#"+
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+"+
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044"+
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04"+
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04"+
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x03\x02\x03\x02\x03"+
		"\x02\x03\x02\x03\x02\x05\x02\xB0\n\x02\x03\x03\x03\x03\x07\x03\xB4\n\x03"+
		"\f\x03\x0E\x03\xB7\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x07\x04\xBD\n"+
		"\x04\f\x04\x0E\x04\xC0\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03"+
		"\x05\x05\x05\xC8\n\x05\x03\x05\x05\x05\xCB\n\x05\x03\x05\x03\x05\x03\x06"+
		"\x06\x06\xD0\n\x06\r\x06\x0E\x06\xD1\x03\x07\x03\x07\x03\x07\x05\x07\xD7"+
		"\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xDE\n\b\x03\b\x03\b\x03\b\x03"+
		"\t\x03\t\x05\t\xE5\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x05\n\xEC\n\n\x03"+
		"\n\x03\n\x03\n\x03\n\x05\n\xF2\n\n\x07\n\xF4\n\n\f\n\x0E\n\xF7\v\n\x03"+
		"\n\x03\n\x03\n\x05\n\xFC\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0102\n\n\x07"+
		"\n\u0104\n\n\f\n\x0E\n\u0107\v\n\x03\n\x03\n\x03\n\x05\n\u010C\n\n\x03"+
		"\n\x03\n\x05\n\u0110\n\n\x05\n\u0112\n\n\x03\n\x03\n\x05\n\u0116\n\n\x03"+
		"\n\x03\n\x03\n\x03\n\x05\n\u011C\n\n\x07\n\u011E\n\n\f\n\x0E\n\u0121\v"+
		"\n\x03\n\x03\n\x03\n\x05\n\u0126\n\n\x03\n\x03\n\x05\n\u012A\n\n\x03\v"+
		"\x03\v\x03\v\x05\v\u012F\n\v\x03\f\x03\f\x03\f\x05\f\u0134\n\f\x03\f\x03"+
		"\f\x03\f\x03\f\x05\f\u013A\n\f\x07\f\u013C\n\f\f\f\x0E\f\u013F\v\f\x03"+
		"\f\x03\f\x03\f\x05\f\u0144\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u014A\n\f"+
		"\x07\f\u014C\n\f\f\f\x0E\f\u014F\v\f\x03\f\x03\f\x03\f\x05\f\u0154\n\f"+
		"\x03\f\x03\f\x05\f\u0158\n\f\x05\f\u015A\n\f\x03\f\x03\f\x05\f\u015E\n"+
		"\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0164\n\f\x07\f\u0166\n\f\f\f\x0E\f\u0169"+
		"\v\f\x03\f\x03\f\x03\f\x05\f\u016E\n\f\x03\f\x03\f\x05\f\u0172\n\f\x03"+
		"\r\x03\r\x03\x0E\x03\x0E\x05\x0E\u0178\n\x0E\x03\x0F\x03\x0F\x03\x0F\x07"+
		"\x0F\u017D\n\x0F\f\x0F\x0E\x0F\u0180\v\x0F\x03\x0F\x05\x0F\u0183\n\x0F"+
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10"+
		"\x03\x10\x05\x10\u018F\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05"+
		"\x11\u0196\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11"+
		"\u019E\n\x11\x07\x11\u01A0\n\x11\f\x11\x0E\x11\u01A3\v\x11\x05\x11\u01A5"+
		"\n\x11\x03\x12\x03\x12\x05\x12\u01A9\n\x12\x03\x12\x03\x12\x03\x12\x05"+
		"\x12\u01AE\n\x12\x07\x12\u01B0\n\x12\f\x12\x0E\x12\u01B3\v\x12\x03\x12"+
		"\x05\x12\u01B6\n\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03"+
		"\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01C4\n\x16\x03\x17"+
		"\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19\u01CC\n\x19\x03\x1A\x03"+
		"\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01D4\n\x1B\x05\x1B\u01D6"+
		"\n\x1B\x03\x1C\x03\x1C\x05\x1C\u01DA\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03"+
		"\x1E\x03\x1E\x07\x1E\u01E1\n\x1E\f\x1E\x0E\x1E\u01E4\v\x1E\x03\x1E\x03"+
		"\x1E\x06\x1E\u01E8\n\x1E\r\x1E\x0E\x1E\u01E9\x05\x1E\u01EC\n\x1E\x03\x1E"+
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01F5\n\x1E\x03"+
		"\x1F\x03\x1F\x03\x1F\x05\x1F\u01FA\n\x1F\x03 \x03 \x03 \x05 \u01FF\n "+
		"\x03!\x03!\x03!\x07!\u0204\n!\f!\x0E!\u0207\v!\x03!\x05!\u020A\n!\x03"+
		"\"\x03\"\x03\"\x07\"\u020F\n\"\f\"\x0E\"\u0212\v\"\x03#\x03#\x03#\x07"+
		"#\u0217\n#\f#\x0E#\u021A\v#\x03$\x03$\x03$\x03$\x07$\u0220\n$\f$\x0E$"+
		"\u0223\v$\x03%\x03%\x03%\x03%\x07%\u0229\n%\f%\x0E%\u022C\v%\x03&\x03"+
		"&\x03&\x03&\x05&\u0232\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03"+
		"\'\x05\'\u023C\n\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x07(\u0247"+
		"\n(\f(\x0E(\u024A\v(\x03(\x03(\x03(\x05(\u024F\n(\x03)\x03)\x03)\x03)"+
		"\x03)\x03)\x03)\x05)\u0258\n)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*"+
		"\x03*\x05*\u0263\n*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x06+\u026C\n+\r"+
		"+\x0E+\u026D\x03+\x03+\x03+\x05+\u0273\n+\x03+\x03+\x03+\x05+\u0278\n"+
		"+\x03+\x03+\x03+\x05+\u027D\n+\x03,\x03,\x03,\x03,\x07,\u0283\n,\f,\x0E"+
		",\u0286\v,\x03,\x03,\x03,\x03-\x03-\x03-\x05-\u028E\n-\x03.\x03.\x03."+
		"\x03.\x05.\u0294\n.\x05.\u0296\n.\x03/\x03/\x03/\x03/\x06/\u029C\n/\r"+
		"/\x0E/\u029D\x03/\x03/\x05/\u02A2\n/\x030\x030\x030\x030\x030\x030\x05"+
		"0\u02AA\n0\x030\x050\u02AD\n0\x031\x031\x051\u02B1\n1\x032\x032\x052\u02B5"+
		"\n2\x032\x032\x032\x033\x033\x053\u02BC\n3\x033\x033\x033\x034\x034\x03"+
		"4\x074\u02C4\n4\f4\x0E4\u02C7\v4\x035\x035\x035\x075\u02CC\n5\f5\x0E5"+
		"\u02CF\v5\x036\x036\x036\x056\u02D4\n6\x037\x037\x037\x037\x077\u02DA"+
		"\n7\f7\x0E7\u02DD\v7\x038\x038\x038\x038\x038\x038\x038\x038\x038\x03"+
		"8\x038\x038\x038\x058\u02EC\n8\x039\x059\u02EF\n9\x039\x039\x03:\x03:"+
		"\x03:\x07:\u02F6\n:\f:\x0E:\u02F9\v:\x03;\x03;\x03;\x07;\u02FE\n;\f;\x0E"+
		";\u0301\v;\x03<\x03<\x03<\x07<\u0306\n<\f<\x0E<\u0309\v<\x03=\x03=\x03"+
		"=\x03=\x03=\x07=\u0310\n=\f=\x0E=\u0313\v=\x03>\x03>\x03>\x03>\x03>\x07"+
		">\u031A\n>\f>\x0E>\u031D\v>\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03"+
		"?\x03?\x03?\x07?\u032A\n?\f?\x0E?\u032D\v?\x03@\x03@\x03@\x03@\x03@\x03"+
		"@\x03@\x05@\u0336\n@\x03A\x03A\x07A\u033A\nA\fA\x0EA\u033D\vA\x03A\x03"+
		"A\x05A\u0341\nA\x03B\x03B\x03B\x05B\u0346\nB\x03B\x03B\x03B\x05B\u034B"+
		"\nB\x03B\x03B\x03B\x05B\u0350\nB\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x06"+
		"B\u0359\nB\rB\x0EB\u035A\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u0363\nB\x03"+
		"C\x03C\x03C\x03C\x07C\u0369\nC\fC\x0EC\u036C\vC\x03C\x05C\u036F\nC\x05"+
		"C\u0371\nC\x03D\x03D\x03D\x05D\u0376\nD\x03D\x03D\x03D\x03D\x03D\x03D"+
		"\x03D\x03D\x03D\x05D\u0381\nD\x03E\x03E\x03E\x07E\u0386\nE\fE\x0EE\u0389"+
		"\vE\x03E\x05E\u038C\nE\x03F\x03F\x05F\u0390\nF\x03F\x03F\x05F\u0394\n"+
		"F\x03F\x05F\u0397\nF\x05F\u0399\nF\x03G\x03G\x05G\u039D\nG\x03H\x03H\x03"+
		"H\x07H\u03A2\nH\fH\x0EH\u03A5\vH\x03H\x05H\u03A8\nH\x03I\x03I\x03I\x07"+
		"I\u03AD\nI\fI\x0EI\u03B0\vI\x03I\x05I\u03B3\nI\x03J\x03J\x03J\x03J\x03"+
		"J\x03J\x03J\x03J\x03J\x07J\u03BE\nJ\fJ\x0EJ\u03C1\vJ\x03J\x05J\u03C4\n"+
		"J\x05J\u03C6\nJ\x03J\x03J\x03J\x03J\x07J\u03CC\nJ\fJ\x0EJ\u03CF\vJ\x03"+
		"J\x05J\u03D2\nJ\x05J\u03D4\nJ\x05J\u03D6\nJ\x03K\x03K\x03K\x03K\x05K\u03DC"+
		"\nK\x03K\x05K\u03DF\nK\x03K\x03K\x03K\x03L\x03L\x03L\x07L\u03E7\nL\fL"+
		"\x0EL\u03EA\vL\x03L\x03L\x05L\u03EE\nL\x03L\x03L\x03L\x03L\x07L\u03F4"+
		"\nL\fL\x0EL\u03F7\vL\x03L\x03L\x03L\x05L\u03FC\nL\x03L\x03L\x05L\u0400"+
		"\nL\x03M\x03M\x05M\u0404\nM\x03M\x03M\x03M\x03M\x05M\u040A\nM\x03N\x03"+
		"N\x05N\u040E\nN\x03O\x03O\x03O\x03O\x03O\x05O\u0415\nO\x03P\x03P\x03P"+
		"\x05P\u041A\nP\x03Q\x03Q\x05Q\u041E\nQ\x03R\x03R\x03R\x05R\u0423\nR\x03"+
		"S\x03S\x03T\x03T\x03T\x05T\u042A\nT\x03U\x03U\x03U\x02\x02\x02V\x02\x02"+
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16"+
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02"+
		".\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02"+
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02"+
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80"+
		"\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92"+
		"\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4"+
		"\x02\xA6\x02\xA8\x02\x02\x06\x03\x02P\\\x03\x02./\x03\x02&\'\x03\x02("+
		"+\u049E\x02\xAF\x03\x02\x02\x02\x04\xB5\x03\x02\x02\x02\x06\xBA\x03\x02"+
		"\x02\x02\b\xC3\x03\x02\x02\x02\n\xCF\x03\x02\x02\x02\f\xD3\x03\x02\x02"+
		"\x02\x0E\xD8\x03\x02\x02\x02\x10\xE2\x03\x02\x02\x02\x12\u0129\x03\x02"+
		"\x02\x02\x14\u012B\x03\x02\x02\x02\x16\u0171\x03\x02\x02\x02\x18\u0173"+
		"\x03\x02\x02\x02\x1A\u0177\x03\x02\x02\x02\x1C\u0179\x03\x02\x02\x02\x1E"+
		"\u018E\x03\x02\x02\x02 \u0190\x03\x02\x02\x02\"\u01A8\x03\x02\x02\x02"+
		"$\u01B7\x03\x02\x02\x02&\u01B9\x03\x02\x02\x02(\u01BC\x03\x02\x02\x02"+
		"*\u01C3\x03\x02\x02\x02,\u01C5\x03\x02\x02\x02.\u01C7\x03\x02\x02\x02"+
		"0\u01C9\x03\x02\x02\x022\u01CD\x03\x02\x02\x024\u01CF\x03\x02\x02\x02"+
		"6\u01D9\x03\x02\x02\x028\u01DB\x03\x02\x02\x02:\u01DE\x03\x02\x02\x02"+
		"<\u01F6\x03\x02\x02\x02>\u01FB\x03\x02\x02\x02@\u0200\x03\x02\x02\x02"+
		"B\u020B\x03\x02\x02\x02D\u0213\x03\x02\x02\x02F\u021B\x03\x02\x02\x02"+
		"H\u0224\x03\x02\x02\x02J\u022D\x03\x02\x02\x02L\u023B\x03\x02\x02\x02"+
		"N\u023D\x03\x02\x02\x02P\u0250\x03\x02\x02\x02R\u0259\x03\x02\x02\x02"+
		"T\u0264\x03\x02\x02\x02V\u027E\x03\x02\x02\x02X\u028A\x03\x02\x02\x02"+
		"Z\u028F\x03\x02\x02\x02\\\u02A1\x03\x02\x02\x02^\u02AC\x03\x02\x02\x02"+
		"`\u02B0\x03\x02\x02\x02b\u02B2\x03\x02\x02\x02d\u02B9\x03\x02\x02\x02"+
		"f\u02C0\x03\x02\x02\x02h\u02C8\x03\x02\x02\x02j\u02D3\x03\x02\x02\x02"+
		"l\u02D5\x03\x02\x02\x02n\u02EB\x03\x02\x02\x02p\u02EE\x03\x02\x02\x02"+
		"r\u02F2\x03\x02\x02\x02t\u02FA\x03\x02\x02\x02v\u0302\x03\x02\x02\x02"+
		"x\u030A\x03\x02\x02\x02z\u0314\x03\x02\x02\x02|\u031E\x03\x02\x02\x02"+
		"~\u0335\x03\x02\x02\x02\x80\u0337\x03\x02\x02\x02\x82\u0362\x03\x02\x02"+
		"\x02\x84\u0364\x03\x02\x02\x02\x86\u0380\x03\x02\x02\x02\x88\u0382\x03"+
		"\x02\x02\x02\x8A\u0398\x03\x02\x02\x02\x8C\u039A\x03\x02\x02\x02\x8E\u039E"+
		"\x03\x02\x02\x02\x90\u03A9\x03\x02\x02\x02\x92\u03D5\x03\x02\x02\x02\x94"+
		"\u03D7\x03\x02\x02\x02\x96\u03E8\x03\x02\x02\x02\x98\u0409\x03\x02\x02"+
		"\x02\x9A\u040D\x03\x02\x02\x02\x9C\u040F\x03\x02\x02\x02\x9E\u0416\x03"+
		"\x02\x02\x02\xA0\u041B\x03\x02\x02\x02\xA2\u0422\x03\x02\x02\x02\xA4\u0424"+
		"\x03\x02\x02\x02\xA6\u0429\x03\x02\x02\x02\xA8\u042B\x03\x02\x02\x02\xAA"+
		"\xB0\x07$\x02\x02\xAB\xB0\x05\x1C\x0F\x02\xAC\xAD\x05L\'\x02\xAD\xAE\x07"+
		"$\x02\x02\xAE\xB0\x03\x02\x02\x02\xAF\xAA\x03\x02\x02\x02\xAF\xAB\x03"+
		"\x02\x02\x02\xAF\xAC\x03\x02\x02\x02\xB0\x03\x03\x02\x02\x02\xB1\xB4\x07"+
		"$\x02\x02\xB2\xB4\x05\x1A\x0E\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB2\x03"+
		"\x02\x02\x02\xB4\xB7\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03"+
		"\x02\x02\x02\xB6\xB8\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB8\xB9\x07"+
		"\x02\x02\x03\xB9\x05\x03\x02\x02\x02\xBA\xBE\x05\x90I\x02\xBB\xBD\x07"+
		"$\x02\x02\xBC\xBB\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE\xBC\x03"+
		"\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02\x02\x02\xC0\xBE\x03"+
		"\x02\x02\x02\xC1\xC2\x07\x02\x02\x03\xC2\x07\x03\x02\x02\x02\xC3\xC4\x07"+
		"N\x02\x02\xC4\xCA\x05D#\x02\xC5\xC7\x071\x02\x02\xC6\xC8\x05\x96L\x02"+
		"\xC7\xC6\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02"+
		"\xC9\xCB\x072\x02\x02\xCA\xC5\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02"+
		"\xCB\xCC\x03\x02\x02\x02\xCC\xCD\x07$\x02\x02\xCD\t\x03\x02\x02\x02\xCE"+
		"\xD0\x05\b\x05\x02\xCF\xCE\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1"+
		"\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\v\x03\x02\x02\x02\xD3"+
		"\xD6\x05\n\x06\x02\xD4\xD7\x05\x94K\x02\xD5\xD7\x05\x0E\b\x02\xD6\xD4"+
		"\x03\x02\x02\x02\xD6\xD5\x03\x02\x02\x02\xD7\r\x03\x02\x02\x02\xD8\xD9"+
		"\x07\x03\x02\x02\xD9\xDA\x07%\x02\x02\xDA\xDD\x05\x10\t\x02\xDB\xDC\x07"+
		"O\x02\x02\xDC\xDE\x05^0\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02"+
		"\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x074\x02\x02\xE0\xE1\x05\\/\x02\xE1"+
		"\x0F\x03\x02\x02\x02\xE2\xE4\x071\x02\x02\xE3\xE5\x05\x12\n\x02\xE4\xE3"+
		"\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7"+
		"\x072\x02\x02\xE7\x11\x03\x02\x02\x02\xE8\xEB\x05\x14\v\x02\xE9\xEA\x07"+
		"7\x02\x02\xEA\xEC\x05^0\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02"+
		"\x02\xEC\xF5\x03\x02\x02\x02\xED\xEE\x073\x02\x02\xEE\xF1\x05\x14\v\x02"+
		"\xEF\xF0\x077\x02\x02\xF0\xF2\x05^0\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF2"+
		"\x03\x02\x02\x02\xF2\xF4\x03\x02\x02\x02\xF3\xED\x03\x02\x02\x02\xF4\xF7"+
		"\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\u0111"+
		"\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\u010F\x073\x02\x02\xF9\xFB"+
		"\x070\x02\x02\xFA\xFC\x05\x14\v\x02\xFB\xFA\x03\x02\x02\x02\xFB\xFC\x03"+
		"\x02\x02\x02\xFC\u0105\x03\x02\x02\x02\xFD\xFE\x073\x02\x02\xFE\u0101"+
		"\x05\x14\v\x02\xFF\u0100\x077\x02\x02\u0100\u0102\x05^0\x02\u0101\xFF"+
		"\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0104\x03\x02\x02\x02"+
		"\u0103\xFD\x03\x02\x02\x02\u0104\u0107\x03\x02\x02\x02\u0105\u0103\x03"+
		"\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106\u010B\x03\x02\x02\x02\u0107"+
		"\u0105\x03\x02\x02\x02\u0108\u0109\x073\x02\x02\u0109\u010A\x076\x02\x02"+
		"\u010A\u010C\x05\x14\v\x02\u010B\u0108\x03\x02\x02\x02\u010B\u010C\x03"+
		"\x02\x02\x02\u010C\u0110\x03\x02\x02\x02\u010D\u010E\x076\x02\x02\u010E"+
		"\u0110\x05\x14\v\x02\u010F\xF9\x03\x02\x02\x02\u010F\u010D\x03\x02\x02"+
		"\x02\u010F\u0110\x03\x02\x02\x02\u0110\u0112\x03\x02\x02\x02\u0111\xF8"+
		"\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u012A\x03\x02\x02\x02"+
		"\u0113\u0115\x070\x02\x02\u0114\u0116\x05\x14\v\x02\u0115\u0114\x03\x02"+
		"\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u011F\x03\x02\x02\x02\u0117"+
		"\u0118\x073\x02\x02\u0118\u011B\x05\x14\v\x02\u0119\u011A\x077\x02\x02"+
		"\u011A\u011C\x05^0\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011C\x03\x02"+
		"\x02\x02\u011C\u011E\x03\x02\x02\x02\u011D\u0117\x03\x02\x02\x02\u011E"+
		"\u0121\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u011F\u0120\x03\x02"+
		"\x02\x02\u0120\u0125\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0122"+
		"\u0123\x073\x02\x02\u0123\u0124\x076\x02\x02\u0124\u0126\x05\x14\v\x02"+
		"\u0125\u0122\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u012A\x03"+
		"\x02\x02\x02\u0127\u0128\x076\x02\x02\u0128\u012A\x05\x14\v\x02\u0129"+
		"\xE8\x03\x02\x02\x02\u0129\u0113\x03\x02\x02\x02\u0129\u0127\x03\x02\x02"+
		"\x02\u012A\x13\x03\x02\x02\x02\u012B\u012E\x07%\x02\x02\u012C\u012D\x07"+
		"4\x02\x02\u012D\u012F\x05^0\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012F"+
		"\x03\x02\x02\x02\u012F\x15\x03\x02\x02\x02\u0130\u0133\x05\x18\r\x02\u0131"+
		"\u0132\x077\x02\x02\u0132\u0134\x05^0\x02\u0133\u0131\x03\x02\x02\x02"+
		"\u0133\u0134\x03\x02\x02\x02\u0134\u013D\x03\x02\x02\x02\u0135\u0136\x07"+
		"3\x02\x02\u0136\u0139\x05\x18\r\x02\u0137\u0138\x077\x02\x02\u0138\u013A"+
		"\x05^0\x02\u0139\u0137\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A"+
		"\u013C\x03\x02\x02\x02\u013B\u0135\x03\x02\x02\x02\u013C\u013F\x03\x02"+
		"\x02\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E"+
		"\u0159\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u0140\u0157\x073\x02"+
		"\x02\u0141\u0143\x070\x02\x02\u0142\u0144\x05\x18\r\x02\u0143\u0142\x03"+
		"\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u014D\x03\x02\x02\x02\u0145"+
		"\u0146\x073\x02\x02\u0146\u0149\x05\x18\r\x02\u0147\u0148\x077\x02\x02"+
		"\u0148\u014A\x05^0\x02\u0149\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02"+
		"\x02\x02\u014A\u014C\x03\x02\x02\x02\u014B\u0145\x03\x02\x02\x02\u014C"+
		"\u014F\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014D\u014E\x03\x02"+
		"\x02\x02\u014E\u0153\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u0150"+
		"\u0151\x073\x02\x02\u0151\u0152\x076\x02\x02\u0152\u0154\x05\x18\r\x02"+
		"\u0153\u0150\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0158\x03"+
		"\x02\x02\x02\u0155\u0156\x076\x02\x02\u0156\u0158\x05\x18\r\x02\u0157"+
		"\u0141\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0157\u0158\x03\x02"+
		"\x02\x02\u0158\u015A\x03\x02\x02\x02\u0159\u0140\x03\x02\x02\x02\u0159"+
		"\u015A\x03\x02\x02\x02\u015A\u0172\x03\x02\x02\x02\u015B\u015D\x070\x02"+
		"\x02\u015C\u015E\x05\x18\r\x02\u015D\u015C\x03\x02\x02\x02\u015D\u015E"+
		"\x03\x02\x02\x02\u015E\u0167\x03\x02\x02\x02\u015F\u0160\x073\x02\x02"+
		"\u0160\u0163\x05\x18\r\x02\u0161\u0162\x077\x02\x02\u0162\u0164\x05^0"+
		"\x02\u0163\u0161\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0166"+
		"\x03\x02\x02\x02\u0165\u015F\x03\x02\x02\x02\u0166\u0169\x03\x02\x02\x02"+
		"\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168\u016D\x03"+
		"\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A\u016B\x073\x02\x02\u016B"+
		"\u016C\x076\x02\x02\u016C\u016E\x05\x18\r\x02\u016D\u016A\x03\x02\x02"+
		"\x02\u016D\u016E\x03\x02\x02\x02\u016E\u0172\x03\x02\x02\x02\u016F\u0170"+
		"\x076\x02\x02\u0170\u0172\x05\x18\r\x02\u0171\u0130\x03\x02\x02\x02\u0171"+
		"\u015B\x03\x02\x02\x02\u0171\u016F\x03\x02\x02\x02\u0172\x17\x03\x02\x02"+
		"\x02\u0173\u0174\x07%\x02\x02\u0174\x19\x03\x02\x02\x02\u0175\u0178\x05"+
		"\x1C\x0F\x02\u0176\u0178\x05L\'\x02\u0177\u0175\x03\x02\x02\x02\u0177"+
		"\u0176\x03\x02\x02\x02\u0178\x1B\x03\x02\x02\x02\u0179\u017E\x05\x1E\x10"+
		"\x02\u017A\u017B\x075\x02\x02\u017B\u017D\x05\x1E\x10\x02\u017C\u017A"+
		"\x03\x02\x02\x02\u017D\u0180\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02"+
		"\u017E\u017F\x03\x02\x02\x02\u017F\u0182\x03\x02\x02\x02\u0180\u017E\x03"+
		"\x02\x02\x02\u0181\u0183\x075\x02\x02\u0182\u0181\x03\x02\x02\x02\u0182"+
		"\u0183\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0185\x07$\x02"+
		"\x02\u0185\x1D\x03\x02\x02\x02\u0186\u018F\x05 \x11\x02\u0187\u018F\x05"+
		"&\x14\x02\u0188\u018F\x05(\x15\x02\u0189\u018F\x05*\x16\x02\u018A\u018F"+
		"\x056\x1C\x02\u018B\u018F\x05F$\x02\u018C\u018F\x05H%\x02\u018D\u018F"+
		"\x05J&\x02\u018E\u0186\x03\x02\x02\x02\u018E\u0187\x03\x02\x02\x02\u018E"+
		"\u0188\x03\x02\x02\x02\u018E\u0189\x03\x02\x02\x02\u018E\u018A\x03\x02"+
		"\x02\x02\u018E\u018B\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018E"+
		"\u018D\x03\x02\x02\x02\u018F\x1F\x03\x02\x02\x02\u0190\u0191\x05\"\x12"+
		"\x02\u0191\u01A4\b\x11\x01\x02\u0192\u0195\x05$\x13\x02\u0193\u0196\x05"+
		"\xA0Q\x02\u0194\u0196\x05\x90I\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0194"+
		"\x03\x02\x02\x02\u0196\u01A5\x03\x02\x02\x02\u0197\u0198\x077\x02\x02"+
		"\u0198\u019D\b\x11\x01\x02\u0199\u019E\x05\xA0Q\x02\u019A\u019B\x05\""+
		"\x12\x02\u019B\u019C\b\x11\x01\x02\u019C\u019E\x03\x02\x02\x02\u019D\u0199"+
		"\x03\x02\x02\x02\u019D\u019A\x03\x02\x02\x02\u019E\u01A0\x03\x02\x02\x02"+
		"\u019F\u0197\x03\x02\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1\u019F\x03"+
		"\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A5\x03\x02\x02\x02\u01A3"+
		"\u01A1\x03\x02\x02\x02\u01A4\u0192\x03\x02\x02\x02\u01A4\u01A1\x03\x02"+
		"\x02\x02\u01A5!\x03\x02\x02\x02\u01A6\u01A9\x05^0\x02\u01A7\u01A9\x05"+
		"p9\x02\u01A8\u01A6\x03\x02\x02\x02\u01A8\u01A7\x03\x02\x02\x02\u01A9\u01B1"+
		"\x03\x02\x02\x02\u01AA\u01AD\x073\x02\x02\u01AB\u01AE\x05^0\x02\u01AC"+
		"\u01AE\x05p9\x02\u01AD\u01AB\x03\x02\x02\x02\u01AD\u01AC\x03\x02\x02\x02"+
		"\u01AE\u01B0\x03\x02\x02\x02\u01AF\u01AA\x03\x02\x02\x02\u01B0\u01B3\x03"+
		"\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2"+
		"\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B4\u01B6\x073\x02"+
		"\x02\u01B5";
	private static readonly _serializedATNSegment1: string =
		"\u01B4\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6#\x03\x02\x02"+
		"\x02\u01B7\u01B8\t\x02\x02\x02\u01B8%\x03\x02\x02\x02\u01B9\u01BA\x07"+
		" \x02\x02\u01BA\u01BB\x05\x8EH\x02\u01BB\'\x03\x02\x02\x02\u01BC\u01BD"+
		"\x07!\x02\x02\u01BD)\x03\x02\x02\x02\u01BE\u01C4\x05,\x17\x02\u01BF\u01C4"+
		"\x05.\x18\x02\u01C0\u01C4\x050\x19\x02\u01C1\u01C4\x054\x1B\x02\u01C2"+
		"\u01C4\x052\x1A\x02\u01C3\u01BE\x03\x02\x02\x02\u01C3\u01BF\x03\x02\x02"+
		"\x02\u01C3\u01C0\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C3\u01C2"+
		"\x03\x02\x02\x02\u01C4+\x03\x02\x02\x02\u01C5\u01C6\x07#\x02\x02\u01C6"+
		"-\x03\x02\x02\x02\u01C7\u01C8\x07\"\x02\x02\u01C8/\x03\x02\x02\x02\u01C9"+
		"\u01CB\x07\x04\x02\x02\u01CA\u01CC\x05\x90I\x02\u01CB\u01CA\x03\x02\x02"+
		"\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC1\x03\x02\x02\x02\u01CD\u01CE\x05"+
		"\xA0Q\x02\u01CE3\x03\x02\x02\x02\u01CF\u01D5\x07\x05\x02\x02\u01D0\u01D3"+
		"\x05^0\x02\u01D1\u01D2\x07\x06\x02\x02\u01D2\u01D4\x05^0\x02\u01D3\u01D1"+
		"\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D6\x03\x02\x02\x02"+
		"\u01D5\u01D0\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D65\x03\x02"+
		"\x02\x02\u01D7\u01DA\x058\x1D\x02\u01D8\u01DA\x05:\x1E\x02\u01D9\u01D7"+
		"\x03\x02\x02\x02\u01D9\u01D8\x03\x02\x02\x02\u01DA7\x03\x02\x02\x02\u01DB"+
		"\u01DC\x07\x07\x02\x02\u01DC\u01DD\x05B\"\x02\u01DD9\x03\x02\x02\x02\u01DE"+
		"\u01EB\x07\x06\x02\x02\u01DF\u01E1\t\x03\x02\x02\u01E0\u01DF\x03\x02\x02"+
		"\x02\u01E1\u01E4\x03\x02\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2\u01E3"+
		"\x03\x02\x02\x02\u01E3\u01E5\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02"+
		"\u01E5\u01EC\x05D#\x02\u01E6\u01E8\t\x03\x02\x02\u01E7\u01E6\x03\x02\x02"+
		"\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01EA"+
		"\x03\x02\x02\x02\u01EA\u01EC\x03\x02\x02\x02\u01EB\u01E2\x03\x02\x02\x02"+
		"\u01EB\u01E7\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01F4\x07"+
		"\x07\x02\x02\u01EE\u01F5\x070\x02\x02\u01EF\u01F0\x071\x02\x02\u01F0\u01F1"+
		"\x05@!\x02\u01F1\u01F2\x072\x02\x02\u01F2\u01F5\x03\x02\x02\x02\u01F3"+
		"\u01F5\x05@!\x02\u01F4\u01EE\x03\x02\x02\x02\u01F4\u01EF\x03\x02\x02\x02"+
		"\u01F4\u01F3\x03\x02\x02\x02\u01F5;\x03\x02\x02\x02\u01F6\u01F9\x07%\x02"+
		"\x02\u01F7\u01F8\x07\b\x02\x02\u01F8\u01FA\x07%\x02\x02\u01F9\u01F7\x03"+
		"\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA=\x03\x02\x02\x02\u01FB"+
		"\u01FE\x05D#\x02\u01FC\u01FD\x07\b\x02\x02\u01FD\u01FF\x07%\x02\x02\u01FE"+
		"\u01FC\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF?\x03\x02\x02"+
		"\x02\u0200\u0205\x05<\x1F\x02\u0201\u0202\x073\x02\x02\u0202\u0204\x05"+
		"<\x1F\x02\u0203\u0201\x03\x02\x02\x02\u0204\u0207\x03\x02\x02\x02\u0205"+
		"\u0203\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0209\x03\x02"+
		"\x02\x02\u0207\u0205\x03\x02\x02\x02\u0208\u020A\x073\x02\x02\u0209\u0208"+
		"\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020AA\x03\x02\x02\x02\u020B"+
		"\u0210\x05> \x02\u020C\u020D\x073\x02\x02\u020D\u020F\x05> \x02\u020E"+
		"\u020C\x03\x02\x02\x02\u020F\u0212\x03\x02\x02\x02\u0210\u020E\x03\x02"+
		"\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211C\x03\x02\x02\x02\u0212\u0210"+
		"\x03\x02\x02\x02\u0213\u0218\x07%\x02\x02\u0214\u0215\x07.\x02\x02\u0215"+
		"\u0217\x07%\x02\x02\u0216\u0214\x03\x02\x02\x02\u0217\u021A\x03\x02\x02"+
		"\x02\u0218\u0216\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219E\x03"+
		"\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021B\u021C\x07\t\x02\x02\u021C"+
		"\u0221\x07%\x02\x02\u021D\u021E\x073\x02\x02\u021E\u0220\x07%\x02\x02"+
		"\u021F\u021D\x03\x02\x02\x02\u0220\u0223\x03\x02\x02\x02\u0221\u021F\x03"+
		"\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222G\x03\x02\x02\x02\u0223"+
		"\u0221\x03\x02\x02\x02\u0224\u0225\x07\n\x02\x02\u0225\u022A\x07%\x02"+
		"\x02\u0226\u0227\x073\x02\x02\u0227\u0229\x07%\x02\x02\u0228\u0226\x03"+
		"\x02\x02\x02\u0229\u022C\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022A"+
		"\u022B\x03\x02\x02\x02\u022BI\x03\x02\x02\x02\u022C\u022A\x03\x02\x02"+
		"\x02\u022D\u022E\x07\v\x02\x02\u022E\u0231\x05^0\x02\u022F\u0230\x073"+
		"\x02\x02\u0230\u0232\x05^0\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0232"+
		"\x03\x02\x02\x02\u0232K\x03\x02\x02\x02\u0233\u023C\x05N(\x02\u0234\u023C"+
		"\x05P)\x02\u0235\u023C\x05R*\x02\u0236\u023C\x05T+\x02\u0237\u023C\x05"+
		"V,\x02\u0238\u023C\x05\x0E\b\x02\u0239\u023C\x05\x94K\x02\u023A\u023C"+
		"\x05\f\x07\x02\u023B\u0233\x03\x02\x02\x02\u023B\u0234\x03\x02\x02\x02"+
		"\u023B\u0235\x03\x02\x02\x02\u023B\u0236\x03\x02\x02\x02\u023B\u0237\x03"+
		"\x02\x02\x02\u023B\u0238\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02\u023B"+
		"\u023A\x03\x02\x02\x02\u023CM\x03\x02\x02\x02\u023D\u023E\x07\f\x02\x02"+
		"\u023E\u023F\x05^0\x02\u023F\u0240\x074\x02\x02\u0240\u0248\x05\\/\x02"+
		"\u0241\u0242\x07\r\x02\x02\u0242\u0243\x05^0\x02\u0243\u0244\x074\x02"+
		"\x02\u0244\u0245\x05\\/\x02\u0245\u0247\x03\x02\x02\x02\u0246\u0241\x03"+
		"\x02\x02\x02\u0247\u024A\x03\x02\x02\x02\u0248\u0246\x03\x02\x02\x02\u0248"+
		"\u0249\x03\x02\x02\x02\u0249\u024E\x03\x02\x02\x02\u024A\u0248\x03\x02"+
		"\x02\x02\u024B\u024C\x07\x0E\x02\x02\u024C\u024D\x074\x02\x02\u024D\u024F"+
		"\x05\\/\x02\u024E\u024B\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F"+
		"O\x03\x02\x02\x02\u0250\u0251\x07\x0F\x02\x02\u0251\u0252\x05^0\x02\u0252"+
		"\u0253\x074\x02\x02\u0253\u0257\x05\\/\x02\u0254\u0255\x07\x0E\x02\x02"+
		"\u0255\u0256\x074\x02\x02\u0256\u0258\x05\\/\x02\u0257\u0254\x03\x02\x02"+
		"\x02\u0257\u0258\x03\x02\x02\x02\u0258Q\x03\x02\x02\x02\u0259\u025A\x07"+
		"\x10\x02\x02\u025A\u025B\x05\x8EH\x02\u025B\u025C\x07\x11\x02\x02\u025C"+
		"\u025D\x05\x90I\x02\u025D\u025E\x074\x02\x02\u025E\u0262\x05\\/\x02\u025F"+
		"\u0260\x07\x0E\x02\x02\u0260\u0261\x074\x02\x02\u0261\u0263\x05\\/\x02"+
		"\u0262\u025F\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263S\x03\x02"+
		"\x02\x02\u0264\u0265\x07\x12\x02\x02\u0265\u0266\x074\x02\x02\u0266\u027C"+
		"\x05\\/\x02\u0267\u0268\x05Z.\x02\u0268\u0269\x074\x02\x02\u0269\u026A"+
		"\x05\\/\x02\u026A\u026C\x03\x02\x02\x02\u026B\u0267\x03\x02\x02\x02\u026C"+
		"\u026D\x03\x02\x02\x02\u026D\u026B\x03\x02\x02\x02\u026D\u026E\x03\x02"+
		"\x02\x02\u026E\u0272\x03\x02\x02\x02\u026F\u0270\x07\x0E\x02\x02\u0270"+
		"\u0271\x074\x02\x02\u0271\u0273\x05\\/\x02\u0272\u026F\x03\x02\x02\x02"+
		"\u0272\u0273\x03\x02\x02\x02\u0273\u0277\x03\x02\x02\x02\u0274\u0275\x07"+
		"\x13\x02\x02\u0275\u0276\x074\x02\x02\u0276\u0278\x05\\/\x02\u0277\u0274"+
		"\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u027D\x03\x02\x02\x02"+
		"\u0279\u027A\x07\x13\x02\x02\u027A\u027B\x074\x02\x02\u027B\u027D\x05"+
		"\\/\x02\u027C\u026B\x03\x02\x02\x02\u027C\u0279\x03\x02\x02\x02\u027D"+
		"U\x03\x02\x02\x02\u027E\u027F\x07\x14\x02\x02\u027F\u0284\x05X-\x02\u0280"+
		"\u0281\x073\x02\x02\u0281\u0283\x05X-\x02\u0282\u0280\x03\x02\x02\x02"+
		"\u0283\u0286\x03\x02\x02\x02\u0284\u0282\x03\x02\x02\x02\u0284\u0285\x03"+
		"\x02\x02\x02\u0285\u0287\x03\x02\x02\x02\u0286\u0284\x03\x02\x02\x02\u0287"+
		"\u0288\x074\x02\x02\u0288\u0289\x05\\/\x02\u0289W\x03\x02\x02\x02\u028A"+
		"\u028D\x05^0\x02\u028B\u028C\x07\b\x02\x02\u028C\u028E\x05r:\x02\u028D"+
		"\u028B\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028EY\x03\x02\x02"+
		"\x02\u028F\u0295\x07\x15\x02\x02\u0290\u0293\x05^0\x02\u0291\u0292\x07"+
		"\b\x02\x02\u0292\u0294\x07%\x02\x02\u0293\u0291\x03\x02\x02\x02\u0293"+
		"\u0294\x03\x02\x02\x02\u0294\u0296\x03\x02\x02\x02\u0295\u0290\x03\x02"+
		"\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296[\x03\x02\x02\x02\u0297\u02A2"+
		"\x05\x1C\x0F\x02\u0298\u0299\x07$\x02\x02\u0299\u029B\x07_\x02\x02\u029A"+
		"\u029C\x05\x1A\x0E\x02\u029B\u029A\x03\x02\x02\x02\u029C\u029D\x03\x02"+
		"\x02\x02\u029D\u029B\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E"+
		"\u029F\x03\x02\x02\x02\u029F\u02A0\x07`\x02\x02\u02A0\u02A2\x03\x02\x02"+
		"\x02\u02A1\u0297\x03\x02\x02\x02\u02A1\u0298\x03\x02\x02\x02\u02A2]\x03"+
		"\x02\x02\x02\u02A3\u02A9\x05f4\x02\u02A4\u02A5\x07\f\x02\x02\u02A5\u02A6"+
		"\x05f4\x02\u02A6\u02A7\x07\x0E\x02\x02\u02A7\u02A8\x05^0\x02\u02A8\u02AA"+
		"\x03\x02\x02\x02\u02A9\u02A4\x03\x02\x02\x02\u02A9\u02AA\x03\x02\x02\x02"+
		"\u02AA\u02AD\x03\x02\x02\x02\u02AB\u02AD\x05b2\x02\u02AC\u02A3\x03\x02"+
		"\x02\x02\u02AC\u02AB\x03\x02\x02\x02\u02AD_\x03\x02\x02\x02\u02AE\u02B1"+
		"\x05f4\x02\u02AF\u02B1\x05d3\x02\u02B0\u02AE\x03\x02\x02\x02\u02B0\u02AF"+
		"\x03\x02\x02\x02\u02B1a\x03\x02\x02\x02\u02B2\u02B4\x07\x16\x02\x02\u02B3"+
		"\u02B5\x05\x16\f\x02\u02B4\u02B3\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02"+
		"\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B7\x074\x02\x02\u02B7\u02B8"+
		"\x05^0\x02\u02B8c\x03\x02\x02\x02\u02B9\u02BB\x07\x16\x02\x02\u02BA\u02BC"+
		"\x05\x16\f\x02\u02BB\u02BA\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02"+
		"\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02BE\x074\x02\x02\u02BE\u02BF\x05"+
		"`1\x02\u02BFe\x03\x02\x02\x02\u02C0\u02C5\x05h5\x02\u02C1\u02C2\x07\x17"+
		"\x02\x02\u02C2\u02C4\x05h5\x02\u02C3\u02C1\x03\x02\x02\x02\u02C4\u02C7"+
		"\x03\x02\x02\x02\u02C5\u02C3\x03\x02\x02\x02\u02C5\u02C6\x03\x02\x02\x02"+
		"\u02C6g\x03\x02\x02\x02\u02C7\u02C5\x03\x02\x02\x02\u02C8\u02CD\x05j6"+
		"\x02\u02C9\u02CA\x07\x18\x02\x02\u02CA\u02CC\x05j6\x02\u02CB\u02C9\x03"+
		"\x02\x02\x02\u02CC\u02CF\x03\x02\x02\x02\u02CD\u02CB\x03\x02\x02\x02\u02CD"+
		"\u02CE\x03\x02\x02\x02\u02CEi\x03\x02\x02\x02\u02CF\u02CD\x03\x02\x02"+
		"\x02\u02D0\u02D1\x07\x19\x02\x02\u02D1\u02D4\x05j6\x02\u02D2\u02D4\x05"+
		"l7\x02\u02D3\u02D0\x03\x02\x02\x02\u02D3\u02D2\x03\x02\x02\x02\u02D4k"+
		"\x03\x02\x02\x02\u02D5\u02DB\x05p9\x02\u02D6\u02D7\x05n8\x02\u02D7\u02D8"+
		"\x05p9\x02\u02D8\u02DA\x03\x02\x02\x02\u02D9\u02D6\x03\x02\x02\x02\u02DA"+
		"\u02DD\x03\x02\x02\x02\u02DB\u02D9\x03\x02\x02\x02\u02DB\u02DC\x03\x02"+
		"\x02\x02\u02DCm\x03\x02\x02\x02\u02DD\u02DB\x03\x02\x02\x02\u02DE\u02EC"+
		"\x07G\x02\x02\u02DF\u02EC\x07H\x02\x02\u02E0\u02EC\x07I\x02\x02\u02E1"+
		"\u02EC\x07J\x02\x02\u02E2\u02EC\x07K\x02\x02\u02E3\u02EC\x07L\x02\x02"+
		"\u02E4\u02EC\x07M\x02\x02\u02E5\u02EC\x07\x11\x02\x02\u02E6\u02E7\x07"+
		"\x19\x02\x02\u02E7\u02EC\x07\x11\x02\x02\u02E8\u02EC\x07\x1A\x02\x02\u02E9"+
		"\u02EA\x07\x1A\x02\x02\u02EA\u02EC\x07\x19\x02\x02\u02EB\u02DE\x03\x02"+
		"\x02\x02\u02EB\u02DF\x03\x02\x02\x02\u02EB\u02E0\x03\x02\x02\x02\u02EB"+
		"\u02E1\x03\x02\x02\x02\u02EB\u02E2\x03\x02\x02\x02\u02EB\u02E3\x03\x02"+
		"\x02\x02\u02EB\u02E4\x03\x02\x02\x02\u02EB\u02E5\x03\x02\x02\x02\u02EB"+
		"\u02E6\x03\x02\x02\x02\u02EB\u02E8\x03\x02\x02\x02\u02EB\u02E9\x03\x02"+
		"\x02\x02\u02ECo\x03\x02\x02\x02\u02ED\u02EF\x070\x02\x02\u02EE\u02ED\x03"+
		"\x02\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0"+
		"\u02F1\x05r:\x02\u02F1q\x03\x02\x02\x02\u02F2\u02F7\x05t;\x02\u02F3\u02F4"+
		"\x07:\x02\x02\u02F4\u02F6\x05t;\x02\u02F5\u02F3\x03\x02\x02\x02\u02F6"+
		"\u02F9\x03\x02\x02\x02\u02F7\u02F5\x03\x02\x02\x02\u02F7\u02F8\x03\x02"+
		"\x02\x02\u02F8s\x03\x02\x02\x02\u02F9\u02F7\x03\x02\x02\x02\u02FA\u02FF"+
		"\x05v<\x02\u02FB\u02FC\x07;\x02\x02\u02FC\u02FE\x05v<\x02\u02FD\u02FB"+
		"\x03\x02\x02\x02\u02FE\u0301\x03\x02\x02\x02\u02FF\u02FD\x03\x02\x02\x02"+
		"\u02FF\u0300\x03\x02\x02\x02\u0300u\x03\x02\x02\x02\u0301\u02FF\x03\x02"+
		"\x02\x02\u0302\u0307\x05x=\x02\u0303\u0304\x07<\x02\x02\u0304\u0306\x05"+
		"x=\x02\u0305\u0303\x03\x02\x02\x02\u0306\u0309\x03\x02\x02\x02\u0307\u0305"+
		"\x03\x02\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308w\x03\x02\x02\x02\u0309"+
		"\u0307\x03\x02\x02\x02\u030A\u0311\x05z>\x02\u030B\u030C\x07=\x02\x02"+
		"\u030C\u0310\x05z>\x02\u030D\u030E\x07>\x02\x02\u030E\u0310\x05z>\x02"+
		"\u030F\u030B\x03\x02\x02\x02\u030F\u030D\x03\x02\x02\x02\u0310\u0313\x03"+
		"\x02\x02\x02\u0311\u030F\x03\x02\x02\x02\u0311\u0312\x03\x02\x02\x02\u0312"+
		"y\x03\x02\x02\x02\u0313\u0311\x03\x02\x02\x02\u0314\u031B\x05|?\x02\u0315"+
		"\u0316\x07?\x02\x02\u0316\u031A\x05|?\x02\u0317\u0318\x07@\x02\x02\u0318"+
		"\u031A\x05|?\x02\u0319\u0315\x03\x02\x02\x02\u0319\u0317\x03\x02\x02\x02"+
		"\u031A\u031D\x03\x02\x02\x02\u031B\u0319\x03\x02\x02\x02\u031B\u031C\x03"+
		"\x02\x02\x02\u031C{\x03\x02\x02\x02\u031D\u031B\x03\x02\x02\x02\u031E"+
		"\u032B\x05~@\x02\u031F\u0320\x070\x02\x02\u0320\u032A\x05~@\x02\u0321"+
		"\u0322\x07A\x02\x02\u0322\u032A\x05~@\x02\u0323\u0324\x07B\x02\x02\u0324"+
		"\u032A\x05~@\x02\u0325\u0326\x07C\x02\x02\u0326\u032A\x05~@\x02\u0327"+
		"\u0328\x07N\x02\x02\u0328\u032A\x05~@\x02\u0329\u031F\x03\x02\x02\x02"+
		"\u0329\u0321\x03\x02\x02\x02\u0329\u0323\x03\x02\x02\x02\u0329\u0325\x03"+
		"\x02\x02\x02\u0329\u0327\x03\x02\x02\x02\u032A\u032D\x03\x02\x02\x02\u032B"+
		"\u0329\x03\x02\x02\x02\u032B\u032C\x03\x02\x02\x02\u032C}\x03\x02\x02"+
		"\x02\u032D\u032B\x03\x02\x02\x02\u032E\u032F\x07?\x02\x02\u032F\u0336"+
		"\x05~@\x02\u0330\u0331\x07@\x02\x02\u0331\u0336\x05~@\x02\u0332\u0333"+
		"\x07D\x02\x02\u0333\u0336\x05~@\x02\u0334\u0336\x05\x80A\x02\u0335\u032E"+
		"\x03\x02\x02\x02\u0335\u0330\x03\x02\x02\x02\u0335\u0332\x03\x02\x02\x02"+
		"\u0335\u0334\x03\x02\x02\x02\u0336\x7F\x03\x02\x02\x02\u0337\u033B\x05"+
		"\x82B\x02\u0338\u033A\x05\x86D\x02\u0339\u0338\x03\x02\x02\x02\u033A\u033D"+
		"\x03\x02\x02\x02\u033B\u0339\x03\x02\x02\x02\u033B\u033C\x03\x02\x02\x02"+
		"\u033C\u0340\x03\x02\x02\x02\u033D\u033B\x03\x02\x02\x02\u033E\u033F\x07"+
		"6\x02\x02\u033F\u0341\x05~@\x02\u0340\u033E\x03\x02\x02\x02\u0340\u0341"+
		"\x03\x02\x02\x02\u0341\x81\x03\x02\x02\x02\u0342\u0345\x071\x02\x02\u0343"+
		"\u0346\x05\xA0Q\x02\u0344\u0346\x05\x84C\x02\u0345\u0343\x03\x02\x02\x02"+
		"\u0345\u0344\x03\x02\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\u0347\x03"+
		"\x02\x02\x02\u0347\u0363\x072\x02\x02\u0348\u034A\x078\x02\x02\u0349\u034B"+
		"\x05\x84C\x02\u034A\u0349\x03\x02\x02\x02\u034A\u034B\x03\x02\x02\x02"+
		"\u034B\u034C\x03\x02\x02\x02\u034C\u0363\x079\x02\x02\u034D\u034F\x07"+
		"E\x02\x02\u034E\u0350\x05\x92J\x02\u034F\u034E\x03\x02\x02\x02\u034F\u0350"+
		"\x03\x02\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351\u0363\x07F\x02\x02"+
		"\u0352\u0353\x07%\x02\x02\u0353\u0363\bB\x01\x02\u0354\u0355\x05\xA6T"+
		"\x02\u0355\u0356\bB\x01\x02\u0356\u0363\x03\x02\x02\x02\u0357\u0359\x05"+
		"\xA4S\x02\u0358\u0357\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A"+
		"\u0358\x03\x02\x02\x02\u035A\u035B\x03\x02\x02\x02\u035B\u035C\x03\x02"+
		"\x02\x02\u035C\u035D\bB\x01\x02\u035D\u0363\x03\x02\x02\x02\u035E\u0363"+
		"\x07/\x02\x02\u035F\u0363\x07\x1B\x02\x02\u0360\u0363\x07\x1C\x02\x02"+
		"\u0361\u0363\x07\x1D\x02\x02\u0362\u0342\x03\x02\x02\x02\u0362\u0348\x03"+
		"\x02\x02\x02\u0362\u034D\x03\x02\x02\x02\u0362\u0352\x03\x02\x02\x02\u0362"+
		"\u0354\x03\x02\x02\x02\u0362\u0358\x03\x02\x02\x02\u0362\u035E\x03\x02"+
		"\x02\x02\u0362\u035F\x03\x02\x02\x02\u0362\u0360\x03\x02\x02\x02\u0362"+
		"\u0361\x03\x02\x02\x02\u0363\x83\x03\x02\x02\x02\u0364\u0370\x05^0\x02"+
		"\u0365\u0371\x05\x9CO\x02\u0366\u0367\x073\x02\x02\u0367\u0369\x05^0\x02"+
		"\u0368\u0366\x03\x02\x02\x02\u0369\u036C\x03\x02\x02\x02\u036A\u0368\x03"+
		"\x02\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B\u036E\x03\x02\x02\x02\u036C"+
		"\u036A\x03\x02\x02\x02\u036D\u036F\x073\x02\x02\u036E\u036D\x03\x02\x02"+
		"\x02\u036E\u036F\x03\x02\x02\x02\u036F\u0371\x03\x02\x02\x02\u0370\u0365"+
		"\x03\x02\x02\x02\u0370\u036A\x03\x02\x02\x02\u0371\x85\x03\x02\x02\x02"+
		"\u0372\u0373\bD\x01\x02\u0373\u0375\x071\x02\x02\u0374\u0376\x05\x96L"+
		"\x02\u0375\u0374\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376\u0377"+
		"\x03\x02\x02\x02\u0377\u0378\x072\x02\x02\u0378\u0381\bD\x01\x02\u0379"+
		"\u037A\x078\x02\x02\u037A\u037B\x05\x88E\x02\u037B\u037C\x079\x02\x02"+
		"\u037C\u0381\x03\x02\x02\x02\u037D\u037E\x07.\x02\x02\u037E\u037F\x07"+
		"%\x02\x02\u037F\u0381\bD\x01\x02\u0380\u0372\x03\x02\x02\x02\u0380\u0379"+
		"\x03\x02\x02\x02\u0380\u037D\x03\x02\x02\x02\u0381\x87\x03\x02\x02\x02"+
		"\u0382\u0387\x05\x8AF\x02\u0383\u0384\x073\x02\x02\u0384\u0386\x05\x8A"+
		"F\x02\u0385\u0383\x03\x02\x02\x02\u0386\u0389\x03\x02\x02\x02\u0387\u0385"+
		"\x03\x02\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388\u038B\x03\x02\x02\x02"+
		"\u0389\u0387\x03\x02\x02\x02\u038A\u038C\x073\x02\x02\u038B\u038A\x03"+
		"\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C\x89\x03\x02\x02\x02\u038D"+
		"\u0399\x05^0\x02\u038E\u0390\x05^0\x02\u038F\u038E\x03\x02\x02\x02\u038F"+
		"\u0390\x03\x02\x02\x02\u0390\u0391\x03\x02\x02\x02\u0391\u0393\x074\x02"+
		"\x02\u0392\u0394\x05^0\x02\u0393\u0392\x03\x02\x02\x02\u0393\u0394\x03"+
		"\x02\x02\x02\u0394\u0396\x03\x02\x02\x02\u0395\u0397\x05\x8CG\x02\u0396"+
		"\u0395\x03\x02\x02\x02\u0396\u0397\x03\x02\x02\x02\u0397\u0399\x03\x02"+
		"\x02\x02\u0398\u038D\x03\x02\x02\x02\u0398\u038F\x03\x02\x02\x02\u0399"+
		"\x8B\x03\x02\x02\x02\u039A\u039C\x074\x02\x02\u039B\u039D\x05^0\x02\u039C"+
		"\u039B\x03\x02\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D\x8D\x03\x02\x02"+
		"\x02\u039E\u03A3\x05p9\x02\u039F\u03A0\x073\x02\x02\u03A0\u03A2\x05p9"+
		"\x02\u03A1\u039F\x03\x02\x02\x02\u03A2\u03A5\x03\x02\x02\x02\u03A3\u03A1"+
		"\x03\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03A7\x03\x02\x02\x02"+
		"\u03A5\u03A3\x03\x02\x02\x02\u03A6\u03A8\x073\x02\x02\u03A7\u03A6\x03"+
		"\x02\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8\x8F\x03\x02\x02\x02\u03A9"+
		"\u03AE\x05^0\x02\u03AA\u03AB\x073\x02\x02\u03AB\u03AD\x05^0\x02\u03AC"+
		"\u03AA\x03\x02\x02\x02\u03AD\u03B0\x03\x02\x02\x02\u03AE\u03AC\x03\x02"+
		"\x02\x02\u03AE\u03AF\x03\x02\x02\x02\u03AF\u03B2\x03\x02\x02\x02\u03B0"+
		"\u03AE\x03\x02\x02\x02\u03B1\u03B3\x073\x02\x02\u03B2\u03B1\x03\x02\x02"+
		"\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3\x91\x03\x02\x02\x02\u03B4\u03B5"+
		"\x05^0\x02\u03B5\u03B6\x074\x02\x02\u03B6\u03C5\x05^0\x02\u03B7\u03C6"+
		"\x05\x9CO\x02\u03B8\u03B9\x073\x02\x02\u03B9\u03BA\x05^0\x02\u03BA\u03BB"+
		"\x074\x02\x02\u03BB\u03BC\x05^0\x02\u03BC\u03BE\x03\x02\x02\x02\u03BD"+
		"\u03B8\x03\x02\x02\x02\u03BE\u03C1\x03\x02\x02\x02\u03BF\u03BD\x03\x02"+
		"\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0\u03C3\x03\x02\x02\x02\u03C1"+
		"\u03BF\x03\x02\x02\x02\u03C2\u03C4\x073\x02\x02\u03C3\u03C2\x03\x02\x02"+
		"\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4\u03C6\x03\x02\x02\x02\u03C5\u03B7"+
		"\x03\x02\x02\x02\u03C5\u03BF\x03\x02\x02\x02\u03C6\u03D6\x03\x02\x02\x02"+
		"\u03C7\u03D3\x05^0\x02\u03C8\u03D4\x05\x9CO\x02\u03C9\u03CA\x073\x02\x02"+
		"\u03CA\u03CC\x05^0\x02\u03CB\u03C9\x03\x02\x02\x02\u03CC\u03CF\x03\x02"+
		"\x02\x02\u03CD\u03CB\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02\u03CE"+
		"\u03D1\x03\x02\x02\x02\u03CF\u03CD\x03\x02\x02\x02\u03D0\u03D2\x073\x02"+
		"\x02\u03D1\u03D0\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D2\u03D4"+
		"\x03\x02\x02\x02\u03D3\u03C8\x03\x02\x02\x02\u03D3\u03CD\x03\x02\x02\x02"+
		"\u03D4\u03D6\x03\x02\x02\x02\u03D5\u03B4\x03\x02\x02\x02\u03D5\u03C7\x03"+
		"\x02\x02\x02\u03D6\x93\x03\x02\x02\x02\u03D7\u03D8\x07\x1E\x02\x02\u03D8"+
		"\u03DE\x07%\x02\x02\u03D9\u03DB\x071\x02\x02\u03DA\u03DC\x05\x96L\x02"+
		"\u03DB\u03DA\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03DD\x03"+
		"\x02\x02\x02\u03DD\u03DF\x072\x02\x02\u03DE\u03D9\x03\x02\x02\x02\u03DE"+
		"\u03DF\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0\u03E1\x074\x02"+
		"\x02\u03E1\u03E2\x05\\/\x02\u03E2\x95\x03\x02\x02\x02\u03E3\u03E4\x05"+
		"\x98M\x02\u03E4\u03E5\x073\x02\x02\u03E5\u03E7\x03\x02\x02\x02\u03E6\u03E3"+
		"\x03\x02\x02\x02\u03E7\u03EA\x03\x02\x02\x02\u03E8\u03E6\x03\x02\x02\x02"+
		"\u03E8\u03E9\x03\x02\x02\x02\u03E9\u03FF\x03\x02\x02\x02\u03EA\u03E8\x03"+
		"\x02\x02\x02\u03EB\u03ED\x05\x98M\x02\u03EC\u03EE\x073\x02\x02\u03ED\u03EC"+
		"\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02\u03EE\u0400\x03\x02\x02\x02"+
		"\u03EF\u03F0\x070\x02\x02\u03F0\u03F5\x05^0\x02\u03F1\u03F2\x073\x02\x02"+
		"\u03F2\u03F4\x05\x98M\x02\u03F3\u03F1\x03\x02\x02\x02\u03F4\u03F7\x03"+
		"\x02\x02\x02\u03F5\u03F3\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6"+
		"\u03FB\x03\x02\x02\x02\u03F7\u03F5\x03\x02\x02\x02\u03F8\u03F9\x073\x02"+
		"\x02\u03F9\u03FA\x076\x02\x02\u03FA\u03FC\x05^0\x02\u03FB\u03F8\x03\x02"+
		"\x02\x02\u03FB\u03FC\x03\x02\x02\x02\u03FC\u0400\x03\x02\x02\x02\u03FD"+
		"\u03FE\x076\x02\x02\u03FE\u0400\x05^0\x02\u03FF\u03EB\x03\x02\x02\x02"+
		"\u03FF\u03EF\x03\x02\x02\x02\u03FF\u03FD\x03\x02\x02\x02\u0400\x97\x03"+
		"\x02\x02\x02\u0401\u0403\x05^0\x02\u0402\u0404\x05\x9CO\x02\u0403\u0402"+
		"\x03\x02\x02\x02\u0403\u0404\x03\x02\x02\x02\u0404\u040A\x03\x02\x02\x02"+
		"\u0405\u0406\x05^0\x02\u0406\u0407\x077\x02\x02\u0407\u0408\x05^0\x02"+
		"\u0408\u040A\x03\x02\x02\x02\u0409\u0401\x03\x02\x02\x02\u0409\u0405\x03"+
		"\x02\x02\x02\u040A\x99\x03\x02\x02\x02\u040B\u040E\x05\x9CO\x02\u040C"+
		"\u040E\x05\x9EP\x02\u040D\u040B\x03\x02\x02\x02\u040D\u040C\x03\x02\x02"+
		"\x02\u040E\x9B\x03\x02\x02\x02\u040F\u0410\x07\x10\x02\x02\u0410\u0411"+
		"\x05\x8EH\x02\u0411\u0412\x07\x11\x02\x02\u0412\u0414\x05f4\x02\u0413"+
		"\u0415\x05\x9AN\x02\u0414\u0413\x03\x02\x02\x02\u0414\u0415\x03\x02\x02"+
		"\x02\u0415\x9D\x03\x02\x02\x02\u0416\u0417\x07\f\x02\x02\u0417\u0419\x05"+
		"`1\x02\u0418\u041A\x05\x9AN\x02\u0419\u0418\x03\x02\x02\x02\u0419\u041A"+
		"\x03\x02\x02\x02\u041A\x9F\x03\x02\x02\x02\u041B\u041D\x07\x1F\x02\x02"+
		"\u041C\u041E\x05\xA2R\x02\u041D\u041C\x03\x02\x02\x02\u041D\u041E\x03"+
		"\x02\x02\x02\u041E\xA1\x03\x02\x02\x02\u041F\u0420\x07\x06\x02\x02\u0420"+
		"\u0423\x05^0\x02\u0421\u0423\x05\x90I\x02\u0422\u041F\x03\x02\x02\x02"+
		"\u0422\u0421\x03\x02\x02\x02\u0423\xA3\x03\x02\x02\x02\u0424\u0425\t\x04"+
		"\x02\x02\u0425\xA5\x03\x02\x02\x02\u0426\u042A\x05\xA8U\x02\u0427\u042A"+
		"\x07,\x02\x02\u0428\u042A\x07-\x02\x02\u0429\u0426\x03\x02\x02\x02\u0429"+
		"\u0427\x03\x02\x02\x02\u0429\u0428\x03\x02\x02\x02\u042A\xA7\x03\x02\x02"+
		"\x02\u042B\u042C\t\x05\x02\x02\u042C\xA9\x03\x02\x02\x02\x98\xAF\xB3\xB5"+
		"\xBE\xC7\xCA\xD1\xD6\xDD\xE4\xEB\xF1\xF5\xFB\u0101\u0105\u010B\u010F\u0111"+
		"\u0115\u011B\u011F\u0125\u0129\u012E\u0133\u0139\u013D\u0143\u0149\u014D"+
		"\u0153\u0157\u0159\u015D\u0163\u0167\u016D\u0171\u0177\u017E\u0182\u018E"+
		"\u0195\u019D\u01A1\u01A4\u01A8\u01AD\u01B1\u01B5\u01C3\u01CB\u01D3\u01D5"+
		"\u01D9\u01E2\u01E9\u01EB\u01F4\u01F9\u01FE\u0205\u0209\u0210\u0218\u0221"+
		"\u022A\u0231\u023B\u0248\u024E\u0257\u0262\u026D\u0272\u0277\u027C\u0284"+
		"\u028D\u0293\u0295\u029D\u02A1\u02A9\u02AC\u02B0\u02B4\u02BB\u02C5\u02CD"+
		"\u02D3\u02DB\u02EB\u02EE\u02F7\u02FF\u0307\u030F\u0311\u0319\u031B\u0329"+
		"\u032B\u0335\u033B\u0340\u0345\u034A\u034F\u035A\u0362\u036A\u036E\u0370"+
		"\u0375\u0380\u0387\u038B\u038F\u0393\u0396\u0398\u039C\u03A3\u03A7\u03AE"+
		"\u03B2\u03BF\u03C3\u03C5\u03CD\u03D1\u03D3\u03D5\u03DB\u03DE\u03E8\u03ED"+
		"\u03F5\u03FB\u03FF\u0403\u0409\u040D\u0414\u0419\u041D\u0422\u0429";
	public static readonly _serializedATN: string = Utils.join(
		[
			Python3Parser._serializedATNSegment0,
			Python3Parser._serializedATNSegment1
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Python3Parser.__ATN) {
			Python3Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Python3Parser._serializedATN));
		}

		return Python3Parser.__ATN;
	}

}

export class Single_inputContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NEWLINE, 0); }
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public compound_stmt(): Compound_stmtContext | undefined {
		return this.tryGetRuleContext(0, Compound_stmtContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_single_input; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSingle_input) listener.enterSingle_input(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSingle_input) listener.exitSingle_input(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSingle_input) return visitor.visitSingle_input(this);
		else return visitor.visitChildren(this);
	}
}


export class File_inputContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(Python3Parser.EOF, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NEWLINE);
		} else {
			return this.getToken(Python3Parser.NEWLINE, i);
		}
	}
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_file_input; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFile_input) listener.enterFile_input(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFile_input) listener.exitFile_input(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFile_input) return visitor.visitFile_input(this);
		else return visitor.visitChildren(this);
	}
}


export class Eval_inputContext extends ParserRuleContext {
	public testlist(): TestlistContext {
		return this.getRuleContext(0, TestlistContext);
	}
	public EOF(): TerminalNode { return this.getToken(Python3Parser.EOF, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NEWLINE);
		} else {
			return this.getToken(Python3Parser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_eval_input; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterEval_input) listener.enterEval_input(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitEval_input) listener.exitEval_input(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitEval_input) return visitor.visitEval_input(this);
		else return visitor.visitChildren(this);
	}
}


export class DecoratorContext extends ParserRuleContext {
	public dotted_name(): Dotted_nameContext {
		return this.getRuleContext(0, Dotted_nameContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(Python3Parser.NEWLINE, 0); }
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_decorator; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDecorator) listener.enterDecorator(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDecorator) listener.exitDecorator(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDecorator) return visitor.visitDecorator(this);
		else return visitor.visitChildren(this);
	}
}


export class DecoratorsContext extends ParserRuleContext {
	public decorator(): DecoratorContext[];
	public decorator(i: number): DecoratorContext;
	public decorator(i?: number): DecoratorContext | DecoratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DecoratorContext);
		} else {
			return this.getRuleContext(i, DecoratorContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_decorators; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDecorators) listener.enterDecorators(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDecorators) listener.exitDecorators(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDecorators) return visitor.visitDecorators(this);
		else return visitor.visitChildren(this);
	}
}


export class DecoratedContext extends ParserRuleContext {
	public decorators(): DecoratorsContext {
		return this.getRuleContext(0, DecoratorsContext);
	}
	public classdef(): ClassdefContext | undefined {
		return this.tryGetRuleContext(0, ClassdefContext);
	}
	public funcdef(): FuncdefContext | undefined {
		return this.tryGetRuleContext(0, FuncdefContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_decorated; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDecorated) listener.enterDecorated(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDecorated) listener.exitDecorated(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDecorated) return visitor.visitDecorated(this);
		else return visitor.visitChildren(this);
	}
}


export class FuncdefContext extends ParserRuleContext {
	public DEF(): TerminalNode { return this.getToken(Python3Parser.DEF, 0); }
	public NAME(): TerminalNode { return this.getToken(Python3Parser.NAME, 0); }
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_funcdef; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFuncdef) listener.enterFuncdef(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFuncdef) listener.exitFuncdef(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFuncdef) return visitor.visitFuncdef(this);
		else return visitor.visitChildren(this);
	}
}


export class ParametersContext extends ParserRuleContext {
	public typedargslist(): TypedargslistContext | undefined {
		return this.tryGetRuleContext(0, TypedargslistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_parameters; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterParameters) listener.enterParameters(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitParameters) listener.exitParameters(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitParameters) return visitor.visitParameters(this);
		else return visitor.visitChildren(this);
	}
}


export class TypedargslistContext extends ParserRuleContext {
	public tfpdef(): TfpdefContext[];
	public tfpdef(i: number): TfpdefContext;
	public tfpdef(i?: number): TfpdefContext | TfpdefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TfpdefContext);
		} else {
			return this.getRuleContext(i, TfpdefContext);
		}
	}
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_typedargslist; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTypedargslist) listener.enterTypedargslist(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTypedargslist) listener.exitTypedargslist(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTypedargslist) return visitor.visitTypedargslist(this);
		else return visitor.visitChildren(this);
	}
}


export class TfpdefContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Python3Parser.NAME, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_tfpdef; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTfpdef) listener.enterTfpdef(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTfpdef) listener.exitTfpdef(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTfpdef) return visitor.visitTfpdef(this);
		else return visitor.visitChildren(this);
	}
}


export class VarargslistContext extends ParserRuleContext {
	public vfpdef(): VfpdefContext[];
	public vfpdef(i: number): VfpdefContext;
	public vfpdef(i?: number): VfpdefContext | VfpdefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VfpdefContext);
		} else {
			return this.getRuleContext(i, VfpdefContext);
		}
	}
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_varargslist; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterVarargslist) listener.enterVarargslist(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitVarargslist) listener.exitVarargslist(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitVarargslist) return visitor.visitVarargslist(this);
		else return visitor.visitChildren(this);
	}
}


export class VfpdefContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Python3Parser.NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_vfpdef; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterVfpdef) listener.enterVfpdef(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitVfpdef) listener.exitVfpdef(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitVfpdef) return visitor.visitVfpdef(this);
		else return visitor.visitChildren(this);
	}
}


export class StmtContext extends ParserRuleContext {
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public compound_stmt(): Compound_stmtContext | undefined {
		return this.tryGetRuleContext(0, Compound_stmtContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterStmt) listener.enterStmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitStmt) listener.exitStmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitStmt) return visitor.visitStmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Simple_stmtContext extends ParserRuleContext {
	public small_stmt(): Small_stmtContext[];
	public small_stmt(i: number): Small_stmtContext;
	public small_stmt(i?: number): Small_stmtContext | Small_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Small_stmtContext);
		} else {
			return this.getRuleContext(i, Small_stmtContext);
		}
	}
	public NEWLINE(): TerminalNode { return this.getToken(Python3Parser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_simple_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSimple_stmt) listener.enterSimple_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSimple_stmt) listener.exitSimple_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSimple_stmt) return visitor.visitSimple_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Small_stmtContext extends ParserRuleContext {
	public expr_stmt(): Expr_stmtContext | undefined {
		return this.tryGetRuleContext(0, Expr_stmtContext);
	}
	public del_stmt(): Del_stmtContext | undefined {
		return this.tryGetRuleContext(0, Del_stmtContext);
	}
	public pass_stmt(): Pass_stmtContext | undefined {
		return this.tryGetRuleContext(0, Pass_stmtContext);
	}
	public flow_stmt(): Flow_stmtContext | undefined {
		return this.tryGetRuleContext(0, Flow_stmtContext);
	}
	public import_stmt(): Import_stmtContext | undefined {
		return this.tryGetRuleContext(0, Import_stmtContext);
	}
	public global_stmt(): Global_stmtContext | undefined {
		return this.tryGetRuleContext(0, Global_stmtContext);
	}
	public nonlocal_stmt(): Nonlocal_stmtContext | undefined {
		return this.tryGetRuleContext(0, Nonlocal_stmtContext);
	}
	public assert_stmt(): Assert_stmtContext | undefined {
		return this.tryGetRuleContext(0, Assert_stmtContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_small_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSmall_stmt) listener.enterSmall_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSmall_stmt) listener.exitSmall_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSmall_stmt) return visitor.visitSmall_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Expr_stmtContext extends ParserRuleContext {
	public _ls: Testlist_star_exprContext;
	public testlist_star_expr(): Testlist_star_exprContext[];
	public testlist_star_expr(i: number): Testlist_star_exprContext;
	public testlist_star_expr(i?: number): Testlist_star_exprContext | Testlist_star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Testlist_star_exprContext);
		} else {
			return this.getRuleContext(i, Testlist_star_exprContext);
		}
	}
	public augassign(): AugassignContext | undefined {
		return this.tryGetRuleContext(0, AugassignContext);
	}
	public yield_expr(): Yield_exprContext[];
	public yield_expr(i: number): Yield_exprContext;
	public yield_expr(i?: number): Yield_exprContext | Yield_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Yield_exprContext);
		} else {
			return this.getRuleContext(i, Yield_exprContext);
		}
	}
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_expr_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterExpr_stmt) listener.enterExpr_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitExpr_stmt) listener.exitExpr_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitExpr_stmt) return visitor.visitExpr_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Testlist_star_exprContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public star_expr(): Star_exprContext[];
	public star_expr(i: number): Star_exprContext;
	public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Star_exprContext);
		} else {
			return this.getRuleContext(i, Star_exprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_testlist_star_expr; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTestlist_star_expr) listener.enterTestlist_star_expr(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTestlist_star_expr) listener.exitTestlist_star_expr(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTestlist_star_expr) return visitor.visitTestlist_star_expr(this);
		else return visitor.visitChildren(this);
	}
}


export class AugassignContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_augassign; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAugassign) listener.enterAugassign(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAugassign) listener.exitAugassign(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAugassign) return visitor.visitAugassign(this);
		else return visitor.visitChildren(this);
	}
}


export class Del_stmtContext extends ParserRuleContext {
	public DEL(): TerminalNode { return this.getToken(Python3Parser.DEL, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_del_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDel_stmt) listener.enterDel_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDel_stmt) listener.exitDel_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDel_stmt) return visitor.visitDel_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Pass_stmtContext extends ParserRuleContext {
	public PASS(): TerminalNode { return this.getToken(Python3Parser.PASS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_pass_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterPass_stmt) listener.enterPass_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitPass_stmt) listener.exitPass_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitPass_stmt) return visitor.visitPass_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Flow_stmtContext extends ParserRuleContext {
	public break_stmt(): Break_stmtContext | undefined {
		return this.tryGetRuleContext(0, Break_stmtContext);
	}
	public continue_stmt(): Continue_stmtContext | undefined {
		return this.tryGetRuleContext(0, Continue_stmtContext);
	}
	public return_stmt(): Return_stmtContext | undefined {
		return this.tryGetRuleContext(0, Return_stmtContext);
	}
	public raise_stmt(): Raise_stmtContext | undefined {
		return this.tryGetRuleContext(0, Raise_stmtContext);
	}
	public yield_stmt(): Yield_stmtContext | undefined {
		return this.tryGetRuleContext(0, Yield_stmtContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_flow_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFlow_stmt) listener.enterFlow_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFlow_stmt) listener.exitFlow_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFlow_stmt) return visitor.visitFlow_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Break_stmtContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(Python3Parser.BREAK, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_break_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterBreak_stmt) listener.enterBreak_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitBreak_stmt) listener.exitBreak_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitBreak_stmt) return visitor.visitBreak_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Continue_stmtContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(Python3Parser.CONTINUE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_continue_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterContinue_stmt) listener.enterContinue_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitContinue_stmt) listener.exitContinue_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitContinue_stmt) return visitor.visitContinue_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Return_stmtContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(Python3Parser.RETURN, 0); }
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_return_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterReturn_stmt) listener.enterReturn_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitReturn_stmt) listener.exitReturn_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitReturn_stmt) return visitor.visitReturn_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Yield_stmtContext extends ParserRuleContext {
	public yield_expr(): Yield_exprContext {
		return this.getRuleContext(0, Yield_exprContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_yield_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterYield_stmt) listener.enterYield_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitYield_stmt) listener.exitYield_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitYield_stmt) return visitor.visitYield_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Raise_stmtContext extends ParserRuleContext {
	public RAISE(): TerminalNode { return this.getToken(Python3Parser.RAISE, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FROM, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_raise_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterRaise_stmt) listener.enterRaise_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitRaise_stmt) listener.exitRaise_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitRaise_stmt) return visitor.visitRaise_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Import_stmtContext extends ParserRuleContext {
	public import_name(): Import_nameContext | undefined {
		return this.tryGetRuleContext(0, Import_nameContext);
	}
	public import_from(): Import_fromContext | undefined {
		return this.tryGetRuleContext(0, Import_fromContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_import_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_stmt) listener.enterImport_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_stmt) listener.exitImport_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitImport_stmt) return visitor.visitImport_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Import_nameContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(Python3Parser.IMPORT, 0); }
	public dotted_as_names(): Dotted_as_namesContext {
		return this.getRuleContext(0, Dotted_as_namesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_import_name; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_name) listener.enterImport_name(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_name) listener.exitImport_name(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitImport_name) return visitor.visitImport_name(this);
		else return visitor.visitChildren(this);
	}
}


export class Import_fromContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(Python3Parser.FROM, 0); }
	public IMPORT(): TerminalNode { return this.getToken(Python3Parser.IMPORT, 0); }
	public dotted_name(): Dotted_nameContext | undefined {
		return this.tryGetRuleContext(0, Dotted_nameContext);
	}
	public import_as_names(): Import_as_namesContext | undefined {
		return this.tryGetRuleContext(0, Import_as_namesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_import_from; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_from) listener.enterImport_from(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_from) listener.exitImport_from(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitImport_from) return visitor.visitImport_from(this);
		else return visitor.visitChildren(this);
	}
}


export class Import_as_nameContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NAME);
		} else {
			return this.getToken(Python3Parser.NAME, i);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_import_as_name; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_as_name) listener.enterImport_as_name(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_as_name) listener.exitImport_as_name(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitImport_as_name) return visitor.visitImport_as_name(this);
		else return visitor.visitChildren(this);
	}
}


export class Dotted_as_nameContext extends ParserRuleContext {
	public dotted_name(): Dotted_nameContext {
		return this.getRuleContext(0, Dotted_nameContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AS, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_dotted_as_name; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDotted_as_name) listener.enterDotted_as_name(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDotted_as_name) listener.exitDotted_as_name(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDotted_as_name) return visitor.visitDotted_as_name(this);
		else return visitor.visitChildren(this);
	}
}


export class Import_as_namesContext extends ParserRuleContext {
	public import_as_name(): Import_as_nameContext[];
	public import_as_name(i: number): Import_as_nameContext;
	public import_as_name(i?: number): Import_as_nameContext | Import_as_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Import_as_nameContext);
		} else {
			return this.getRuleContext(i, Import_as_nameContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_import_as_names; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_as_names) listener.enterImport_as_names(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_as_names) listener.exitImport_as_names(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitImport_as_names) return visitor.visitImport_as_names(this);
		else return visitor.visitChildren(this);
	}
}


export class Dotted_as_namesContext extends ParserRuleContext {
	public dotted_as_name(): Dotted_as_nameContext[];
	public dotted_as_name(i: number): Dotted_as_nameContext;
	public dotted_as_name(i?: number): Dotted_as_nameContext | Dotted_as_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Dotted_as_nameContext);
		} else {
			return this.getRuleContext(i, Dotted_as_nameContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_dotted_as_names; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDotted_as_names) listener.enterDotted_as_names(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDotted_as_names) listener.exitDotted_as_names(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDotted_as_names) return visitor.visitDotted_as_names(this);
		else return visitor.visitChildren(this);
	}
}


export class Dotted_nameContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NAME);
		} else {
			return this.getToken(Python3Parser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_dotted_name; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDotted_name) listener.enterDotted_name(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDotted_name) listener.exitDotted_name(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDotted_name) return visitor.visitDotted_name(this);
		else return visitor.visitChildren(this);
	}
}


export class Global_stmtContext extends ParserRuleContext {
	public GLOBAL(): TerminalNode { return this.getToken(Python3Parser.GLOBAL, 0); }
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NAME);
		} else {
			return this.getToken(Python3Parser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_global_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterGlobal_stmt) listener.enterGlobal_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitGlobal_stmt) listener.exitGlobal_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitGlobal_stmt) return visitor.visitGlobal_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Nonlocal_stmtContext extends ParserRuleContext {
	public NONLOCAL(): TerminalNode { return this.getToken(Python3Parser.NONLOCAL, 0); }
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NAME);
		} else {
			return this.getToken(Python3Parser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_nonlocal_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterNonlocal_stmt) listener.enterNonlocal_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitNonlocal_stmt) listener.exitNonlocal_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitNonlocal_stmt) return visitor.visitNonlocal_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Assert_stmtContext extends ParserRuleContext {
	public ASSERT(): TerminalNode { return this.getToken(Python3Parser.ASSERT, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_assert_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAssert_stmt) listener.enterAssert_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAssert_stmt) listener.exitAssert_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAssert_stmt) return visitor.visitAssert_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Compound_stmtContext extends ParserRuleContext {
	public if_stmt(): If_stmtContext | undefined {
		return this.tryGetRuleContext(0, If_stmtContext);
	}
	public while_stmt(): While_stmtContext | undefined {
		return this.tryGetRuleContext(0, While_stmtContext);
	}
	public for_stmt(): For_stmtContext | undefined {
		return this.tryGetRuleContext(0, For_stmtContext);
	}
	public try_stmt(): Try_stmtContext | undefined {
		return this.tryGetRuleContext(0, Try_stmtContext);
	}
	public with_stmt(): With_stmtContext | undefined {
		return this.tryGetRuleContext(0, With_stmtContext);
	}
	public funcdef(): FuncdefContext | undefined {
		return this.tryGetRuleContext(0, FuncdefContext);
	}
	public classdef(): ClassdefContext | undefined {
		return this.tryGetRuleContext(0, ClassdefContext);
	}
	public decorated(): DecoratedContext | undefined {
		return this.tryGetRuleContext(0, DecoratedContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_compound_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterCompound_stmt) listener.enterCompound_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitCompound_stmt) listener.exitCompound_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitCompound_stmt) return visitor.visitCompound_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class If_stmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(Python3Parser.IF, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	public ELIF(): TerminalNode[];
	public ELIF(i: number): TerminalNode;
	public ELIF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.ELIF);
		} else {
			return this.getToken(Python3Parser.ELIF, i);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_if_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterIf_stmt) listener.enterIf_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitIf_stmt) listener.exitIf_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitIf_stmt) return visitor.visitIf_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class While_stmtContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(Python3Parser.WHILE, 0); }
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_while_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterWhile_stmt) listener.enterWhile_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitWhile_stmt) listener.exitWhile_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitWhile_stmt) return visitor.visitWhile_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class For_stmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(Python3Parser.FOR, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	public IN(): TerminalNode { return this.getToken(Python3Parser.IN, 0); }
	public testlist(): TestlistContext {
		return this.getRuleContext(0, TestlistContext);
	}
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_for_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFor_stmt) listener.enterFor_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFor_stmt) listener.exitFor_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFor_stmt) return visitor.visitFor_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Try_stmtContext extends ParserRuleContext {
	public TRY(): TerminalNode { return this.getToken(Python3Parser.TRY, 0); }
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	public FINALLY(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FINALLY, 0); }
	public except_clause(): Except_clauseContext[];
	public except_clause(i: number): Except_clauseContext;
	public except_clause(i?: number): Except_clauseContext | Except_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Except_clauseContext);
		} else {
			return this.getRuleContext(i, Except_clauseContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_try_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTry_stmt) listener.enterTry_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTry_stmt) listener.exitTry_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTry_stmt) return visitor.visitTry_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class With_stmtContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(Python3Parser.WITH, 0); }
	public with_item(): With_itemContext[];
	public with_item(i: number): With_itemContext;
	public with_item(i?: number): With_itemContext | With_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(With_itemContext);
		} else {
			return this.getRuleContext(i, With_itemContext);
		}
	}
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_with_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterWith_stmt) listener.enterWith_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitWith_stmt) listener.exitWith_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitWith_stmt) return visitor.visitWith_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class With_itemContext extends ParserRuleContext {
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AS, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_with_item; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterWith_item) listener.enterWith_item(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitWith_item) listener.exitWith_item(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitWith_item) return visitor.visitWith_item(this);
		else return visitor.visitChildren(this);
	}
}


export class Except_clauseContext extends ParserRuleContext {
	public EXCEPT(): TerminalNode { return this.getToken(Python3Parser.EXCEPT, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AS, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_except_clause; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterExcept_clause) listener.enterExcept_clause(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitExcept_clause) listener.exitExcept_clause(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitExcept_clause) return visitor.visitExcept_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class SuiteContext extends ParserRuleContext {
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NEWLINE, 0); }
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.DEDENT, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_suite; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSuite) listener.enterSuite(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSuite) listener.exitSuite(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSuite) return visitor.visitSuite(this);
		else return visitor.visitChildren(this);
	}
}


export class TestContext extends ParserRuleContext {
	public or_test(): Or_testContext[];
	public or_test(i: number): Or_testContext;
	public or_test(i?: number): Or_testContext | Or_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Or_testContext);
		} else {
			return this.getRuleContext(i, Or_testContext);
		}
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.IF, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ELSE, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public lambdef(): LambdefContext | undefined {
		return this.tryGetRuleContext(0, LambdefContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_test; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTest) listener.enterTest(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTest) listener.exitTest(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTest) return visitor.visitTest(this);
		else return visitor.visitChildren(this);
	}
}


export class Test_nocondContext extends ParserRuleContext {
	public or_test(): Or_testContext | undefined {
		return this.tryGetRuleContext(0, Or_testContext);
	}
	public lambdef_nocond(): Lambdef_nocondContext | undefined {
		return this.tryGetRuleContext(0, Lambdef_nocondContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_test_nocond; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTest_nocond) listener.enterTest_nocond(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTest_nocond) listener.exitTest_nocond(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTest_nocond) return visitor.visitTest_nocond(this);
		else return visitor.visitChildren(this);
	}
}


export class LambdefContext extends ParserRuleContext {
	public LAMBDA(): TerminalNode { return this.getToken(Python3Parser.LAMBDA, 0); }
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public varargslist(): VarargslistContext | undefined {
		return this.tryGetRuleContext(0, VarargslistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_lambdef; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterLambdef) listener.enterLambdef(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitLambdef) listener.exitLambdef(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitLambdef) return visitor.visitLambdef(this);
		else return visitor.visitChildren(this);
	}
}


export class Lambdef_nocondContext extends ParserRuleContext {
	public LAMBDA(): TerminalNode { return this.getToken(Python3Parser.LAMBDA, 0); }
	public test_nocond(): Test_nocondContext {
		return this.getRuleContext(0, Test_nocondContext);
	}
	public varargslist(): VarargslistContext | undefined {
		return this.tryGetRuleContext(0, VarargslistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_lambdef_nocond; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterLambdef_nocond) listener.enterLambdef_nocond(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitLambdef_nocond) listener.exitLambdef_nocond(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitLambdef_nocond) return visitor.visitLambdef_nocond(this);
		else return visitor.visitChildren(this);
	}
}


export class Or_testContext extends ParserRuleContext {
	public and_test(): And_testContext[];
	public and_test(i: number): And_testContext;
	public and_test(i?: number): And_testContext | And_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(And_testContext);
		} else {
			return this.getRuleContext(i, And_testContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.OR);
		} else {
			return this.getToken(Python3Parser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_or_test; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterOr_test) listener.enterOr_test(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitOr_test) listener.exitOr_test(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitOr_test) return visitor.visitOr_test(this);
		else return visitor.visitChildren(this);
	}
}


export class And_testContext extends ParserRuleContext {
	public not_test(): Not_testContext[];
	public not_test(i: number): Not_testContext;
	public not_test(i?: number): Not_testContext | Not_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Not_testContext);
		} else {
			return this.getRuleContext(i, Not_testContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.AND);
		} else {
			return this.getToken(Python3Parser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_and_test; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAnd_test) listener.enterAnd_test(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAnd_test) listener.exitAnd_test(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAnd_test) return visitor.visitAnd_test(this);
		else return visitor.visitChildren(this);
	}
}


export class Not_testContext extends ParserRuleContext {
	public NOT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NOT, 0); }
	public not_test(): Not_testContext | undefined {
		return this.tryGetRuleContext(0, Not_testContext);
	}
	public comparison(): ComparisonContext | undefined {
		return this.tryGetRuleContext(0, ComparisonContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_not_test; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterNot_test) listener.enterNot_test(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitNot_test) listener.exitNot_test(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitNot_test) return visitor.visitNot_test(this);
		else return visitor.visitChildren(this);
	}
}


export class ComparisonContext extends ParserRuleContext {
	public star_expr(): Star_exprContext[];
	public star_expr(i: number): Star_exprContext;
	public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Star_exprContext);
		} else {
			return this.getRuleContext(i, Star_exprContext);
		}
	}
	public comp_op(): Comp_opContext[];
	public comp_op(i: number): Comp_opContext;
	public comp_op(i?: number): Comp_opContext | Comp_opContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comp_opContext);
		} else {
			return this.getRuleContext(i, Comp_opContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_comparison; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComparison) listener.enterComparison(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComparison) listener.exitComparison(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitComparison) return visitor.visitComparison(this);
		else return visitor.visitChildren(this);
	}
}


export class Comp_opContext extends ParserRuleContext {
	public IN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.IN, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NOT, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.IS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_comp_op; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComp_op) listener.enterComp_op(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComp_op) listener.exitComp_op(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitComp_op) return visitor.visitComp_op(this);
		else return visitor.visitChildren(this);
	}
}


export class Star_exprContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_star_expr; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterStar_expr) listener.enterStar_expr(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitStar_expr) listener.exitStar_expr(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitStar_expr) return visitor.visitStar_expr(this);
		else return visitor.visitChildren(this);
	}
}


export class ExprContext extends ParserRuleContext {
	public xor_expr(): Xor_exprContext[];
	public xor_expr(i: number): Xor_exprContext;
	public xor_expr(i?: number): Xor_exprContext | Xor_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Xor_exprContext);
		} else {
			return this.getRuleContext(i, Xor_exprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_expr; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterExpr) listener.enterExpr(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitExpr) listener.exitExpr(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitExpr) return visitor.visitExpr(this);
		else return visitor.visitChildren(this);
	}
}


export class Xor_exprContext extends ParserRuleContext {
	public and_expr(): And_exprContext[];
	public and_expr(i: number): And_exprContext;
	public and_expr(i?: number): And_exprContext | And_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(And_exprContext);
		} else {
			return this.getRuleContext(i, And_exprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_xor_expr; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterXor_expr) listener.enterXor_expr(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitXor_expr) listener.exitXor_expr(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitXor_expr) return visitor.visitXor_expr(this);
		else return visitor.visitChildren(this);
	}
}


export class And_exprContext extends ParserRuleContext {
	public shift_expr(): Shift_exprContext[];
	public shift_expr(i: number): Shift_exprContext;
	public shift_expr(i?: number): Shift_exprContext | Shift_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Shift_exprContext);
		} else {
			return this.getRuleContext(i, Shift_exprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_and_expr; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAnd_expr) listener.enterAnd_expr(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAnd_expr) listener.exitAnd_expr(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAnd_expr) return visitor.visitAnd_expr(this);
		else return visitor.visitChildren(this);
	}
}


export class Shift_exprContext extends ParserRuleContext {
	public arith_expr(): Arith_exprContext[];
	public arith_expr(i: number): Arith_exprContext;
	public arith_expr(i?: number): Arith_exprContext | Arith_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Arith_exprContext);
		} else {
			return this.getRuleContext(i, Arith_exprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_shift_expr; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterShift_expr) listener.enterShift_expr(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitShift_expr) listener.exitShift_expr(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitShift_expr) return visitor.visitShift_expr(this);
		else return visitor.visitChildren(this);
	}
}


export class Arith_exprContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_arith_expr; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterArith_expr) listener.enterArith_expr(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitArith_expr) listener.exitArith_expr(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitArith_expr) return visitor.visitArith_expr(this);
		else return visitor.visitChildren(this);
	}
}


export class TermContext extends ParserRuleContext {
	public factor(): FactorContext[];
	public factor(i: number): FactorContext;
	public factor(i?: number): FactorContext | FactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FactorContext);
		} else {
			return this.getRuleContext(i, FactorContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_term; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTerm) listener.enterTerm(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTerm) listener.exitTerm(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTerm) return visitor.visitTerm(this);
		else return visitor.visitChildren(this);
	}
}


export class FactorContext extends ParserRuleContext {
	public factor(): FactorContext | undefined {
		return this.tryGetRuleContext(0, FactorContext);
	}
	public power(): PowerContext | undefined {
		return this.tryGetRuleContext(0, PowerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_factor; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFactor) listener.enterFactor(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFactor) listener.exitFactor(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFactor) return visitor.visitFactor(this);
		else return visitor.visitChildren(this);
	}
}


export class PowerContext extends ParserRuleContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	public trailer(): TrailerContext[];
	public trailer(i: number): TrailerContext;
	public trailer(i?: number): TrailerContext | TrailerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TrailerContext);
		} else {
			return this.getRuleContext(i, TrailerContext);
		}
	}
	public factor(): FactorContext | undefined {
		return this.tryGetRuleContext(0, FactorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_power; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterPower) listener.enterPower(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitPower) listener.exitPower(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitPower) return visitor.visitPower(this);
		else return visitor.visitChildren(this);
	}
}


export class AtomContext extends ParserRuleContext {
	public _NAME: Token;
	public _number: NumberContext;
	public _str: StrContext;
	public yield_expr(): Yield_exprContext | undefined {
		return this.tryGetRuleContext(0, Yield_exprContext);
	}
	public testlist_comp(): Testlist_compContext | undefined {
		return this.tryGetRuleContext(0, Testlist_compContext);
	}
	public dictorsetmaker(): DictorsetmakerContext | undefined {
		return this.tryGetRuleContext(0, DictorsetmakerContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NAME, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public str(): StrContext[];
	public str(i: number): StrContext;
	public str(i?: number): StrContext | StrContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StrContext);
		} else {
			return this.getRuleContext(i, StrContext);
		}
	}
	public NONE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NONE, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FALSE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_atom; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAtom) listener.enterAtom(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAtom) listener.exitAtom(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAtom) return visitor.visitAtom(this);
		else return visitor.visitChildren(this);
	}
}


export class Testlist_compContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_testlist_comp; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTestlist_comp) listener.enterTestlist_comp(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTestlist_comp) listener.exitTestlist_comp(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTestlist_comp) return visitor.visitTestlist_comp(this);
		else return visitor.visitChildren(this);
	}
}


export class TrailerContext extends ParserRuleContext {
	public _NAME: Token;
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	public subscriptlist(): SubscriptlistContext | undefined {
		return this.tryGetRuleContext(0, SubscriptlistContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_trailer; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTrailer) listener.enterTrailer(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTrailer) listener.exitTrailer(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTrailer) return visitor.visitTrailer(this);
		else return visitor.visitChildren(this);
	}
}


export class SubscriptlistContext extends ParserRuleContext {
	public subscript(): SubscriptContext[];
	public subscript(i: number): SubscriptContext;
	public subscript(i?: number): SubscriptContext | SubscriptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubscriptContext);
		} else {
			return this.getRuleContext(i, SubscriptContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_subscriptlist; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSubscriptlist) listener.enterSubscriptlist(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSubscriptlist) listener.exitSubscriptlist(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSubscriptlist) return visitor.visitSubscriptlist(this);
		else return visitor.visitChildren(this);
	}
}


export class SubscriptContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public sliceop(): SliceopContext | undefined {
		return this.tryGetRuleContext(0, SliceopContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_subscript; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSubscript) listener.enterSubscript(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSubscript) listener.exitSubscript(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSubscript) return visitor.visitSubscript(this);
		else return visitor.visitChildren(this);
	}
}


export class SliceopContext extends ParserRuleContext {
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_sliceop; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSliceop) listener.enterSliceop(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSliceop) listener.exitSliceop(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSliceop) return visitor.visitSliceop(this);
		else return visitor.visitChildren(this);
	}
}


export class ExprlistContext extends ParserRuleContext {
	public star_expr(): Star_exprContext[];
	public star_expr(i: number): Star_exprContext;
	public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Star_exprContext);
		} else {
			return this.getRuleContext(i, Star_exprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_exprlist; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterExprlist) listener.enterExprlist(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitExprlist) listener.exitExprlist(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitExprlist) return visitor.visitExprlist(this);
		else return visitor.visitChildren(this);
	}
}


export class TestlistContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_testlist; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTestlist) listener.enterTestlist(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTestlist) listener.exitTestlist(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTestlist) return visitor.visitTestlist(this);
		else return visitor.visitChildren(this);
	}
}


export class DictorsetmakerContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_dictorsetmaker; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDictorsetmaker) listener.enterDictorsetmaker(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDictorsetmaker) listener.exitDictorsetmaker(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDictorsetmaker) return visitor.visitDictorsetmaker(this);
		else return visitor.visitChildren(this);
	}
}


export class ClassdefContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(Python3Parser.CLASS, 0); }
	public NAME(): TerminalNode { return this.getToken(Python3Parser.NAME, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_classdef; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterClassdef) listener.enterClassdef(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitClassdef) listener.exitClassdef(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitClassdef) return visitor.visitClassdef(this);
		else return visitor.visitChildren(this);
	}
}


export class ArglistContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_arglist; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterArglist) listener.enterArglist(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitArglist) listener.exitArglist(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitArglist) return visitor.visitArglist(this);
		else return visitor.visitChildren(this);
	}
}


export class ArgumentContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_argument; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterArgument) listener.enterArgument(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitArgument) listener.exitArgument(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitArgument) return visitor.visitArgument(this);
		else return visitor.visitChildren(this);
	}
}


export class Comp_iterContext extends ParserRuleContext {
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	public comp_if(): Comp_ifContext | undefined {
		return this.tryGetRuleContext(0, Comp_ifContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_comp_iter; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComp_iter) listener.enterComp_iter(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComp_iter) listener.exitComp_iter(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitComp_iter) return visitor.visitComp_iter(this);
		else return visitor.visitChildren(this);
	}
}


export class Comp_forContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(Python3Parser.FOR, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	public IN(): TerminalNode { return this.getToken(Python3Parser.IN, 0); }
	public or_test(): Or_testContext {
		return this.getRuleContext(0, Or_testContext);
	}
	public comp_iter(): Comp_iterContext | undefined {
		return this.tryGetRuleContext(0, Comp_iterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_comp_for; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComp_for) listener.enterComp_for(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComp_for) listener.exitComp_for(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitComp_for) return visitor.visitComp_for(this);
		else return visitor.visitChildren(this);
	}
}


export class Comp_ifContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(Python3Parser.IF, 0); }
	public test_nocond(): Test_nocondContext {
		return this.getRuleContext(0, Test_nocondContext);
	}
	public comp_iter(): Comp_iterContext | undefined {
		return this.tryGetRuleContext(0, Comp_iterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_comp_if; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComp_if) listener.enterComp_if(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComp_if) listener.exitComp_if(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitComp_if) return visitor.visitComp_if(this);
		else return visitor.visitChildren(this);
	}
}


export class Yield_exprContext extends ParserRuleContext {
	public YIELD(): TerminalNode { return this.getToken(Python3Parser.YIELD, 0); }
	public yield_arg(): Yield_argContext | undefined {
		return this.tryGetRuleContext(0, Yield_argContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_yield_expr; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterYield_expr) listener.enterYield_expr(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitYield_expr) listener.exitYield_expr(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitYield_expr) return visitor.visitYield_expr(this);
		else return visitor.visitChildren(this);
	}
}


export class Yield_argContext extends ParserRuleContext {
	public FROM(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FROM, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_yield_arg; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterYield_arg) listener.enterYield_arg(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitYield_arg) listener.exitYield_arg(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitYield_arg) return visitor.visitYield_arg(this);
		else return visitor.visitChildren(this);
	}
}


export class StrContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.STRING_LITERAL, 0); }
	public BYTES_LITERAL(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.BYTES_LITERAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_str; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterStr) listener.enterStr(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitStr) listener.exitStr(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitStr) return visitor.visitStr(this);
		else return visitor.visitChildren(this);
	}
}


export class NumberContext extends ParserRuleContext {
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public FLOAT_NUMBER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FLOAT_NUMBER, 0); }
	public IMAG_NUMBER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.IMAG_NUMBER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_number; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterNumber) listener.enterNumber(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitNumber) listener.exitNumber(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitNumber) return visitor.visitNumber(this);
		else return visitor.visitChildren(this);
	}
}


export class IntegerContext extends ParserRuleContext {
	public DECIMAL_INTEGER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.DECIMAL_INTEGER, 0); }
	public OCT_INTEGER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OCT_INTEGER, 0); }
	public HEX_INTEGER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.HEX_INTEGER, 0); }
	public BIN_INTEGER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.BIN_INTEGER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_integer; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterInteger) listener.enterInteger(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitInteger) listener.exitInteger(this);
	}
	@Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitInteger) return visitor.visitInteger(this);
		else return visitor.visitChildren(this);
	}
}


