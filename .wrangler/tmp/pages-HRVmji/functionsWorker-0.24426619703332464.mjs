var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../.wrangler/tmp/bundle-NSeaCk/checked-fetch.js
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  "../.wrangler/tmp/bundle-NSeaCk/checked-fetch.js"() {
    "use strict";
    urls = /* @__PURE__ */ new Set();
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL(request, init);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// ../node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "../node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// ../node_modules/graphql-request/build/esm/defaultJsonSerializer.js
var defaultJsonSerializer;
var init_defaultJsonSerializer = __esm({
  "../node_modules/graphql-request/build/esm/defaultJsonSerializer.js"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    defaultJsonSerializer = JSON;
  }
});

// ../node_modules/graphql-request/build/esm/helpers.js
var uppercase, HeadersInstanceToPlainObject;
var init_helpers = __esm({
  "../node_modules/graphql-request/build/esm/helpers.js"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    uppercase = (str) => str.toUpperCase();
    HeadersInstanceToPlainObject = (headers) => {
      const o = {};
      headers.forEach((v, k) => {
        o[k] = v;
      });
      return o;
    };
  }
});

// ../node_modules/graphql-request/build/esm/parseArgs.js
var parseRequestArgs, parseRawRequestArgs, parseBatchRequestArgs;
var init_parseArgs = __esm({
  "../node_modules/graphql-request/build/esm/parseArgs.js"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    parseRequestArgs = (documentOrOptions, variables, requestHeaders) => {
      return documentOrOptions.document ? documentOrOptions : {
        document: documentOrOptions,
        variables,
        requestHeaders,
        signal: void 0
      };
    };
    parseRawRequestArgs = (queryOrOptions, variables, requestHeaders) => {
      return queryOrOptions.query ? queryOrOptions : {
        query: queryOrOptions,
        variables,
        requestHeaders,
        signal: void 0
      };
    };
    parseBatchRequestArgs = (documentsOrOptions, requestHeaders) => {
      return documentsOrOptions.documents ? documentsOrOptions : {
        documents: documentsOrOptions,
        requestHeaders,
        signal: void 0
      };
    };
  }
});

// ../node_modules/graphql/jsutils/devAssert.mjs
function devAssert(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message);
  }
}
var init_devAssert = __esm({
  "../node_modules/graphql/jsutils/devAssert.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// ../node_modules/graphql/jsutils/isObjectLike.mjs
function isObjectLike(value) {
  return typeof value == "object" && value !== null;
}
var init_isObjectLike = __esm({
  "../node_modules/graphql/jsutils/isObjectLike.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// ../node_modules/graphql/jsutils/invariant.mjs
function invariant(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(
      message != null ? message : "Unexpected invariant triggered."
    );
  }
}
var init_invariant = __esm({
  "../node_modules/graphql/jsutils/invariant.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// ../node_modules/graphql/language/location.mjs
function getLocation(source, position) {
  let lastLineStart = 0;
  let line = 1;
  for (const match2 of source.body.matchAll(LineRegExp)) {
    typeof match2.index === "number" || invariant(false);
    if (match2.index >= position) {
      break;
    }
    lastLineStart = match2.index + match2[0].length;
    line += 1;
  }
  return {
    line,
    column: position + 1 - lastLineStart
  };
}
var LineRegExp;
var init_location = __esm({
  "../node_modules/graphql/language/location.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    init_invariant();
    LineRegExp = /\r\n|[\n\r]/g;
  }
});

// ../node_modules/graphql/language/printLocation.mjs
function printLocation(location) {
  return printSourceLocation(
    location.source,
    getLocation(location.source, location.start)
  );
}
function printSourceLocation(source, sourceLocation) {
  const firstLineColumnOffset = source.locationOffset.column - 1;
  const body = "".padStart(firstLineColumnOffset) + source.body;
  const lineIndex = sourceLocation.line - 1;
  const lineOffset = source.locationOffset.line - 1;
  const lineNum = sourceLocation.line + lineOffset;
  const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  const columnNum = sourceLocation.column + columnOffset;
  const locationStr = `${source.name}:${lineNum}:${columnNum}
`;
  const lines = body.split(/\r\n|[\n\r]/g);
  const locationLine = lines[lineIndex];
  if (locationLine.length > 120) {
    const subLineIndex = Math.floor(columnNum / 80);
    const subLineColumnNum = columnNum % 80;
    const subLines = [];
    for (let i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }
    return locationStr + printPrefixedLines([
      [`${lineNum} |`, subLines[0]],
      ...subLines.slice(1, subLineIndex + 1).map((subLine) => ["|", subLine]),
      ["|", "^".padStart(subLineColumnNum)],
      ["|", subLines[subLineIndex + 1]]
    ]);
  }
  return locationStr + printPrefixedLines([
    // Lines specified like this: ["prefix", "string"],
    [`${lineNum - 1} |`, lines[lineIndex - 1]],
    [`${lineNum} |`, locationLine],
    ["|", "^".padStart(columnNum)],
    [`${lineNum + 1} |`, lines[lineIndex + 1]]
  ]);
}
function printPrefixedLines(lines) {
  const existingLines = lines.filter(([_, line]) => line !== void 0);
  const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
  return existingLines.map(([prefix, line]) => prefix.padStart(padLen) + (line ? " " + line : "")).join("\n");
}
var init_printLocation = __esm({
  "../node_modules/graphql/language/printLocation.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    init_location();
  }
});

// ../node_modules/graphql/error/GraphQLError.mjs
function toNormalizedOptions(args) {
  const firstArg = args[0];
  if (firstArg == null || "kind" in firstArg || "length" in firstArg) {
    return {
      nodes: firstArg,
      source: args[1],
      positions: args[2],
      path: args[3],
      originalError: args[4],
      extensions: args[5]
    };
  }
  return firstArg;
}
function undefinedIfEmpty(array) {
  return array === void 0 || array.length === 0 ? void 0 : array;
}
var GraphQLError;
var init_GraphQLError = __esm({
  "../node_modules/graphql/error/GraphQLError.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    init_isObjectLike();
    init_location();
    init_printLocation();
    GraphQLError = class extends Error {
      /**
       * An array of `{ line, column }` locations within the source GraphQL document
       * which correspond to this error.
       *
       * Errors during validation often contain multiple locations, for example to
       * point out two things with the same name. Errors during execution include a
       * single location, the field which produced the error.
       *
       * Enumerable, and appears in the result of JSON.stringify().
       */
      /**
       * An array describing the JSON-path into the execution response which
       * corresponds to this error. Only included for errors during execution.
       *
       * Enumerable, and appears in the result of JSON.stringify().
       */
      /**
       * An array of GraphQL AST Nodes corresponding to this error.
       */
      /**
       * The source GraphQL document for the first location of this error.
       *
       * Note that if this Error represents more than one node, the source may not
       * represent nodes after the first node.
       */
      /**
       * An array of character offsets within the source GraphQL document
       * which correspond to this error.
       */
      /**
       * The original error thrown from a field resolver during execution.
       */
      /**
       * Extension fields to add to the formatted error.
       */
      /**
       * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
       */
      constructor(message, ...rawArgs) {
        var _this$nodes, _nodeLocations$, _ref;
        const { nodes, source, positions, path, originalError, extensions } = toNormalizedOptions(rawArgs);
        super(message);
        this.name = "GraphQLError";
        this.path = path !== null && path !== void 0 ? path : void 0;
        this.originalError = originalError !== null && originalError !== void 0 ? originalError : void 0;
        this.nodes = undefinedIfEmpty(
          Array.isArray(nodes) ? nodes : nodes ? [nodes] : void 0
        );
        const nodeLocations = undefinedIfEmpty(
          (_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node) => node.loc).filter((loc) => loc != null)
        );
        this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
        this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => loc.start);
        this.locations = positions && source ? positions.map((pos) => getLocation(source, pos)) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => getLocation(loc.source, loc.start));
        const originalExtensions = isObjectLike(
          originalError === null || originalError === void 0 ? void 0 : originalError.extensions
        ) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : void 0;
        this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : /* @__PURE__ */ Object.create(null);
        Object.defineProperties(this, {
          message: {
            writable: true,
            enumerable: true
          },
          name: {
            enumerable: false
          },
          nodes: {
            enumerable: false
          },
          source: {
            enumerable: false
          },
          positions: {
            enumerable: false
          },
          originalError: {
            enumerable: false
          }
        });
        if (originalError !== null && originalError !== void 0 && originalError.stack) {
          Object.defineProperty(this, "stack", {
            value: originalError.stack,
            writable: true,
            configurable: true
          });
        } else if (Error.captureStackTrace) {
          Error.captureStackTrace(this, GraphQLError);
        } else {
          Object.defineProperty(this, "stack", {
            value: Error().stack,
            writable: true,
            configurable: true
          });
        }
      }
      get [Symbol.toStringTag]() {
        return "GraphQLError";
      }
      toString() {
        let output = this.message;
        if (this.nodes) {
          for (const node of this.nodes) {
            if (node.loc) {
              output += "\n\n" + printLocation(node.loc);
            }
          }
        } else if (this.source && this.locations) {
          for (const location of this.locations) {
            output += "\n\n" + printSourceLocation(this.source, location);
          }
        }
        return output;
      }
      toJSON() {
        const formattedError = {
          message: this.message
        };
        if (this.locations != null) {
          formattedError.locations = this.locations;
        }
        if (this.path != null) {
          formattedError.path = this.path;
        }
        if (this.extensions != null && Object.keys(this.extensions).length > 0) {
          formattedError.extensions = this.extensions;
        }
        return formattedError;
      }
    };
  }
});

// ../node_modules/graphql/error/syntaxError.mjs
function syntaxError(source, position, description) {
  return new GraphQLError(`Syntax Error: ${description}`, {
    source,
    positions: [position]
  });
}
var init_syntaxError = __esm({
  "../node_modules/graphql/error/syntaxError.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    init_GraphQLError();
  }
});

// ../node_modules/graphql/language/ast.mjs
function isNode(maybeNode) {
  const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
  return typeof maybeKind === "string" && kindValues.has(maybeKind);
}
var Location, Token, QueryDocumentKeys, kindValues, OperationTypeNode;
var init_ast = __esm({
  "../node_modules/graphql/language/ast.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    Location = class {
      /**
       * The character offset at which this Node begins.
       */
      /**
       * The character offset at which this Node ends.
       */
      /**
       * The Token at which this Node begins.
       */
      /**
       * The Token at which this Node ends.
       */
      /**
       * The Source document the AST represents.
       */
      constructor(startToken, endToken, source) {
        this.start = startToken.start;
        this.end = endToken.end;
        this.startToken = startToken;
        this.endToken = endToken;
        this.source = source;
      }
      get [Symbol.toStringTag]() {
        return "Location";
      }
      toJSON() {
        return {
          start: this.start,
          end: this.end
        };
      }
    };
    Token = class {
      /**
       * The kind of Token.
       */
      /**
       * The character offset at which this Node begins.
       */
      /**
       * The character offset at which this Node ends.
       */
      /**
       * The 1-indexed line number on which this Token appears.
       */
      /**
       * The 1-indexed column number at which this Token begins.
       */
      /**
       * For non-punctuation tokens, represents the interpreted value of the token.
       *
       * Note: is undefined for punctuation tokens, but typed as string for
       * convenience in the parser.
       */
      /**
       * Tokens exist as nodes in a double-linked-list amongst all tokens
       * including ignored tokens. <SOF> is always the first node and <EOF>
       * the last.
       */
      constructor(kind, start, end, line, column, value) {
        this.kind = kind;
        this.start = start;
        this.end = end;
        this.line = line;
        this.column = column;
        this.value = value;
        this.prev = null;
        this.next = null;
      }
      get [Symbol.toStringTag]() {
        return "Token";
      }
      toJSON() {
        return {
          kind: this.kind,
          value: this.value,
          line: this.line,
          column: this.column
        };
      }
    };
    QueryDocumentKeys = {
      Name: [],
      Document: ["definitions"],
      OperationDefinition: [
        "name",
        "variableDefinitions",
        "directives",
        "selectionSet"
      ],
      VariableDefinition: ["variable", "type", "defaultValue", "directives"],
      Variable: ["name"],
      SelectionSet: ["selections"],
      Field: ["alias", "name", "arguments", "directives", "selectionSet"],
      Argument: ["name", "value"],
      FragmentSpread: ["name", "directives"],
      InlineFragment: ["typeCondition", "directives", "selectionSet"],
      FragmentDefinition: [
        "name",
        // Note: fragment variable definitions are deprecated and will removed in v17.0.0
        "variableDefinitions",
        "typeCondition",
        "directives",
        "selectionSet"
      ],
      IntValue: [],
      FloatValue: [],
      StringValue: [],
      BooleanValue: [],
      NullValue: [],
      EnumValue: [],
      ListValue: ["values"],
      ObjectValue: ["fields"],
      ObjectField: ["name", "value"],
      Directive: ["name", "arguments"],
      NamedType: ["name"],
      ListType: ["type"],
      NonNullType: ["type"],
      SchemaDefinition: ["description", "directives", "operationTypes"],
      OperationTypeDefinition: ["type"],
      ScalarTypeDefinition: ["description", "name", "directives"],
      ObjectTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
      ],
      FieldDefinition: ["description", "name", "arguments", "type", "directives"],
      InputValueDefinition: [
        "description",
        "name",
        "type",
        "defaultValue",
        "directives"
      ],
      InterfaceTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
      ],
      UnionTypeDefinition: ["description", "name", "directives", "types"],
      EnumTypeDefinition: ["description", "name", "directives", "values"],
      EnumValueDefinition: ["description", "name", "directives"],
      InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
      DirectiveDefinition: ["description", "name", "arguments", "locations"],
      SchemaExtension: ["directives", "operationTypes"],
      ScalarTypeExtension: ["name", "directives"],
      ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
      InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
      UnionTypeExtension: ["name", "directives", "types"],
      EnumTypeExtension: ["name", "directives", "values"],
      InputObjectTypeExtension: ["name", "directives", "fields"]
    };
    kindValues = new Set(Object.keys(QueryDocumentKeys));
    (function(OperationTypeNode2) {
      OperationTypeNode2["QUERY"] = "query";
      OperationTypeNode2["MUTATION"] = "mutation";
      OperationTypeNode2["SUBSCRIPTION"] = "subscription";
    })(OperationTypeNode || (OperationTypeNode = {}));
  }
});

// ../node_modules/graphql/language/directiveLocation.mjs
var DirectiveLocation;
var init_directiveLocation = __esm({
  "../node_modules/graphql/language/directiveLocation.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    (function(DirectiveLocation2) {
      DirectiveLocation2["QUERY"] = "QUERY";
      DirectiveLocation2["MUTATION"] = "MUTATION";
      DirectiveLocation2["SUBSCRIPTION"] = "SUBSCRIPTION";
      DirectiveLocation2["FIELD"] = "FIELD";
      DirectiveLocation2["FRAGMENT_DEFINITION"] = "FRAGMENT_DEFINITION";
      DirectiveLocation2["FRAGMENT_SPREAD"] = "FRAGMENT_SPREAD";
      DirectiveLocation2["INLINE_FRAGMENT"] = "INLINE_FRAGMENT";
      DirectiveLocation2["VARIABLE_DEFINITION"] = "VARIABLE_DEFINITION";
      DirectiveLocation2["SCHEMA"] = "SCHEMA";
      DirectiveLocation2["SCALAR"] = "SCALAR";
      DirectiveLocation2["OBJECT"] = "OBJECT";
      DirectiveLocation2["FIELD_DEFINITION"] = "FIELD_DEFINITION";
      DirectiveLocation2["ARGUMENT_DEFINITION"] = "ARGUMENT_DEFINITION";
      DirectiveLocation2["INTERFACE"] = "INTERFACE";
      DirectiveLocation2["UNION"] = "UNION";
      DirectiveLocation2["ENUM"] = "ENUM";
      DirectiveLocation2["ENUM_VALUE"] = "ENUM_VALUE";
      DirectiveLocation2["INPUT_OBJECT"] = "INPUT_OBJECT";
      DirectiveLocation2["INPUT_FIELD_DEFINITION"] = "INPUT_FIELD_DEFINITION";
    })(DirectiveLocation || (DirectiveLocation = {}));
  }
});

// ../node_modules/graphql/language/kinds.mjs
var Kind;
var init_kinds = __esm({
  "../node_modules/graphql/language/kinds.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    (function(Kind2) {
      Kind2["NAME"] = "Name";
      Kind2["DOCUMENT"] = "Document";
      Kind2["OPERATION_DEFINITION"] = "OperationDefinition";
      Kind2["VARIABLE_DEFINITION"] = "VariableDefinition";
      Kind2["SELECTION_SET"] = "SelectionSet";
      Kind2["FIELD"] = "Field";
      Kind2["ARGUMENT"] = "Argument";
      Kind2["FRAGMENT_SPREAD"] = "FragmentSpread";
      Kind2["INLINE_FRAGMENT"] = "InlineFragment";
      Kind2["FRAGMENT_DEFINITION"] = "FragmentDefinition";
      Kind2["VARIABLE"] = "Variable";
      Kind2["INT"] = "IntValue";
      Kind2["FLOAT"] = "FloatValue";
      Kind2["STRING"] = "StringValue";
      Kind2["BOOLEAN"] = "BooleanValue";
      Kind2["NULL"] = "NullValue";
      Kind2["ENUM"] = "EnumValue";
      Kind2["LIST"] = "ListValue";
      Kind2["OBJECT"] = "ObjectValue";
      Kind2["OBJECT_FIELD"] = "ObjectField";
      Kind2["DIRECTIVE"] = "Directive";
      Kind2["NAMED_TYPE"] = "NamedType";
      Kind2["LIST_TYPE"] = "ListType";
      Kind2["NON_NULL_TYPE"] = "NonNullType";
      Kind2["SCHEMA_DEFINITION"] = "SchemaDefinition";
      Kind2["OPERATION_TYPE_DEFINITION"] = "OperationTypeDefinition";
      Kind2["SCALAR_TYPE_DEFINITION"] = "ScalarTypeDefinition";
      Kind2["OBJECT_TYPE_DEFINITION"] = "ObjectTypeDefinition";
      Kind2["FIELD_DEFINITION"] = "FieldDefinition";
      Kind2["INPUT_VALUE_DEFINITION"] = "InputValueDefinition";
      Kind2["INTERFACE_TYPE_DEFINITION"] = "InterfaceTypeDefinition";
      Kind2["UNION_TYPE_DEFINITION"] = "UnionTypeDefinition";
      Kind2["ENUM_TYPE_DEFINITION"] = "EnumTypeDefinition";
      Kind2["ENUM_VALUE_DEFINITION"] = "EnumValueDefinition";
      Kind2["INPUT_OBJECT_TYPE_DEFINITION"] = "InputObjectTypeDefinition";
      Kind2["DIRECTIVE_DEFINITION"] = "DirectiveDefinition";
      Kind2["SCHEMA_EXTENSION"] = "SchemaExtension";
      Kind2["SCALAR_TYPE_EXTENSION"] = "ScalarTypeExtension";
      Kind2["OBJECT_TYPE_EXTENSION"] = "ObjectTypeExtension";
      Kind2["INTERFACE_TYPE_EXTENSION"] = "InterfaceTypeExtension";
      Kind2["UNION_TYPE_EXTENSION"] = "UnionTypeExtension";
      Kind2["ENUM_TYPE_EXTENSION"] = "EnumTypeExtension";
      Kind2["INPUT_OBJECT_TYPE_EXTENSION"] = "InputObjectTypeExtension";
    })(Kind || (Kind = {}));
  }
});

// ../node_modules/graphql/language/characterClasses.mjs
function isWhiteSpace(code) {
  return code === 9 || code === 32;
}
function isDigit(code) {
  return code >= 48 && code <= 57;
}
function isLetter(code) {
  return code >= 97 && code <= 122 || // A-Z
  code >= 65 && code <= 90;
}
function isNameStart(code) {
  return isLetter(code) || code === 95;
}
function isNameContinue(code) {
  return isLetter(code) || isDigit(code) || code === 95;
}
var init_characterClasses = __esm({
  "../node_modules/graphql/language/characterClasses.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// ../node_modules/graphql/language/blockString.mjs
function dedentBlockStringLines(lines) {
  var _firstNonEmptyLine2;
  let commonIndent = Number.MAX_SAFE_INTEGER;
  let firstNonEmptyLine = null;
  let lastNonEmptyLine = -1;
  for (let i = 0; i < lines.length; ++i) {
    var _firstNonEmptyLine;
    const line = lines[i];
    const indent2 = leadingWhitespace(line);
    if (indent2 === line.length) {
      continue;
    }
    firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
    lastNonEmptyLine = i;
    if (i !== 0 && indent2 < commonIndent) {
      commonIndent = indent2;
    }
  }
  return lines.map((line, i) => i === 0 ? line : line.slice(commonIndent)).slice(
    (_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0,
    lastNonEmptyLine + 1
  );
}
function leadingWhitespace(str) {
  let i = 0;
  while (i < str.length && isWhiteSpace(str.charCodeAt(i))) {
    ++i;
  }
  return i;
}
function printBlockString(value, options) {
  const escapedValue = value.replace(/"""/g, '\\"""');
  const lines = escapedValue.split(/\r\n|[\n\r]/g);
  const isSingleLine = lines.length === 1;
  const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line) => line.length === 0 || isWhiteSpace(line.charCodeAt(0)));
  const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""');
  const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
  const hasTrailingSlash = value.endsWith("\\");
  const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
  const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && // add leading and trailing new lines only if it improves readability
  (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
  let result = "";
  const skipLeadingNewLine = isSingleLine && isWhiteSpace(value.charCodeAt(0));
  if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
    result += "\n";
  }
  result += escapedValue;
  if (printAsMultipleLines || forceTrailingNewline) {
    result += "\n";
  }
  return '"""' + result + '"""';
}
var init_blockString = __esm({
  "../node_modules/graphql/language/blockString.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    init_characterClasses();
  }
});

// ../node_modules/graphql/language/tokenKind.mjs
var TokenKind;
var init_tokenKind = __esm({
  "../node_modules/graphql/language/tokenKind.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    (function(TokenKind2) {
      TokenKind2["SOF"] = "<SOF>";
      TokenKind2["EOF"] = "<EOF>";
      TokenKind2["BANG"] = "!";
      TokenKind2["DOLLAR"] = "$";
      TokenKind2["AMP"] = "&";
      TokenKind2["PAREN_L"] = "(";
      TokenKind2["PAREN_R"] = ")";
      TokenKind2["SPREAD"] = "...";
      TokenKind2["COLON"] = ":";
      TokenKind2["EQUALS"] = "=";
      TokenKind2["AT"] = "@";
      TokenKind2["BRACKET_L"] = "[";
      TokenKind2["BRACKET_R"] = "]";
      TokenKind2["BRACE_L"] = "{";
      TokenKind2["PIPE"] = "|";
      TokenKind2["BRACE_R"] = "}";
      TokenKind2["NAME"] = "Name";
      TokenKind2["INT"] = "Int";
      TokenKind2["FLOAT"] = "Float";
      TokenKind2["STRING"] = "String";
      TokenKind2["BLOCK_STRING"] = "BlockString";
      TokenKind2["COMMENT"] = "Comment";
    })(TokenKind || (TokenKind = {}));
  }
});

// ../node_modules/graphql/language/lexer.mjs
function isPunctuatorTokenKind(kind) {
  return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
}
function isUnicodeScalarValue(code) {
  return code >= 0 && code <= 55295 || code >= 57344 && code <= 1114111;
}
function isSupplementaryCodePoint(body, location) {
  return isLeadingSurrogate(body.charCodeAt(location)) && isTrailingSurrogate(body.charCodeAt(location + 1));
}
function isLeadingSurrogate(code) {
  return code >= 55296 && code <= 56319;
}
function isTrailingSurrogate(code) {
  return code >= 56320 && code <= 57343;
}
function printCodePointAt(lexer2, location) {
  const code = lexer2.source.body.codePointAt(location);
  if (code === void 0) {
    return TokenKind.EOF;
  } else if (code >= 32 && code <= 126) {
    const char = String.fromCodePoint(code);
    return char === '"' ? `'"'` : `"${char}"`;
  }
  return "U+" + code.toString(16).toUpperCase().padStart(4, "0");
}
function createToken(lexer2, kind, start, end, value) {
  const line = lexer2.line;
  const col = 1 + start - lexer2.lineStart;
  return new Token(kind, start, end, line, col, value);
}
function readNextToken(lexer2, start) {
  const body = lexer2.source.body;
  const bodyLength = body.length;
  let position = start;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    switch (code) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++position;
        continue;
      case 10:
        ++position;
        ++lexer2.line;
        lexer2.lineStart = position;
        continue;
      case 13:
        if (body.charCodeAt(position + 1) === 10) {
          position += 2;
        } else {
          ++position;
        }
        ++lexer2.line;
        lexer2.lineStart = position;
        continue;
      case 35:
        return readComment(lexer2, position);
      case 33:
        return createToken(lexer2, TokenKind.BANG, position, position + 1);
      case 36:
        return createToken(lexer2, TokenKind.DOLLAR, position, position + 1);
      case 38:
        return createToken(lexer2, TokenKind.AMP, position, position + 1);
      case 40:
        return createToken(lexer2, TokenKind.PAREN_L, position, position + 1);
      case 41:
        return createToken(lexer2, TokenKind.PAREN_R, position, position + 1);
      case 46:
        if (body.charCodeAt(position + 1) === 46 && body.charCodeAt(position + 2) === 46) {
          return createToken(lexer2, TokenKind.SPREAD, position, position + 3);
        }
        break;
      case 58:
        return createToken(lexer2, TokenKind.COLON, position, position + 1);
      case 61:
        return createToken(lexer2, TokenKind.EQUALS, position, position + 1);
      case 64:
        return createToken(lexer2, TokenKind.AT, position, position + 1);
      case 91:
        return createToken(lexer2, TokenKind.BRACKET_L, position, position + 1);
      case 93:
        return createToken(lexer2, TokenKind.BRACKET_R, position, position + 1);
      case 123:
        return createToken(lexer2, TokenKind.BRACE_L, position, position + 1);
      case 124:
        return createToken(lexer2, TokenKind.PIPE, position, position + 1);
      case 125:
        return createToken(lexer2, TokenKind.BRACE_R, position, position + 1);
      case 34:
        if (body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
          return readBlockString(lexer2, position);
        }
        return readString(lexer2, position);
    }
    if (isDigit(code) || code === 45) {
      return readNumber(lexer2, position, code);
    }
    if (isNameStart(code)) {
      return readName(lexer2, position);
    }
    throw syntaxError(
      lexer2.source,
      position,
      code === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? `Unexpected character: ${printCodePointAt(lexer2, position)}.` : `Invalid character: ${printCodePointAt(lexer2, position)}.`
    );
  }
  return createToken(lexer2, TokenKind.EOF, bodyLength, bodyLength);
}
function readComment(lexer2, start) {
  const body = lexer2.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 10 || code === 13) {
      break;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      break;
    }
  }
  return createToken(
    lexer2,
    TokenKind.COMMENT,
    start,
    position,
    body.slice(start + 1, position)
  );
}
function readNumber(lexer2, start, firstCode) {
  const body = lexer2.source.body;
  let position = start;
  let code = firstCode;
  let isFloat = false;
  if (code === 45) {
    code = body.charCodeAt(++position);
  }
  if (code === 48) {
    code = body.charCodeAt(++position);
    if (isDigit(code)) {
      throw syntaxError(
        lexer2.source,
        position,
        `Invalid number, unexpected digit after 0: ${printCodePointAt(
          lexer2,
          position
        )}.`
      );
    }
  } else {
    position = readDigits(lexer2, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 46) {
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(lexer2, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 69 || code === 101) {
    isFloat = true;
    code = body.charCodeAt(++position);
    if (code === 43 || code === 45) {
      code = body.charCodeAt(++position);
    }
    position = readDigits(lexer2, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 46 || isNameStart(code)) {
    throw syntaxError(
      lexer2.source,
      position,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer2,
        position
      )}.`
    );
  }
  return createToken(
    lexer2,
    isFloat ? TokenKind.FLOAT : TokenKind.INT,
    start,
    position,
    body.slice(start, position)
  );
}
function readDigits(lexer2, start, firstCode) {
  if (!isDigit(firstCode)) {
    throw syntaxError(
      lexer2.source,
      start,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer2,
        start
      )}.`
    );
  }
  const body = lexer2.source.body;
  let position = start + 1;
  while (isDigit(body.charCodeAt(position))) {
    ++position;
  }
  return position;
}
function readString(lexer2, start) {
  const body = lexer2.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  let chunkStart = position;
  let value = "";
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return createToken(lexer2, TokenKind.STRING, start, position + 1, value);
    }
    if (code === 92) {
      value += body.slice(chunkStart, position);
      const escape = body.charCodeAt(position + 1) === 117 ? body.charCodeAt(position + 2) === 123 ? readEscapedUnicodeVariableWidth(lexer2, position) : readEscapedUnicodeFixedWidth(lexer2, position) : readEscapedCharacter(lexer2, position);
      value += escape.value;
      position += escape.size;
      chunkStart = position;
      continue;
    }
    if (code === 10 || code === 13) {
      break;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer2.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer2,
          position
        )}.`
      );
    }
  }
  throw syntaxError(lexer2.source, position, "Unterminated string.");
}
function readEscapedUnicodeVariableWidth(lexer2, position) {
  const body = lexer2.source.body;
  let point = 0;
  let size = 3;
  while (size < 12) {
    const code = body.charCodeAt(position + size++);
    if (code === 125) {
      if (size < 5 || !isUnicodeScalarValue(point)) {
        break;
      }
      return {
        value: String.fromCodePoint(point),
        size
      };
    }
    point = point << 4 | readHexDigit(code);
    if (point < 0) {
      break;
    }
  }
  throw syntaxError(
    lexer2.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(
      position,
      position + size
    )}".`
  );
}
function readEscapedUnicodeFixedWidth(lexer2, position) {
  const body = lexer2.source.body;
  const code = read16BitHexCode(body, position + 2);
  if (isUnicodeScalarValue(code)) {
    return {
      value: String.fromCodePoint(code),
      size: 6
    };
  }
  if (isLeadingSurrogate(code)) {
    if (body.charCodeAt(position + 6) === 92 && body.charCodeAt(position + 7) === 117) {
      const trailingCode = read16BitHexCode(body, position + 8);
      if (isTrailingSurrogate(trailingCode)) {
        return {
          value: String.fromCodePoint(code, trailingCode),
          size: 12
        };
      }
    }
  }
  throw syntaxError(
    lexer2.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`
  );
}
function read16BitHexCode(body, position) {
  return readHexDigit(body.charCodeAt(position)) << 12 | readHexDigit(body.charCodeAt(position + 1)) << 8 | readHexDigit(body.charCodeAt(position + 2)) << 4 | readHexDigit(body.charCodeAt(position + 3));
}
function readHexDigit(code) {
  return code >= 48 && code <= 57 ? code - 48 : code >= 65 && code <= 70 ? code - 55 : code >= 97 && code <= 102 ? code - 87 : -1;
}
function readEscapedCharacter(lexer2, position) {
  const body = lexer2.source.body;
  const code = body.charCodeAt(position + 1);
  switch (code) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: "\n",
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw syntaxError(
    lexer2.source,
    position,
    `Invalid character escape sequence: "${body.slice(
      position,
      position + 2
    )}".`
  );
}
function readBlockString(lexer2, start) {
  const body = lexer2.source.body;
  const bodyLength = body.length;
  let lineStart = lexer2.lineStart;
  let position = start + 3;
  let chunkStart = position;
  let currentLine = "";
  const blockLines = [];
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      const token = createToken(
        lexer2,
        TokenKind.BLOCK_STRING,
        start,
        position + 3,
        // Return a string of the lines joined with U+000A.
        dedentBlockStringLines(blockLines).join("\n")
      );
      lexer2.line += blockLines.length - 1;
      lexer2.lineStart = lineStart;
      return token;
    }
    if (code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      currentLine += body.slice(chunkStart, position);
      chunkStart = position + 1;
      position += 4;
      continue;
    }
    if (code === 10 || code === 13) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      if (code === 13 && body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }
      currentLine = "";
      chunkStart = position;
      lineStart = position;
      continue;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer2.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer2,
          position
        )}.`
      );
    }
  }
  throw syntaxError(lexer2.source, position, "Unterminated string.");
}
function readName(lexer2, start) {
  const body = lexer2.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (isNameContinue(code)) {
      ++position;
    } else {
      break;
    }
  }
  return createToken(
    lexer2,
    TokenKind.NAME,
    start,
    position,
    body.slice(start, position)
  );
}
var Lexer;
var init_lexer = __esm({
  "../node_modules/graphql/language/lexer.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    init_syntaxError();
    init_ast();
    init_blockString();
    init_characterClasses();
    init_tokenKind();
    Lexer = class {
      /**
       * The previously focused non-ignored token.
       */
      /**
       * The currently focused non-ignored token.
       */
      /**
       * The (1-indexed) line containing the current token.
       */
      /**
       * The character offset at which the current line begins.
       */
      constructor(source) {
        const startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0);
        this.source = source;
        this.lastToken = startOfFileToken;
        this.token = startOfFileToken;
        this.line = 1;
        this.lineStart = 0;
      }
      get [Symbol.toStringTag]() {
        return "Lexer";
      }
      /**
       * Advances the token stream to the next non-ignored token.
       */
      advance() {
        this.lastToken = this.token;
        const token = this.token = this.lookahead();
        return token;
      }
      /**
       * Looks ahead and returns the next non-ignored token, but does not change
       * the state of Lexer.
       */
      lookahead() {
        let token = this.token;
        if (token.kind !== TokenKind.EOF) {
          do {
            if (token.next) {
              token = token.next;
            } else {
              const nextToken = readNextToken(this, token.end);
              token.next = nextToken;
              nextToken.prev = token;
              token = nextToken;
            }
          } while (token.kind === TokenKind.COMMENT);
        }
        return token;
      }
    };
  }
});

// ../node_modules/graphql/jsutils/inspect.mjs
function inspect(value) {
  return formatValue(value, []);
}
function formatValue(value, seenValues) {
  switch (typeof value) {
    case "string":
      return JSON.stringify(value);
    case "function":
      return value.name ? `[function ${value.name}]` : "[function]";
    case "object":
      return formatObjectValue(value, seenValues);
    default:
      return String(value);
  }
}
function formatObjectValue(value, previouslySeenValues) {
  if (value === null) {
    return "null";
  }
  if (previouslySeenValues.includes(value)) {
    return "[Circular]";
  }
  const seenValues = [...previouslySeenValues, value];
  if (isJSONable(value)) {
    const jsonValue = value.toJSON();
    if (jsonValue !== value) {
      return typeof jsonValue === "string" ? jsonValue : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }
  return formatObject(value, seenValues);
}
function isJSONable(value) {
  return typeof value.toJSON === "function";
}
function formatObject(object, seenValues) {
  const entries = Object.entries(object);
  if (entries.length === 0) {
    return "{}";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[" + getObjectTag(object) + "]";
  }
  const properties = entries.map(
    ([key, value]) => key + ": " + formatValue(value, seenValues)
  );
  return "{ " + properties.join(", ") + " }";
}
function formatArray(array, seenValues) {
  if (array.length === 0) {
    return "[]";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[Array]";
  }
  const len = Math.min(MAX_ARRAY_LENGTH, array.length);
  const remaining = array.length - len;
  const items = [];
  for (let i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }
  if (remaining === 1) {
    items.push("... 1 more item");
  } else if (remaining > 1) {
    items.push(`... ${remaining} more items`);
  }
  return "[" + items.join(", ") + "]";
}
function getObjectTag(object) {
  const tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
  if (tag === "Object" && typeof object.constructor === "function") {
    const name = object.constructor.name;
    if (typeof name === "string" && name !== "") {
      return name;
    }
  }
  return tag;
}
var MAX_ARRAY_LENGTH, MAX_RECURSIVE_DEPTH;
var init_inspect = __esm({
  "../node_modules/graphql/jsutils/inspect.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    MAX_ARRAY_LENGTH = 10;
    MAX_RECURSIVE_DEPTH = 2;
  }
});

// ../node_modules/graphql/jsutils/instanceOf.mjs
var instanceOf;
var init_instanceOf = __esm({
  "../node_modules/graphql/jsutils/instanceOf.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    init_inspect();
    instanceOf = /* c8 ignore next 6 */
    // FIXME: https://github.com/graphql/graphql-js/issues/2317
    globalThis.process && globalThis.process.env.NODE_ENV === "production" ? function instanceOf2(value, constructor) {
      return value instanceof constructor;
    } : function instanceOf3(value, constructor) {
      if (value instanceof constructor) {
        return true;
      }
      if (typeof value === "object" && value !== null) {
        var _value$constructor;
        const className = constructor.prototype[Symbol.toStringTag];
        const valueClassName = (
          // We still need to support constructor's name to detect conflicts with older versions of this library.
          Symbol.toStringTag in value ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name
        );
        if (className === valueClassName) {
          const stringifiedValue = inspect(value);
          throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
        }
      }
      return false;
    };
  }
});

// ../node_modules/graphql/language/source.mjs
function isSource(source) {
  return instanceOf(source, Source);
}
var Source;
var init_source = __esm({
  "../node_modules/graphql/language/source.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    init_devAssert();
    init_inspect();
    init_instanceOf();
    Source = class {
      constructor(body, name = "GraphQL request", locationOffset = {
        line: 1,
        column: 1
      }) {
        typeof body === "string" || devAssert(false, `Body must be a string. Received: ${inspect(body)}.`);
        this.body = body;
        this.name = name;
        this.locationOffset = locationOffset;
        this.locationOffset.line > 0 || devAssert(
          false,
          "line in locationOffset is 1-indexed and must be positive."
        );
        this.locationOffset.column > 0 || devAssert(
          false,
          "column in locationOffset is 1-indexed and must be positive."
        );
      }
      get [Symbol.toStringTag]() {
        return "Source";
      }
    };
  }
});

// ../node_modules/graphql/language/parser.mjs
function parse(source, options) {
  const parser = new Parser(source, options);
  return parser.parseDocument();
}
function getTokenDesc(token) {
  const value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : "");
}
function getTokenKindDesc(kind) {
  return isPunctuatorTokenKind(kind) ? `"${kind}"` : kind;
}
var Parser;
var init_parser = __esm({
  "../node_modules/graphql/language/parser.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    init_syntaxError();
    init_ast();
    init_directiveLocation();
    init_kinds();
    init_lexer();
    init_source();
    init_tokenKind();
    Parser = class {
      constructor(source, options = {}) {
        const sourceObj = isSource(source) ? source : new Source(source);
        this._lexer = new Lexer(sourceObj);
        this._options = options;
        this._tokenCounter = 0;
      }
      /**
       * Converts a name lex token into a name parse node.
       */
      parseName() {
        const token = this.expectToken(TokenKind.NAME);
        return this.node(token, {
          kind: Kind.NAME,
          value: token.value
        });
      }
      // Implements the parsing rules in the Document section.
      /**
       * Document : Definition+
       */
      parseDocument() {
        return this.node(this._lexer.token, {
          kind: Kind.DOCUMENT,
          definitions: this.many(
            TokenKind.SOF,
            this.parseDefinition,
            TokenKind.EOF
          )
        });
      }
      /**
       * Definition :
       *   - ExecutableDefinition
       *   - TypeSystemDefinition
       *   - TypeSystemExtension
       *
       * ExecutableDefinition :
       *   - OperationDefinition
       *   - FragmentDefinition
       *
       * TypeSystemDefinition :
       *   - SchemaDefinition
       *   - TypeDefinition
       *   - DirectiveDefinition
       *
       * TypeDefinition :
       *   - ScalarTypeDefinition
       *   - ObjectTypeDefinition
       *   - InterfaceTypeDefinition
       *   - UnionTypeDefinition
       *   - EnumTypeDefinition
       *   - InputObjectTypeDefinition
       */
      parseDefinition() {
        if (this.peek(TokenKind.BRACE_L)) {
          return this.parseOperationDefinition();
        }
        const hasDescription = this.peekDescription();
        const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
        if (keywordToken.kind === TokenKind.NAME) {
          switch (keywordToken.value) {
            case "schema":
              return this.parseSchemaDefinition();
            case "scalar":
              return this.parseScalarTypeDefinition();
            case "type":
              return this.parseObjectTypeDefinition();
            case "interface":
              return this.parseInterfaceTypeDefinition();
            case "union":
              return this.parseUnionTypeDefinition();
            case "enum":
              return this.parseEnumTypeDefinition();
            case "input":
              return this.parseInputObjectTypeDefinition();
            case "directive":
              return this.parseDirectiveDefinition();
          }
          if (hasDescription) {
            throw syntaxError(
              this._lexer.source,
              this._lexer.token.start,
              "Unexpected description, descriptions are supported only on type definitions."
            );
          }
          switch (keywordToken.value) {
            case "query":
            case "mutation":
            case "subscription":
              return this.parseOperationDefinition();
            case "fragment":
              return this.parseFragmentDefinition();
            case "extend":
              return this.parseTypeSystemExtension();
          }
        }
        throw this.unexpected(keywordToken);
      }
      // Implements the parsing rules in the Operations section.
      /**
       * OperationDefinition :
       *  - SelectionSet
       *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
       */
      parseOperationDefinition() {
        const start = this._lexer.token;
        if (this.peek(TokenKind.BRACE_L)) {
          return this.node(start, {
            kind: Kind.OPERATION_DEFINITION,
            operation: OperationTypeNode.QUERY,
            name: void 0,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet()
          });
        }
        const operation = this.parseOperationType();
        let name;
        if (this.peek(TokenKind.NAME)) {
          name = this.parseName();
        }
        return this.node(start, {
          kind: Kind.OPERATION_DEFINITION,
          operation,
          name,
          variableDefinitions: this.parseVariableDefinitions(),
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet()
        });
      }
      /**
       * OperationType : one of query mutation subscription
       */
      parseOperationType() {
        const operationToken = this.expectToken(TokenKind.NAME);
        switch (operationToken.value) {
          case "query":
            return OperationTypeNode.QUERY;
          case "mutation":
            return OperationTypeNode.MUTATION;
          case "subscription":
            return OperationTypeNode.SUBSCRIPTION;
        }
        throw this.unexpected(operationToken);
      }
      /**
       * VariableDefinitions : ( VariableDefinition+ )
       */
      parseVariableDefinitions() {
        return this.optionalMany(
          TokenKind.PAREN_L,
          this.parseVariableDefinition,
          TokenKind.PAREN_R
        );
      }
      /**
       * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
       */
      parseVariableDefinition() {
        return this.node(this._lexer.token, {
          kind: Kind.VARIABLE_DEFINITION,
          variable: this.parseVariable(),
          type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
          defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseConstValueLiteral() : void 0,
          directives: this.parseConstDirectives()
        });
      }
      /**
       * Variable : $ Name
       */
      parseVariable() {
        const start = this._lexer.token;
        this.expectToken(TokenKind.DOLLAR);
        return this.node(start, {
          kind: Kind.VARIABLE,
          name: this.parseName()
        });
      }
      /**
       * ```
       * SelectionSet : { Selection+ }
       * ```
       */
      parseSelectionSet() {
        return this.node(this._lexer.token, {
          kind: Kind.SELECTION_SET,
          selections: this.many(
            TokenKind.BRACE_L,
            this.parseSelection,
            TokenKind.BRACE_R
          )
        });
      }
      /**
       * Selection :
       *   - Field
       *   - FragmentSpread
       *   - InlineFragment
       */
      parseSelection() {
        return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
      }
      /**
       * Field : Alias? Name Arguments? Directives? SelectionSet?
       *
       * Alias : Name :
       */
      parseField() {
        const start = this._lexer.token;
        const nameOrAlias = this.parseName();
        let alias;
        let name;
        if (this.expectOptionalToken(TokenKind.COLON)) {
          alias = nameOrAlias;
          name = this.parseName();
        } else {
          name = nameOrAlias;
        }
        return this.node(start, {
          kind: Kind.FIELD,
          alias,
          name,
          arguments: this.parseArguments(false),
          directives: this.parseDirectives(false),
          selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0
        });
      }
      /**
       * Arguments[Const] : ( Argument[?Const]+ )
       */
      parseArguments(isConst) {
        const item = isConst ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
      }
      /**
       * Argument[Const] : Name : Value[?Const]
       */
      parseArgument(isConst = false) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(TokenKind.COLON);
        return this.node(start, {
          kind: Kind.ARGUMENT,
          name,
          value: this.parseValueLiteral(isConst)
        });
      }
      parseConstArgument() {
        return this.parseArgument(true);
      }
      // Implements the parsing rules in the Fragments section.
      /**
       * Corresponds to both FragmentSpread and InlineFragment in the spec.
       *
       * FragmentSpread : ... FragmentName Directives?
       *
       * InlineFragment : ... TypeCondition? Directives? SelectionSet
       */
      parseFragment() {
        const start = this._lexer.token;
        this.expectToken(TokenKind.SPREAD);
        const hasTypeCondition = this.expectOptionalKeyword("on");
        if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
          return this.node(start, {
            kind: Kind.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(false)
          });
        }
        return this.node(start, {
          kind: Kind.INLINE_FRAGMENT,
          typeCondition: hasTypeCondition ? this.parseNamedType() : void 0,
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet()
        });
      }
      /**
       * FragmentDefinition :
       *   - fragment FragmentName on TypeCondition Directives? SelectionSet
       *
       * TypeCondition : NamedType
       */
      parseFragmentDefinition() {
        const start = this._lexer.token;
        this.expectKeyword("fragment");
        if (this._options.allowLegacyFragmentVariables === true) {
          return this.node(start, {
            kind: Kind.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
          });
        }
        return this.node(start, {
          kind: Kind.FRAGMENT_DEFINITION,
          name: this.parseFragmentName(),
          typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet()
        });
      }
      /**
       * FragmentName : Name but not `on`
       */
      parseFragmentName() {
        if (this._lexer.token.value === "on") {
          throw this.unexpected();
        }
        return this.parseName();
      }
      // Implements the parsing rules in the Values section.
      /**
       * Value[Const] :
       *   - [~Const] Variable
       *   - IntValue
       *   - FloatValue
       *   - StringValue
       *   - BooleanValue
       *   - NullValue
       *   - EnumValue
       *   - ListValue[?Const]
       *   - ObjectValue[?Const]
       *
       * BooleanValue : one of `true` `false`
       *
       * NullValue : `null`
       *
       * EnumValue : Name but not `true`, `false` or `null`
       */
      parseValueLiteral(isConst) {
        const token = this._lexer.token;
        switch (token.kind) {
          case TokenKind.BRACKET_L:
            return this.parseList(isConst);
          case TokenKind.BRACE_L:
            return this.parseObject(isConst);
          case TokenKind.INT:
            this.advanceLexer();
            return this.node(token, {
              kind: Kind.INT,
              value: token.value
            });
          case TokenKind.FLOAT:
            this.advanceLexer();
            return this.node(token, {
              kind: Kind.FLOAT,
              value: token.value
            });
          case TokenKind.STRING:
          case TokenKind.BLOCK_STRING:
            return this.parseStringLiteral();
          case TokenKind.NAME:
            this.advanceLexer();
            switch (token.value) {
              case "true":
                return this.node(token, {
                  kind: Kind.BOOLEAN,
                  value: true
                });
              case "false":
                return this.node(token, {
                  kind: Kind.BOOLEAN,
                  value: false
                });
              case "null":
                return this.node(token, {
                  kind: Kind.NULL
                });
              default:
                return this.node(token, {
                  kind: Kind.ENUM,
                  value: token.value
                });
            }
          case TokenKind.DOLLAR:
            if (isConst) {
              this.expectToken(TokenKind.DOLLAR);
              if (this._lexer.token.kind === TokenKind.NAME) {
                const varName = this._lexer.token.value;
                throw syntaxError(
                  this._lexer.source,
                  token.start,
                  `Unexpected variable "$${varName}" in constant value.`
                );
              } else {
                throw this.unexpected(token);
              }
            }
            return this.parseVariable();
          default:
            throw this.unexpected();
        }
      }
      parseConstValueLiteral() {
        return this.parseValueLiteral(true);
      }
      parseStringLiteral() {
        const token = this._lexer.token;
        this.advanceLexer();
        return this.node(token, {
          kind: Kind.STRING,
          value: token.value,
          block: token.kind === TokenKind.BLOCK_STRING
        });
      }
      /**
       * ListValue[Const] :
       *   - [ ]
       *   - [ Value[?Const]+ ]
       */
      parseList(isConst) {
        const item = () => this.parseValueLiteral(isConst);
        return this.node(this._lexer.token, {
          kind: Kind.LIST,
          values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R)
        });
      }
      /**
       * ```
       * ObjectValue[Const] :
       *   - { }
       *   - { ObjectField[?Const]+ }
       * ```
       */
      parseObject(isConst) {
        const item = () => this.parseObjectField(isConst);
        return this.node(this._lexer.token, {
          kind: Kind.OBJECT,
          fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R)
        });
      }
      /**
       * ObjectField[Const] : Name : Value[?Const]
       */
      parseObjectField(isConst) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(TokenKind.COLON);
        return this.node(start, {
          kind: Kind.OBJECT_FIELD,
          name,
          value: this.parseValueLiteral(isConst)
        });
      }
      // Implements the parsing rules in the Directives section.
      /**
       * Directives[Const] : Directive[?Const]+
       */
      parseDirectives(isConst) {
        const directives = [];
        while (this.peek(TokenKind.AT)) {
          directives.push(this.parseDirective(isConst));
        }
        return directives;
      }
      parseConstDirectives() {
        return this.parseDirectives(true);
      }
      /**
       * ```
       * Directive[Const] : @ Name Arguments[?Const]?
       * ```
       */
      parseDirective(isConst) {
        const start = this._lexer.token;
        this.expectToken(TokenKind.AT);
        return this.node(start, {
          kind: Kind.DIRECTIVE,
          name: this.parseName(),
          arguments: this.parseArguments(isConst)
        });
      }
      // Implements the parsing rules in the Types section.
      /**
       * Type :
       *   - NamedType
       *   - ListType
       *   - NonNullType
       */
      parseTypeReference() {
        const start = this._lexer.token;
        let type;
        if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
          const innerType = this.parseTypeReference();
          this.expectToken(TokenKind.BRACKET_R);
          type = this.node(start, {
            kind: Kind.LIST_TYPE,
            type: innerType
          });
        } else {
          type = this.parseNamedType();
        }
        if (this.expectOptionalToken(TokenKind.BANG)) {
          return this.node(start, {
            kind: Kind.NON_NULL_TYPE,
            type
          });
        }
        return type;
      }
      /**
       * NamedType : Name
       */
      parseNamedType() {
        return this.node(this._lexer.token, {
          kind: Kind.NAMED_TYPE,
          name: this.parseName()
        });
      }
      // Implements the parsing rules in the Type Definition section.
      peekDescription() {
        return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
      }
      /**
       * Description : StringValue
       */
      parseDescription() {
        if (this.peekDescription()) {
          return this.parseStringLiteral();
        }
      }
      /**
       * ```
       * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
       * ```
       */
      parseSchemaDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("schema");
        const directives = this.parseConstDirectives();
        const operationTypes = this.many(
          TokenKind.BRACE_L,
          this.parseOperationTypeDefinition,
          TokenKind.BRACE_R
        );
        return this.node(start, {
          kind: Kind.SCHEMA_DEFINITION,
          description,
          directives,
          operationTypes
        });
      }
      /**
       * OperationTypeDefinition : OperationType : NamedType
       */
      parseOperationTypeDefinition() {
        const start = this._lexer.token;
        const operation = this.parseOperationType();
        this.expectToken(TokenKind.COLON);
        const type = this.parseNamedType();
        return this.node(start, {
          kind: Kind.OPERATION_TYPE_DEFINITION,
          operation,
          type
        });
      }
      /**
       * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
       */
      parseScalarTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("scalar");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
          kind: Kind.SCALAR_TYPE_DEFINITION,
          description,
          name,
          directives
        });
      }
      /**
       * ObjectTypeDefinition :
       *   Description?
       *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
       */
      parseObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("type");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
          kind: Kind.OBJECT_TYPE_DEFINITION,
          description,
          name,
          interfaces,
          directives,
          fields
        });
      }
      /**
       * ImplementsInterfaces :
       *   - implements `&`? NamedType
       *   - ImplementsInterfaces & NamedType
       */
      parseImplementsInterfaces() {
        return this.expectOptionalKeyword("implements") ? this.delimitedMany(TokenKind.AMP, this.parseNamedType) : [];
      }
      /**
       * ```
       * FieldsDefinition : { FieldDefinition+ }
       * ```
       */
      parseFieldsDefinition() {
        return this.optionalMany(
          TokenKind.BRACE_L,
          this.parseFieldDefinition,
          TokenKind.BRACE_R
        );
      }
      /**
       * FieldDefinition :
       *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
       */
      parseFieldDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        this.expectToken(TokenKind.COLON);
        const type = this.parseTypeReference();
        const directives = this.parseConstDirectives();
        return this.node(start, {
          kind: Kind.FIELD_DEFINITION,
          description,
          name,
          arguments: args,
          type,
          directives
        });
      }
      /**
       * ArgumentsDefinition : ( InputValueDefinition+ )
       */
      parseArgumentDefs() {
        return this.optionalMany(
          TokenKind.PAREN_L,
          this.parseInputValueDef,
          TokenKind.PAREN_R
        );
      }
      /**
       * InputValueDefinition :
       *   - Description? Name : Type DefaultValue? Directives[Const]?
       */
      parseInputValueDef() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        this.expectToken(TokenKind.COLON);
        const type = this.parseTypeReference();
        let defaultValue;
        if (this.expectOptionalToken(TokenKind.EQUALS)) {
          defaultValue = this.parseConstValueLiteral();
        }
        const directives = this.parseConstDirectives();
        return this.node(start, {
          kind: Kind.INPUT_VALUE_DEFINITION,
          description,
          name,
          type,
          defaultValue,
          directives
        });
      }
      /**
       * InterfaceTypeDefinition :
       *   - Description? interface Name Directives[Const]? FieldsDefinition?
       */
      parseInterfaceTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("interface");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
          kind: Kind.INTERFACE_TYPE_DEFINITION,
          description,
          name,
          interfaces,
          directives,
          fields
        });
      }
      /**
       * UnionTypeDefinition :
       *   - Description? union Name Directives[Const]? UnionMemberTypes?
       */
      parseUnionTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("union");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        return this.node(start, {
          kind: Kind.UNION_TYPE_DEFINITION,
          description,
          name,
          directives,
          types
        });
      }
      /**
       * UnionMemberTypes :
       *   - = `|`? NamedType
       *   - UnionMemberTypes | NamedType
       */
      parseUnionMemberTypes() {
        return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
      }
      /**
       * EnumTypeDefinition :
       *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
       */
      parseEnumTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("enum");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        return this.node(start, {
          kind: Kind.ENUM_TYPE_DEFINITION,
          description,
          name,
          directives,
          values
        });
      }
      /**
       * ```
       * EnumValuesDefinition : { EnumValueDefinition+ }
       * ```
       */
      parseEnumValuesDefinition() {
        return this.optionalMany(
          TokenKind.BRACE_L,
          this.parseEnumValueDefinition,
          TokenKind.BRACE_R
        );
      }
      /**
       * EnumValueDefinition : Description? EnumValue Directives[Const]?
       */
      parseEnumValueDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseEnumValueName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
          kind: Kind.ENUM_VALUE_DEFINITION,
          description,
          name,
          directives
        });
      }
      /**
       * EnumValue : Name but not `true`, `false` or `null`
       */
      parseEnumValueName() {
        if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") {
          throw syntaxError(
            this._lexer.source,
            this._lexer.token.start,
            `${getTokenDesc(
              this._lexer.token
            )} is reserved and cannot be used for an enum value.`
          );
        }
        return this.parseName();
      }
      /**
       * InputObjectTypeDefinition :
       *   - Description? input Name Directives[Const]? InputFieldsDefinition?
       */
      parseInputObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("input");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        return this.node(start, {
          kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
          description,
          name,
          directives,
          fields
        });
      }
      /**
       * ```
       * InputFieldsDefinition : { InputValueDefinition+ }
       * ```
       */
      parseInputFieldsDefinition() {
        return this.optionalMany(
          TokenKind.BRACE_L,
          this.parseInputValueDef,
          TokenKind.BRACE_R
        );
      }
      /**
       * TypeSystemExtension :
       *   - SchemaExtension
       *   - TypeExtension
       *
       * TypeExtension :
       *   - ScalarTypeExtension
       *   - ObjectTypeExtension
       *   - InterfaceTypeExtension
       *   - UnionTypeExtension
       *   - EnumTypeExtension
       *   - InputObjectTypeDefinition
       */
      parseTypeSystemExtension() {
        const keywordToken = this._lexer.lookahead();
        if (keywordToken.kind === TokenKind.NAME) {
          switch (keywordToken.value) {
            case "schema":
              return this.parseSchemaExtension();
            case "scalar":
              return this.parseScalarTypeExtension();
            case "type":
              return this.parseObjectTypeExtension();
            case "interface":
              return this.parseInterfaceTypeExtension();
            case "union":
              return this.parseUnionTypeExtension();
            case "enum":
              return this.parseEnumTypeExtension();
            case "input":
              return this.parseInputObjectTypeExtension();
          }
        }
        throw this.unexpected(keywordToken);
      }
      /**
       * ```
       * SchemaExtension :
       *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
       *  - extend schema Directives[Const]
       * ```
       */
      parseSchemaExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("schema");
        const directives = this.parseConstDirectives();
        const operationTypes = this.optionalMany(
          TokenKind.BRACE_L,
          this.parseOperationTypeDefinition,
          TokenKind.BRACE_R
        );
        if (directives.length === 0 && operationTypes.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.SCHEMA_EXTENSION,
          directives,
          operationTypes
        });
      }
      /**
       * ScalarTypeExtension :
       *   - extend scalar Name Directives[Const]
       */
      parseScalarTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("scalar");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        if (directives.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.SCALAR_TYPE_EXTENSION,
          name,
          directives
        });
      }
      /**
       * ObjectTypeExtension :
       *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
       *  - extend type Name ImplementsInterfaces? Directives[Const]
       *  - extend type Name ImplementsInterfaces
       */
      parseObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("type");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.OBJECT_TYPE_EXTENSION,
          name,
          interfaces,
          directives,
          fields
        });
      }
      /**
       * InterfaceTypeExtension :
       *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
       *  - extend interface Name ImplementsInterfaces? Directives[Const]
       *  - extend interface Name ImplementsInterfaces
       */
      parseInterfaceTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("interface");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.INTERFACE_TYPE_EXTENSION,
          name,
          interfaces,
          directives,
          fields
        });
      }
      /**
       * UnionTypeExtension :
       *   - extend union Name Directives[Const]? UnionMemberTypes
       *   - extend union Name Directives[Const]
       */
      parseUnionTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("union");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        if (directives.length === 0 && types.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.UNION_TYPE_EXTENSION,
          name,
          directives,
          types
        });
      }
      /**
       * EnumTypeExtension :
       *   - extend enum Name Directives[Const]? EnumValuesDefinition
       *   - extend enum Name Directives[Const]
       */
      parseEnumTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("enum");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        if (directives.length === 0 && values.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.ENUM_TYPE_EXTENSION,
          name,
          directives,
          values
        });
      }
      /**
       * InputObjectTypeExtension :
       *   - extend input Name Directives[Const]? InputFieldsDefinition
       *   - extend input Name Directives[Const]
       */
      parseInputObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("input");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        if (directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
          name,
          directives,
          fields
        });
      }
      /**
       * ```
       * DirectiveDefinition :
       *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
       * ```
       */
      parseDirectiveDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("directive");
        this.expectToken(TokenKind.AT);
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        const repeatable = this.expectOptionalKeyword("repeatable");
        this.expectKeyword("on");
        const locations = this.parseDirectiveLocations();
        return this.node(start, {
          kind: Kind.DIRECTIVE_DEFINITION,
          description,
          name,
          arguments: args,
          repeatable,
          locations
        });
      }
      /**
       * DirectiveLocations :
       *   - `|`? DirectiveLocation
       *   - DirectiveLocations | DirectiveLocation
       */
      parseDirectiveLocations() {
        return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
      }
      /*
       * DirectiveLocation :
       *   - ExecutableDirectiveLocation
       *   - TypeSystemDirectiveLocation
       *
       * ExecutableDirectiveLocation : one of
       *   `QUERY`
       *   `MUTATION`
       *   `SUBSCRIPTION`
       *   `FIELD`
       *   `FRAGMENT_DEFINITION`
       *   `FRAGMENT_SPREAD`
       *   `INLINE_FRAGMENT`
       *
       * TypeSystemDirectiveLocation : one of
       *   `SCHEMA`
       *   `SCALAR`
       *   `OBJECT`
       *   `FIELD_DEFINITION`
       *   `ARGUMENT_DEFINITION`
       *   `INTERFACE`
       *   `UNION`
       *   `ENUM`
       *   `ENUM_VALUE`
       *   `INPUT_OBJECT`
       *   `INPUT_FIELD_DEFINITION`
       */
      parseDirectiveLocation() {
        const start = this._lexer.token;
        const name = this.parseName();
        if (Object.prototype.hasOwnProperty.call(DirectiveLocation, name.value)) {
          return name;
        }
        throw this.unexpected(start);
      }
      // Core parsing utility functions
      /**
       * Returns a node that, if configured to do so, sets a "loc" field as a
       * location object, used to identify the place in the source that created a
       * given parsed object.
       */
      node(startToken, node) {
        if (this._options.noLocation !== true) {
          node.loc = new Location(
            startToken,
            this._lexer.lastToken,
            this._lexer.source
          );
        }
        return node;
      }
      /**
       * Determines if the next token is of a given kind
       */
      peek(kind) {
        return this._lexer.token.kind === kind;
      }
      /**
       * If the next token is of the given kind, return that token after advancing the lexer.
       * Otherwise, do not change the parser state and throw an error.
       */
      expectToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
          this.advanceLexer();
          return token;
        }
        throw syntaxError(
          this._lexer.source,
          token.start,
          `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`
        );
      }
      /**
       * If the next token is of the given kind, return "true" after advancing the lexer.
       * Otherwise, do not change the parser state and return "false".
       */
      expectOptionalToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
          this.advanceLexer();
          return true;
        }
        return false;
      }
      /**
       * If the next token is a given keyword, advance the lexer.
       * Otherwise, do not change the parser state and throw an error.
       */
      expectKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === TokenKind.NAME && token.value === value) {
          this.advanceLexer();
        } else {
          throw syntaxError(
            this._lexer.source,
            token.start,
            `Expected "${value}", found ${getTokenDesc(token)}.`
          );
        }
      }
      /**
       * If the next token is a given keyword, return "true" after advancing the lexer.
       * Otherwise, do not change the parser state and return "false".
       */
      expectOptionalKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === TokenKind.NAME && token.value === value) {
          this.advanceLexer();
          return true;
        }
        return false;
      }
      /**
       * Helper function for creating an error when an unexpected lexed token is encountered.
       */
      unexpected(atToken) {
        const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
        return syntaxError(
          this._lexer.source,
          token.start,
          `Unexpected ${getTokenDesc(token)}.`
        );
      }
      /**
       * Returns a possibly empty list of parse nodes, determined by the parseFn.
       * This list begins with a lex token of openKind and ends with a lex token of closeKind.
       * Advances the parser to the next lex token after the closing token.
       */
      any(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        while (!this.expectOptionalToken(closeKind)) {
          nodes.push(parseFn.call(this));
        }
        return nodes;
      }
      /**
       * Returns a list of parse nodes, determined by the parseFn.
       * It can be empty only if open token is missing otherwise it will always return non-empty list
       * that begins with a lex token of openKind and ends with a lex token of closeKind.
       * Advances the parser to the next lex token after the closing token.
       */
      optionalMany(openKind, parseFn, closeKind) {
        if (this.expectOptionalToken(openKind)) {
          const nodes = [];
          do {
            nodes.push(parseFn.call(this));
          } while (!this.expectOptionalToken(closeKind));
          return nodes;
        }
        return [];
      }
      /**
       * Returns a non-empty list of parse nodes, determined by the parseFn.
       * This list begins with a lex token of openKind and ends with a lex token of closeKind.
       * Advances the parser to the next lex token after the closing token.
       */
      many(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        do {
          nodes.push(parseFn.call(this));
        } while (!this.expectOptionalToken(closeKind));
        return nodes;
      }
      /**
       * Returns a non-empty list of parse nodes, determined by the parseFn.
       * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
       * Advances the parser to the next lex token after last item in the list.
       */
      delimitedMany(delimiterKind, parseFn) {
        this.expectOptionalToken(delimiterKind);
        const nodes = [];
        do {
          nodes.push(parseFn.call(this));
        } while (this.expectOptionalToken(delimiterKind));
        return nodes;
      }
      advanceLexer() {
        const { maxTokens } = this._options;
        const token = this._lexer.advance();
        if (maxTokens !== void 0 && token.kind !== TokenKind.EOF) {
          ++this._tokenCounter;
          if (this._tokenCounter > maxTokens) {
            throw syntaxError(
              this._lexer.source,
              token.start,
              `Document contains more that ${maxTokens} tokens. Parsing aborted.`
            );
          }
        }
      }
    };
  }
});

// ../node_modules/graphql/language/printString.mjs
function printString(str) {
  return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
}
function escapedReplacer(str) {
  return escapeSequences[str.charCodeAt(0)];
}
var escapedRegExp, escapeSequences;
var init_printString = __esm({
  "../node_modules/graphql/language/printString.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
    escapeSequences = [
      "\\u0000",
      "\\u0001",
      "\\u0002",
      "\\u0003",
      "\\u0004",
      "\\u0005",
      "\\u0006",
      "\\u0007",
      "\\b",
      "\\t",
      "\\n",
      "\\u000B",
      "\\f",
      "\\r",
      "\\u000E",
      "\\u000F",
      "\\u0010",
      "\\u0011",
      "\\u0012",
      "\\u0013",
      "\\u0014",
      "\\u0015",
      "\\u0016",
      "\\u0017",
      "\\u0018",
      "\\u0019",
      "\\u001A",
      "\\u001B",
      "\\u001C",
      "\\u001D",
      "\\u001E",
      "\\u001F",
      "",
      "",
      '\\"',
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      // 2F
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      // 3F
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      // 4F
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "\\\\",
      "",
      "",
      "",
      // 5F
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      // 6F
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "\\u007F",
      "\\u0080",
      "\\u0081",
      "\\u0082",
      "\\u0083",
      "\\u0084",
      "\\u0085",
      "\\u0086",
      "\\u0087",
      "\\u0088",
      "\\u0089",
      "\\u008A",
      "\\u008B",
      "\\u008C",
      "\\u008D",
      "\\u008E",
      "\\u008F",
      "\\u0090",
      "\\u0091",
      "\\u0092",
      "\\u0093",
      "\\u0094",
      "\\u0095",
      "\\u0096",
      "\\u0097",
      "\\u0098",
      "\\u0099",
      "\\u009A",
      "\\u009B",
      "\\u009C",
      "\\u009D",
      "\\u009E",
      "\\u009F"
    ];
  }
});

// ../node_modules/graphql/language/visitor.mjs
function visit(root, visitor, visitorKeys = QueryDocumentKeys) {
  const enterLeaveMap = /* @__PURE__ */ new Map();
  for (const kind of Object.values(Kind)) {
    enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
  }
  let stack = void 0;
  let inArray = Array.isArray(root);
  let keys = [root];
  let index = -1;
  let edits = [];
  let node = root;
  let key = void 0;
  let parent = void 0;
  const path = [];
  const ancestors = [];
  do {
    index++;
    const isLeaving = index === keys.length;
    const isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? void 0 : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
          let editOffset = 0;
          for (const [editKey, editValue] of edits) {
            const arrayKey = editKey - editOffset;
            if (editValue === null) {
              node.splice(arrayKey, 1);
              editOffset++;
            } else {
              node[arrayKey] = editValue;
            }
          }
        } else {
          node = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(node)
          );
          for (const [editKey, editValue] of edits) {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else if (parent) {
      key = inArray ? index : keys[index];
      node = parent[key];
      if (node === null || node === void 0) {
        continue;
      }
      path.push(key);
    }
    let result;
    if (!Array.isArray(node)) {
      var _enterLeaveMap$get, _enterLeaveMap$get2;
      isNode(node) || devAssert(false, `Invalid AST Node: ${inspect(node)}.`);
      const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
      result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path, ancestors);
      if (result === BREAK) {
        break;
      }
      if (result === false) {
        if (!isLeaving) {
          path.pop();
          continue;
        }
      } else if (result !== void 0) {
        edits.push([key, result]);
        if (!isLeaving) {
          if (isNode(result)) {
            node = result;
          } else {
            path.pop();
            continue;
          }
        }
      }
    }
    if (result === void 0 && isEdited) {
      edits.push([key, node]);
    }
    if (isLeaving) {
      path.pop();
    } else {
      var _node$kind;
      stack = {
        inArray,
        index,
        keys,
        edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== void 0);
  if (edits.length !== 0) {
    return edits[edits.length - 1][1];
  }
  return root;
}
function getEnterLeaveForKind(visitor, kind) {
  const kindVisitor = visitor[kind];
  if (typeof kindVisitor === "object") {
    return kindVisitor;
  } else if (typeof kindVisitor === "function") {
    return {
      enter: kindVisitor,
      leave: void 0
    };
  }
  return {
    enter: visitor.enter,
    leave: visitor.leave
  };
}
var BREAK;
var init_visitor = __esm({
  "../node_modules/graphql/language/visitor.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    init_devAssert();
    init_inspect();
    init_ast();
    init_kinds();
    BREAK = Object.freeze({});
  }
});

// ../node_modules/graphql/language/printer.mjs
function print(ast) {
  return visit(ast, printDocASTReducer);
}
function join(maybeArray, separator = "") {
  var _maybeArray$filter$jo;
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x) => x).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
}
function block(array) {
  return wrap("{\n", indent(join(array, "\n")), "\n}");
}
function wrap(start, maybeString, end = "") {
  return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
}
function indent(str) {
  return wrap("  ", str.replace(/\n/g, "\n  "));
}
function hasMultilineItems(maybeArray) {
  var _maybeArray$some;
  return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str) => str.includes("\n"))) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
}
var MAX_LINE_LENGTH, printDocASTReducer;
var init_printer = __esm({
  "../node_modules/graphql/language/printer.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    init_blockString();
    init_printString();
    init_visitor();
    MAX_LINE_LENGTH = 80;
    printDocASTReducer = {
      Name: {
        leave: (node) => node.value
      },
      Variable: {
        leave: (node) => "$" + node.name
      },
      // Document
      Document: {
        leave: (node) => join(node.definitions, "\n\n")
      },
      OperationDefinition: {
        leave(node) {
          const varDefs = wrap("(", join(node.variableDefinitions, ", "), ")");
          const prefix = join(
            [
              node.operation,
              join([node.name, varDefs]),
              join(node.directives, " ")
            ],
            " "
          );
          return (prefix === "query" ? "" : prefix + " ") + node.selectionSet;
        }
      },
      VariableDefinition: {
        leave: ({ variable, type, defaultValue, directives }) => variable + ": " + type + wrap(" = ", defaultValue) + wrap(" ", join(directives, " "))
      },
      SelectionSet: {
        leave: ({ selections }) => block(selections)
      },
      Field: {
        leave({ alias, name, arguments: args, directives, selectionSet }) {
          const prefix = wrap("", alias, ": ") + name;
          let argsLine = prefix + wrap("(", join(args, ", "), ")");
          if (argsLine.length > MAX_LINE_LENGTH) {
            argsLine = prefix + wrap("(\n", indent(join(args, "\n")), "\n)");
          }
          return join([argsLine, join(directives, " "), selectionSet], " ");
        }
      },
      Argument: {
        leave: ({ name, value }) => name + ": " + value
      },
      // Fragments
      FragmentSpread: {
        leave: ({ name, directives }) => "..." + name + wrap(" ", join(directives, " "))
      },
      InlineFragment: {
        leave: ({ typeCondition, directives, selectionSet }) => join(
          [
            "...",
            wrap("on ", typeCondition),
            join(directives, " "),
            selectionSet
          ],
          " "
        )
      },
      FragmentDefinition: {
        leave: ({ name, typeCondition, variableDefinitions, directives, selectionSet }) => (
          // or removed in the future.
          `fragment ${name}${wrap("(", join(variableDefinitions, ", "), ")")} on ${typeCondition} ${wrap("", join(directives, " "), " ")}` + selectionSet
        )
      },
      // Value
      IntValue: {
        leave: ({ value }) => value
      },
      FloatValue: {
        leave: ({ value }) => value
      },
      StringValue: {
        leave: ({ value, block: isBlockString }) => isBlockString ? printBlockString(value) : printString(value)
      },
      BooleanValue: {
        leave: ({ value }) => value ? "true" : "false"
      },
      NullValue: {
        leave: () => "null"
      },
      EnumValue: {
        leave: ({ value }) => value
      },
      ListValue: {
        leave: ({ values }) => "[" + join(values, ", ") + "]"
      },
      ObjectValue: {
        leave: ({ fields }) => "{" + join(fields, ", ") + "}"
      },
      ObjectField: {
        leave: ({ name, value }) => name + ": " + value
      },
      // Directive
      Directive: {
        leave: ({ name, arguments: args }) => "@" + name + wrap("(", join(args, ", "), ")")
      },
      // Type
      NamedType: {
        leave: ({ name }) => name
      },
      ListType: {
        leave: ({ type }) => "[" + type + "]"
      },
      NonNullType: {
        leave: ({ type }) => type + "!"
      },
      // Type System Definitions
      SchemaDefinition: {
        leave: ({ description, directives, operationTypes }) => wrap("", description, "\n") + join(["schema", join(directives, " "), block(operationTypes)], " ")
      },
      OperationTypeDefinition: {
        leave: ({ operation, type }) => operation + ": " + type
      },
      ScalarTypeDefinition: {
        leave: ({ description, name, directives }) => wrap("", description, "\n") + join(["scalar", name, join(directives, " ")], " ")
      },
      ObjectTypeDefinition: {
        leave: ({ description, name, interfaces, directives, fields }) => wrap("", description, "\n") + join(
          [
            "type",
            name,
            wrap("implements ", join(interfaces, " & ")),
            join(directives, " "),
            block(fields)
          ],
          " "
        )
      },
      FieldDefinition: {
        leave: ({ description, name, arguments: args, type, directives }) => wrap("", description, "\n") + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + ": " + type + wrap(" ", join(directives, " "))
      },
      InputValueDefinition: {
        leave: ({ description, name, type, defaultValue, directives }) => wrap("", description, "\n") + join(
          [name + ": " + type, wrap("= ", defaultValue), join(directives, " ")],
          " "
        )
      },
      InterfaceTypeDefinition: {
        leave: ({ description, name, interfaces, directives, fields }) => wrap("", description, "\n") + join(
          [
            "interface",
            name,
            wrap("implements ", join(interfaces, " & ")),
            join(directives, " "),
            block(fields)
          ],
          " "
        )
      },
      UnionTypeDefinition: {
        leave: ({ description, name, directives, types }) => wrap("", description, "\n") + join(
          ["union", name, join(directives, " "), wrap("= ", join(types, " | "))],
          " "
        )
      },
      EnumTypeDefinition: {
        leave: ({ description, name, directives, values }) => wrap("", description, "\n") + join(["enum", name, join(directives, " "), block(values)], " ")
      },
      EnumValueDefinition: {
        leave: ({ description, name, directives }) => wrap("", description, "\n") + join([name, join(directives, " ")], " ")
      },
      InputObjectTypeDefinition: {
        leave: ({ description, name, directives, fields }) => wrap("", description, "\n") + join(["input", name, join(directives, " "), block(fields)], " ")
      },
      DirectiveDefinition: {
        leave: ({ description, name, arguments: args, repeatable, locations }) => wrap("", description, "\n") + "directive @" + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ")
      },
      SchemaExtension: {
        leave: ({ directives, operationTypes }) => join(
          ["extend schema", join(directives, " "), block(operationTypes)],
          " "
        )
      },
      ScalarTypeExtension: {
        leave: ({ name, directives }) => join(["extend scalar", name, join(directives, " ")], " ")
      },
      ObjectTypeExtension: {
        leave: ({ name, interfaces, directives, fields }) => join(
          [
            "extend type",
            name,
            wrap("implements ", join(interfaces, " & ")),
            join(directives, " "),
            block(fields)
          ],
          " "
        )
      },
      InterfaceTypeExtension: {
        leave: ({ name, interfaces, directives, fields }) => join(
          [
            "extend interface",
            name,
            wrap("implements ", join(interfaces, " & ")),
            join(directives, " "),
            block(fields)
          ],
          " "
        )
      },
      UnionTypeExtension: {
        leave: ({ name, directives, types }) => join(
          [
            "extend union",
            name,
            join(directives, " "),
            wrap("= ", join(types, " | "))
          ],
          " "
        )
      },
      EnumTypeExtension: {
        leave: ({ name, directives, values }) => join(["extend enum", name, join(directives, " "), block(values)], " ")
      },
      InputObjectTypeExtension: {
        leave: ({ name, directives, fields }) => join(["extend input", name, join(directives, " "), block(fields)], " ")
      }
    };
  }
});

// ../node_modules/graphql/language/index.mjs
var init_language = __esm({
  "../node_modules/graphql/language/index.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    init_parser();
    init_printer();
  }
});

// ../node_modules/graphql/index.mjs
var init_graphql = __esm({
  "../node_modules/graphql/index.mjs"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    init_language();
  }
});

// ../node_modules/graphql-request/build/esm/resolveRequestDocument.js
var extractOperationName, resolveRequestDocument;
var init_resolveRequestDocument = __esm({
  "../node_modules/graphql-request/build/esm/resolveRequestDocument.js"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    init_graphql();
    extractOperationName = (document) => {
      let operationName = void 0;
      const operationDefinitions = document.definitions.filter((definition) => definition.kind === `OperationDefinition`);
      if (operationDefinitions.length === 1) {
        operationName = operationDefinitions[0]?.name?.value;
      }
      return operationName;
    };
    resolveRequestDocument = (document) => {
      if (typeof document === `string`) {
        let operationName2 = void 0;
        try {
          const parsedDocument = parse(document);
          operationName2 = extractOperationName(parsedDocument);
        } catch (err) {
        }
        return { query: document, operationName: operationName2 };
      }
      const operationName = extractOperationName(document);
      return { query: print(document), operationName };
    };
  }
});

// ../node_modules/graphql-request/build/esm/types.js
var ClientError;
var init_types = __esm({
  "../node_modules/graphql-request/build/esm/types.js"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    ClientError = class extends Error {
      constructor(response, request) {
        const message = `${ClientError.extractMessage(response)}: ${JSON.stringify({
          response,
          request
        })}`;
        super(message);
        Object.setPrototypeOf(this, ClientError.prototype);
        this.response = response;
        this.request = request;
        if (typeof Error.captureStackTrace === `function`) {
          Error.captureStackTrace(this, ClientError);
        }
      }
      static extractMessage(response) {
        return response.errors?.[0]?.message ?? `GraphQL Error (Code: ${response.status})`;
      }
    };
  }
});

// ../node_modules/cross-fetch/dist/browser-ponyfill.js
var require_browser_ponyfill = __commonJS({
  "../node_modules/cross-fetch/dist/browser-ponyfill.js"(exports, module) {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    var global = typeof self !== "undefined" ? self : exports;
    var __self__ = function() {
      function F() {
        this.fetch = false;
        this.DOMException = global.DOMException;
      }
      F.prototype = global;
      return new F();
    }();
    (function(self2) {
      var irrelevant = function(exports2) {
        var support = {
          searchParams: "URLSearchParams" in self2,
          iterable: "Symbol" in self2 && "iterator" in Symbol,
          blob: "FileReader" in self2 && "Blob" in self2 && function() {
            try {
              new Blob();
              return true;
            } catch (e) {
              return false;
            }
          }(),
          formData: "FormData" in self2,
          arrayBuffer: "ArrayBuffer" in self2
        };
        function isDataView(obj) {
          return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
          var viewClasses = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ];
          var isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
          };
        }
        function normalizeName(name) {
          if (typeof name !== "string") {
            name = String(name);
          }
          if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
            throw new TypeError("Invalid character in header field name");
          }
          return name.toLowerCase();
        }
        function normalizeValue(value) {
          if (typeof value !== "string") {
            value = String(value);
          }
          return value;
        }
        function iteratorFor(items) {
          var iterator = {
            next: function() {
              var value = items.shift();
              return { done: value === void 0, value };
            }
          };
          if (support.iterable) {
            iterator[Symbol.iterator] = function() {
              return iterator;
            };
          }
          return iterator;
        }
        function Headers3(headers) {
          this.map = {};
          if (headers instanceof Headers3) {
            headers.forEach(function(value, name) {
              this.append(name, value);
            }, this);
          } else if (Array.isArray(headers)) {
            headers.forEach(function(header) {
              this.append(header[0], header[1]);
            }, this);
          } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(name) {
              this.append(name, headers[name]);
            }, this);
          }
        }
        Headers3.prototype.append = function(name, value) {
          name = normalizeName(name);
          value = normalizeValue(value);
          var oldValue = this.map[name];
          this.map[name] = oldValue ? oldValue + ", " + value : value;
        };
        Headers3.prototype["delete"] = function(name) {
          delete this.map[normalizeName(name)];
        };
        Headers3.prototype.get = function(name) {
          name = normalizeName(name);
          return this.has(name) ? this.map[name] : null;
        };
        Headers3.prototype.has = function(name) {
          return this.map.hasOwnProperty(normalizeName(name));
        };
        Headers3.prototype.set = function(name, value) {
          this.map[normalizeName(name)] = normalizeValue(value);
        };
        Headers3.prototype.forEach = function(callback, thisArg) {
          for (var name in this.map) {
            if (this.map.hasOwnProperty(name)) {
              callback.call(thisArg, this.map[name], name, this);
            }
          }
        };
        Headers3.prototype.keys = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push(name);
          });
          return iteratorFor(items);
        };
        Headers3.prototype.values = function() {
          var items = [];
          this.forEach(function(value) {
            items.push(value);
          });
          return iteratorFor(items);
        };
        Headers3.prototype.entries = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push([name, value]);
          });
          return iteratorFor(items);
        };
        if (support.iterable) {
          Headers3.prototype[Symbol.iterator] = Headers3.prototype.entries;
        }
        function consumed(body) {
          if (body.bodyUsed) {
            return Promise.reject(new TypeError("Already read"));
          }
          body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
          return new Promise(function(resolve, reject) {
            reader.onload = function() {
              resolve(reader.result);
            };
            reader.onerror = function() {
              reject(reader.error);
            };
          });
        }
        function readBlobAsArrayBuffer(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsArrayBuffer(blob);
          return promise;
        }
        function readBlobAsText(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsText(blob);
          return promise;
        }
        function readArrayBufferAsText(buf) {
          var view = new Uint8Array(buf);
          var chars = new Array(view.length);
          for (var i = 0; i < view.length; i++) {
            chars[i] = String.fromCharCode(view[i]);
          }
          return chars.join("");
        }
        function bufferClone(buf) {
          if (buf.slice) {
            return buf.slice(0);
          } else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
          }
        }
        function Body() {
          this.bodyUsed = false;
          this._initBody = function(body) {
            this._bodyInit = body;
            if (!body) {
              this._bodyText = "";
            } else if (typeof body === "string") {
              this._bodyText = body;
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              this._bodyBlob = body;
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
              this._bodyFormData = body;
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this._bodyText = body.toString();
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
              this._bodyArrayBuffer = bufferClone(body.buffer);
              this._bodyInit = new Blob([this._bodyArrayBuffer]);
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
              this._bodyArrayBuffer = bufferClone(body);
            } else {
              this._bodyText = body = Object.prototype.toString.call(body);
            }
            if (!this.headers.get("content-type")) {
              if (typeof body === "string") {
                this.headers.set("content-type", "text/plain;charset=UTF-8");
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set("content-type", this._bodyBlob.type);
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          };
          if (support.blob) {
            this.blob = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as blob");
              } else {
                return Promise.resolve(new Blob([this._bodyText]));
              }
            };
            this.arrayBuffer = function() {
              if (this._bodyArrayBuffer) {
                return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
              } else {
                return this.blob().then(readBlobAsArrayBuffer);
              }
            };
          }
          this.text = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return readBlobAsText(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as text");
            } else {
              return Promise.resolve(this._bodyText);
            }
          };
          if (support.formData) {
            this.formData = function() {
              return this.text().then(decode);
            };
          }
          this.json = function() {
            return this.text().then(JSON.parse);
          };
          return this;
        }
        var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function normalizeMethod(method) {
          var upcased = method.toUpperCase();
          return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request2(input, options) {
          options = options || {};
          var body = options.body;
          if (input instanceof Request2) {
            if (input.bodyUsed) {
              throw new TypeError("Already read");
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
              this.headers = new Headers3(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            this.signal = input.signal;
            if (!body && input._bodyInit != null) {
              body = input._bodyInit;
              input.bodyUsed = true;
            }
          } else {
            this.url = String(input);
          }
          this.credentials = options.credentials || this.credentials || "same-origin";
          if (options.headers || !this.headers) {
            this.headers = new Headers3(options.headers);
          }
          this.method = normalizeMethod(options.method || this.method || "GET");
          this.mode = options.mode || this.mode || null;
          this.signal = options.signal || this.signal;
          this.referrer = null;
          if ((this.method === "GET" || this.method === "HEAD") && body) {
            throw new TypeError("Body not allowed for GET or HEAD requests");
          }
          this._initBody(body);
        }
        Request2.prototype.clone = function() {
          return new Request2(this, { body: this._bodyInit });
        };
        function decode(body) {
          var form = new FormData();
          body.trim().split("&").forEach(function(bytes) {
            if (bytes) {
              var split = bytes.split("=");
              var name = split.shift().replace(/\+/g, " ");
              var value = split.join("=").replace(/\+/g, " ");
              form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
          });
          return form;
        }
        function parseHeaders(rawHeaders) {
          var headers = new Headers3();
          var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
          preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
            var parts = line.split(":");
            var key = parts.shift().trim();
            if (key) {
              var value = parts.join(":").trim();
              headers.append(key, value);
            }
          });
          return headers;
        }
        Body.call(Request2.prototype);
        function Response2(bodyInit, options) {
          if (!options) {
            options = {};
          }
          this.type = "default";
          this.status = options.status === void 0 ? 200 : options.status;
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = "statusText" in options ? options.statusText : "OK";
          this.headers = new Headers3(options.headers);
          this.url = options.url || "";
          this._initBody(bodyInit);
        }
        Body.call(Response2.prototype);
        Response2.prototype.clone = function() {
          return new Response2(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers3(this.headers),
            url: this.url
          });
        };
        Response2.error = function() {
          var response = new Response2(null, { status: 0, statusText: "" });
          response.type = "error";
          return response;
        };
        var redirectStatuses = [301, 302, 303, 307, 308];
        Response2.redirect = function(url, status) {
          if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError("Invalid status code");
          }
          return new Response2(null, { status, headers: { location: url } });
        };
        exports2.DOMException = self2.DOMException;
        try {
          new exports2.DOMException();
        } catch (err) {
          exports2.DOMException = function(message, name) {
            this.message = message;
            this.name = name;
            var error = Error(message);
            this.stack = error.stack;
          };
          exports2.DOMException.prototype = Object.create(Error.prototype);
          exports2.DOMException.prototype.constructor = exports2.DOMException;
        }
        function fetch2(input, init) {
          return new Promise(function(resolve, reject) {
            var request = new Request2(input, init);
            if (request.signal && request.signal.aborted) {
              return reject(new exports2.DOMException("Aborted", "AbortError"));
            }
            var xhr = new XMLHttpRequest();
            function abortXhr() {
              xhr.abort();
            }
            xhr.onload = function() {
              var options = {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
              };
              options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
              var body = "response" in xhr ? xhr.response : xhr.responseText;
              resolve(new Response2(body, options));
            };
            xhr.onerror = function() {
              reject(new TypeError("Network request failed"));
            };
            xhr.ontimeout = function() {
              reject(new TypeError("Network request failed"));
            };
            xhr.onabort = function() {
              reject(new exports2.DOMException("Aborted", "AbortError"));
            };
            xhr.open(request.method, request.url, true);
            if (request.credentials === "include") {
              xhr.withCredentials = true;
            } else if (request.credentials === "omit") {
              xhr.withCredentials = false;
            }
            if ("responseType" in xhr && support.blob) {
              xhr.responseType = "blob";
            }
            request.headers.forEach(function(value, name) {
              xhr.setRequestHeader(name, value);
            });
            if (request.signal) {
              request.signal.addEventListener("abort", abortXhr);
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  request.signal.removeEventListener("abort", abortXhr);
                }
              };
            }
            xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
          });
        }
        fetch2.polyfill = true;
        if (!self2.fetch) {
          self2.fetch = fetch2;
          self2.Headers = Headers3;
          self2.Request = Request2;
          self2.Response = Response2;
        }
        exports2.Headers = Headers3;
        exports2.Request = Request2;
        exports2.Response = Response2;
        exports2.fetch = fetch2;
        Object.defineProperty(exports2, "__esModule", { value: true });
        return exports2;
      }({});
    })(__self__);
    __self__.fetch.ponyfill = true;
    delete __self__.fetch.polyfill;
    var ctx = __self__;
    exports = ctx.fetch;
    exports.default = ctx.fetch;
    exports.fetch = ctx.fetch;
    exports.Headers = ctx.Headers;
    exports.Request = ctx.Request;
    exports.Response = ctx.Response;
    module.exports = exports;
  }
});

// ../node_modules/graphql-request/build/esm/graphql-ws.js
function parseMessage(data, f = (a) => a) {
  const m = GraphQLWebSocketMessage.parse(data, f);
  return m;
}
function ConnectionInit(payload) {
  return new GraphQLWebSocketMessage(CONNECTION_INIT, payload);
}
function Ping(payload) {
  return new GraphQLWebSocketMessage(PING, payload, void 0);
}
function Pong(payload) {
  return new GraphQLWebSocketMessage(PONG, payload, void 0);
}
function Subscribe(id, payload) {
  return new GraphQLWebSocketMessage(SUBSCRIBE, payload, id);
}
function Complete(id) {
  return new GraphQLWebSocketMessage(COMPLETE, void 0, id);
}
var CONNECTION_INIT, CONNECTION_ACK, PING, PONG, SUBSCRIBE, NEXT, ERROR, COMPLETE, GraphQLWebSocketMessage, GraphQLWebSocketClient;
var init_graphql_ws = __esm({
  "../node_modules/graphql-request/build/esm/graphql-ws.js"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    init_resolveRequestDocument();
    init_types();
    CONNECTION_INIT = `connection_init`;
    CONNECTION_ACK = `connection_ack`;
    PING = `ping`;
    PONG = `pong`;
    SUBSCRIBE = `subscribe`;
    NEXT = `next`;
    ERROR = `error`;
    COMPLETE = `complete`;
    GraphQLWebSocketMessage = class {
      get type() {
        return this._type;
      }
      get id() {
        return this._id;
      }
      get payload() {
        return this._payload;
      }
      constructor(type, payload, id) {
        this._type = type;
        this._payload = payload;
        this._id = id;
      }
      get text() {
        const result = { type: this.type };
        if (this.id != null && this.id != void 0)
          result.id = this.id;
        if (this.payload != null && this.payload != void 0)
          result.payload = this.payload;
        return JSON.stringify(result);
      }
      static parse(data, f) {
        const { type, payload, id } = JSON.parse(data);
        return new GraphQLWebSocketMessage(type, f(payload), id);
      }
    };
    GraphQLWebSocketClient = class {
      constructor(socket, { onInit, onAcknowledged, onPing, onPong }) {
        this.socketState = { acknowledged: false, lastRequestId: 0, subscriptions: {} };
        this.socket = socket;
        socket.addEventListener(`open`, async (e) => {
          this.socketState.acknowledged = false;
          this.socketState.subscriptions = {};
          socket.send(ConnectionInit(onInit ? await onInit() : null).text);
        });
        socket.addEventListener(`close`, (e) => {
          this.socketState.acknowledged = false;
          this.socketState.subscriptions = {};
        });
        socket.addEventListener(`error`, (e) => {
          console.error(e);
        });
        socket.addEventListener(`message`, (e) => {
          try {
            const message = parseMessage(e.data);
            switch (message.type) {
              case CONNECTION_ACK: {
                if (this.socketState.acknowledged) {
                  console.warn(`Duplicate CONNECTION_ACK message ignored`);
                } else {
                  this.socketState.acknowledged = true;
                  if (onAcknowledged)
                    onAcknowledged(message.payload);
                }
                return;
              }
              case PING: {
                if (onPing)
                  onPing(message.payload).then((r) => socket.send(Pong(r).text));
                else
                  socket.send(Pong(null).text);
                return;
              }
              case PONG: {
                if (onPong)
                  onPong(message.payload);
                return;
              }
            }
            if (!this.socketState.acknowledged) {
              return;
            }
            if (message.id === void 0 || message.id === null || !this.socketState.subscriptions[message.id]) {
              return;
            }
            const { query, variables, subscriber } = this.socketState.subscriptions[message.id];
            switch (message.type) {
              case NEXT: {
                if (!message.payload.errors && message.payload.data) {
                  subscriber.next && subscriber.next(message.payload.data);
                }
                if (message.payload.errors) {
                  subscriber.error && subscriber.error(new ClientError({ ...message.payload, status: 200 }, { query, variables }));
                } else {
                }
                return;
              }
              case ERROR: {
                subscriber.error && subscriber.error(new ClientError({ errors: message.payload, status: 200 }, { query, variables }));
                return;
              }
              case COMPLETE: {
                subscriber.complete && subscriber.complete();
                delete this.socketState.subscriptions[message.id];
                return;
              }
            }
          } catch (e2) {
            console.error(e2);
            socket.close(1006);
          }
          socket.close(4400, `Unknown graphql-ws message.`);
        });
      }
      makeSubscribe(query, operationName, subscriber, variables) {
        const subscriptionId = (this.socketState.lastRequestId++).toString();
        this.socketState.subscriptions[subscriptionId] = { query, variables, subscriber };
        this.socket.send(Subscribe(subscriptionId, { query, operationName, variables }).text);
        return () => {
          this.socket.send(Complete(subscriptionId).text);
          delete this.socketState.subscriptions[subscriptionId];
        };
      }
      rawRequest(query, variables) {
        return new Promise((resolve, reject) => {
          let result;
          this.rawSubscribe(query, {
            next: (data, extensions) => result = { data, extensions },
            error: reject,
            complete: () => resolve(result)
          }, variables);
        });
      }
      request(document, variables) {
        return new Promise((resolve, reject) => {
          let result;
          this.subscribe(document, {
            next: (data) => result = data,
            error: reject,
            complete: () => resolve(result)
          }, variables);
        });
      }
      subscribe(document, subscriber, variables) {
        const { query, operationName } = resolveRequestDocument(document);
        return this.makeSubscribe(query, operationName, subscriber, variables);
      }
      rawSubscribe(query, subscriber, variables) {
        return this.makeSubscribe(query, void 0, subscriber, variables);
      }
      ping(payload) {
        this.socket.send(Ping(payload).text);
      }
      close() {
        this.socket.close(1e3);
      }
    };
    GraphQLWebSocketClient.PROTOCOL = `graphql-transport-ws`;
  }
});

// ../node_modules/graphql-request/build/esm/index.js
var CrossFetch, resolveHeaders, cleanQuery, buildRequestConfig, createHttpMethodFetcher, GraphQLClient, makeRequest, createRequestBody, getResult, callOrIdentity;
var init_esm = __esm({
  "../node_modules/graphql-request/build/esm/index.js"() {
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    init_defaultJsonSerializer();
    init_helpers();
    init_parseArgs();
    init_resolveRequestDocument();
    init_types();
    CrossFetch = __toESM(require_browser_ponyfill(), 1);
    init_graphql_ws();
    init_resolveRequestDocument();
    resolveHeaders = (headers) => {
      let oHeaders = {};
      if (headers) {
        if (typeof Headers !== `undefined` && headers instanceof Headers || CrossFetch && CrossFetch.Headers && headers instanceof CrossFetch.Headers) {
          oHeaders = HeadersInstanceToPlainObject(headers);
        } else if (Array.isArray(headers)) {
          headers.forEach(([name, value]) => {
            if (name && value !== void 0) {
              oHeaders[name] = value;
            }
          });
        } else {
          oHeaders = headers;
        }
      }
      return oHeaders;
    };
    cleanQuery = (str) => str.replace(/([\s,]|#[^\n\r]+)+/g, ` `).trim();
    buildRequestConfig = (params) => {
      if (!Array.isArray(params.query)) {
        const params_2 = params;
        const search = [`query=${encodeURIComponent(cleanQuery(params_2.query))}`];
        if (params.variables) {
          search.push(`variables=${encodeURIComponent(params_2.jsonSerializer.stringify(params_2.variables))}`);
        }
        if (params_2.operationName) {
          search.push(`operationName=${encodeURIComponent(params_2.operationName)}`);
        }
        return search.join(`&`);
      }
      if (typeof params.variables !== `undefined` && !Array.isArray(params.variables)) {
        throw new Error(`Cannot create query with given variable type, array expected`);
      }
      const params_ = params;
      const payload = params.query.reduce((acc, currentQuery, index) => {
        acc.push({
          query: cleanQuery(currentQuery),
          variables: params_.variables ? params_.jsonSerializer.stringify(params_.variables[index]) : void 0
        });
        return acc;
      }, []);
      return `query=${encodeURIComponent(params_.jsonSerializer.stringify(payload))}`;
    };
    createHttpMethodFetcher = (method) => async (params) => {
      const { url, query, variables, operationName, fetch: fetch2, fetchOptions, middleware } = params;
      const headers = { ...params.headers };
      let queryParams = ``;
      let body = void 0;
      if (method === `POST`) {
        body = createRequestBody(query, variables, operationName, fetchOptions.jsonSerializer);
        if (typeof body === `string`) {
          headers[`Content-Type`] = `application/json`;
        }
      } else {
        queryParams = buildRequestConfig({
          query,
          variables,
          operationName,
          jsonSerializer: fetchOptions.jsonSerializer ?? defaultJsonSerializer
        });
      }
      const init = {
        method,
        headers,
        body,
        ...fetchOptions
      };
      let urlResolved = url;
      let initResolved = init;
      if (middleware) {
        const result = await Promise.resolve(middleware({ ...init, url, operationName, variables }));
        const { url: urlNew, ...initNew } = result;
        urlResolved = urlNew;
        initResolved = initNew;
      }
      if (queryParams) {
        urlResolved = `${urlResolved}?${queryParams}`;
      }
      return await fetch2(urlResolved, initResolved);
    };
    GraphQLClient = class {
      constructor(url, requestConfig = {}) {
        this.url = url;
        this.requestConfig = requestConfig;
        this.rawRequest = async (...args) => {
          const [queryOrOptions, variables, requestHeaders] = args;
          const rawRequestOptions = parseRawRequestArgs(queryOrOptions, variables, requestHeaders);
          const { headers, fetch: fetch2 = CrossFetch.default, method = `POST`, requestMiddleware, responseMiddleware, ...fetchOptions } = this.requestConfig;
          const { url: url2 } = this;
          if (rawRequestOptions.signal !== void 0) {
            fetchOptions.signal = rawRequestOptions.signal;
          }
          const { operationName } = resolveRequestDocument(rawRequestOptions.query);
          return makeRequest({
            url: url2,
            query: rawRequestOptions.query,
            variables: rawRequestOptions.variables,
            headers: {
              ...resolveHeaders(callOrIdentity(headers)),
              ...resolveHeaders(rawRequestOptions.requestHeaders)
            },
            operationName,
            fetch: fetch2,
            method,
            fetchOptions,
            middleware: requestMiddleware
          }).then((response) => {
            if (responseMiddleware) {
              responseMiddleware(response);
            }
            return response;
          }).catch((error) => {
            if (responseMiddleware) {
              responseMiddleware(error);
            }
            throw error;
          });
        };
      }
      async request(documentOrOptions, ...variablesAndRequestHeaders) {
        const [variables, requestHeaders] = variablesAndRequestHeaders;
        const requestOptions = parseRequestArgs(documentOrOptions, variables, requestHeaders);
        const { headers, fetch: fetch2 = CrossFetch.default, method = `POST`, requestMiddleware, responseMiddleware, ...fetchOptions } = this.requestConfig;
        const { url } = this;
        if (requestOptions.signal !== void 0) {
          fetchOptions.signal = requestOptions.signal;
        }
        const { query, operationName } = resolveRequestDocument(requestOptions.document);
        return makeRequest({
          url,
          query,
          variables: requestOptions.variables,
          headers: {
            ...resolveHeaders(callOrIdentity(headers)),
            ...resolveHeaders(requestOptions.requestHeaders)
          },
          operationName,
          fetch: fetch2,
          method,
          fetchOptions,
          middleware: requestMiddleware
        }).then((response) => {
          if (responseMiddleware) {
            responseMiddleware(response);
          }
          return response.data;
        }).catch((error) => {
          if (responseMiddleware) {
            responseMiddleware(error);
          }
          throw error;
        });
      }
      // prettier-ignore
      batchRequests(documentsOrOptions, requestHeaders) {
        const batchRequestOptions = parseBatchRequestArgs(documentsOrOptions, requestHeaders);
        const { headers, ...fetchOptions } = this.requestConfig;
        if (batchRequestOptions.signal !== void 0) {
          fetchOptions.signal = batchRequestOptions.signal;
        }
        const queries = batchRequestOptions.documents.map(({ document }) => resolveRequestDocument(document).query);
        const variables = batchRequestOptions.documents.map(({ variables: variables2 }) => variables2);
        return makeRequest({
          url: this.url,
          query: queries,
          // @ts-expect-error TODO reconcile batch variables into system.
          variables,
          headers: {
            ...resolveHeaders(callOrIdentity(headers)),
            ...resolveHeaders(batchRequestOptions.requestHeaders)
          },
          operationName: void 0,
          fetch: this.requestConfig.fetch ?? CrossFetch.default,
          method: this.requestConfig.method || `POST`,
          fetchOptions,
          middleware: this.requestConfig.requestMiddleware
        }).then((response) => {
          if (this.requestConfig.responseMiddleware) {
            this.requestConfig.responseMiddleware(response);
          }
          return response.data;
        }).catch((error) => {
          if (this.requestConfig.responseMiddleware) {
            this.requestConfig.responseMiddleware(error);
          }
          throw error;
        });
      }
      setHeaders(headers) {
        this.requestConfig.headers = headers;
        return this;
      }
      /**
       * Attach a header to the client. All subsequent requests will have this header.
       */
      setHeader(key, value) {
        const { headers } = this.requestConfig;
        if (headers) {
          headers[key] = value;
        } else {
          this.requestConfig.headers = { [key]: value };
        }
        return this;
      }
      /**
       * Change the client endpoint. All subsequent requests will send to this endpoint.
       */
      setEndpoint(value) {
        this.url = value;
        return this;
      }
    };
    makeRequest = async (params) => {
      const { query, variables, fetchOptions } = params;
      const fetcher = createHttpMethodFetcher(uppercase(params.method ?? `post`));
      const isBatchingQuery = Array.isArray(params.query);
      const response = await fetcher(params);
      const result = await getResult(response, fetchOptions.jsonSerializer ?? defaultJsonSerializer);
      const successfullyReceivedData = Array.isArray(result) ? !result.some(({ data }) => !data) : Boolean(result.data);
      const successfullyPassedErrorPolicy = Array.isArray(result) || !result.errors || Array.isArray(result.errors) && !result.errors.length || fetchOptions.errorPolicy === `all` || fetchOptions.errorPolicy === `ignore`;
      if (response.ok && successfullyPassedErrorPolicy && successfullyReceivedData) {
        const { errors: _, ...rest } = Array.isArray(result) ? result : result;
        const data = fetchOptions.errorPolicy === `ignore` ? rest : result;
        const dataEnvelope = isBatchingQuery ? { data } : data;
        return {
          ...dataEnvelope,
          headers: response.headers,
          status: response.status
        };
      } else {
        const errorResult = typeof result === `string` ? {
          error: result
        } : result;
        throw new ClientError(
          // @ts-expect-error TODO
          { ...errorResult, status: response.status, headers: response.headers },
          { query, variables }
        );
      }
    };
    createRequestBody = (query, variables, operationName, jsonSerializer) => {
      const jsonSerializer_ = jsonSerializer ?? defaultJsonSerializer;
      if (!Array.isArray(query)) {
        return jsonSerializer_.stringify({ query, variables, operationName });
      }
      if (typeof variables !== `undefined` && !Array.isArray(variables)) {
        throw new Error(`Cannot create request body with given variable type, array expected`);
      }
      const payload = query.reduce((acc, currentQuery, index) => {
        acc.push({ query: currentQuery, variables: variables ? variables[index] : void 0 });
        return acc;
      }, []);
      return jsonSerializer_.stringify(payload);
    };
    getResult = async (response, jsonSerializer) => {
      let contentType;
      response.headers.forEach((value, key) => {
        if (key.toLowerCase() === `content-type`) {
          contentType = value;
        }
      });
      if (contentType && (contentType.toLowerCase().startsWith(`application/json`) || contentType.toLowerCase().startsWith(`application/graphql+json`) || contentType.toLowerCase().startsWith(`application/graphql-response+json`))) {
        return jsonSerializer.parse(await response.text());
      } else {
        return response.text();
      }
    };
    callOrIdentity = (value) => {
      return typeof value === `function` ? value() : value;
    };
  }
});

// repos.ts
async function onRequestGet({ env }) {
  try {
    const value = env.REACT_APP_GITHUB_TOKEN;
    if (value === void 0) {
      throw new Error("GitHub token is undefined");
    }
    const client = new GraphQLClient("https://api.github.com/graphql", {
      fetch
    });
    return Response.json({
      statusCode: 200,
      body: JSON.stringify("hi")
    });
  } catch (error) {
    console.error("Error in handler:", error);
    return Response.json({
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" })
    });
  }
}
var init_repos = __esm({
  "repos.ts"() {
    "use strict";
    init_functionsRoutes_0_20675159254189213();
    init_checked_fetch();
    init_modules_watch_stub();
    init_esm();
  }
});

// ../.wrangler/tmp/pages-HRVmji/functionsRoutes-0.20675159254189213.mjs
var routes;
var init_functionsRoutes_0_20675159254189213 = __esm({
  "../.wrangler/tmp/pages-HRVmji/functionsRoutes-0.20675159254189213.mjs"() {
    "use strict";
    init_repos();
    routes = [
      {
        routePath: "/repos",
        mountPath: "/",
        method: "GET",
        middlewares: [],
        modules: [onRequestGet]
      }
    ];
  }
});

// ../.wrangler/tmp/bundle-NSeaCk/middleware-loader.entry.ts
init_functionsRoutes_0_20675159254189213();
init_checked_fetch();
init_modules_watch_stub();

// ../.wrangler/tmp/bundle-NSeaCk/middleware-insertion-facade.js
init_functionsRoutes_0_20675159254189213();
init_checked_fetch();
init_modules_watch_stub();

// ../node_modules/wrangler/templates/pages-template-worker.ts
init_functionsRoutes_0_20675159254189213();
init_checked_fetch();
init_modules_watch_stub();

// ../node_modules/wrangler/node_modules/path-to-regexp/dist.es2015/index.js
init_functionsRoutes_0_20675159254189213();
init_checked_fetch();
init_modules_watch_stub();
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
function parse2(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
  var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    };
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse2(path, options), keys, options);
}
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            route += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
          } else {
            route += "(".concat(token.pattern, ")").concat(token.modifier);
          }
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}

// ../node_modules/wrangler/templates/pages-template-worker.ts
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: () => {
            isFailOpen = true;
          }
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    };
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = (response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
);

// ../node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_functionsRoutes_0_20675159254189213();
init_checked_fetch();
init_modules_watch_stub();
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;
var wrap2 = void 0;

// ../node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_functionsRoutes_0_20675159254189213();
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var wrap3 = void 0;

// ../.wrangler/tmp/bundle-NSeaCk/middleware-insertion-facade.js
var envWrappers = [wrap2, wrap3].filter(Boolean);
var facade = {
  ...pages_template_worker_default,
  envWrappers,
  middleware: [
    middleware_ensure_req_body_drained_default,
    middleware_miniflare3_json_error_default,
    ...pages_template_worker_default.middleware ? pages_template_worker_default.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default = facade;

// ../node_modules/wrangler/templates/middleware/common.ts
init_functionsRoutes_0_20675159254189213();
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// ../.wrangler/tmp/bundle-NSeaCk/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__ = function(request, env, ctx) {
  if (middleware_insertion_facade_default.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default.fetch(request, env, ctx);
};
function getMaskedEnv(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default.envWrappers && middleware_insertion_facade_default.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware = false;
var facade2 = {
  ...middleware_insertion_facade_default.tail && {
    tail: maskHandlerEnv(middleware_insertion_facade_default.tail)
  },
  ...middleware_insertion_facade_default.trace && {
    trace: maskHandlerEnv(middleware_insertion_facade_default.trace)
  },
  ...middleware_insertion_facade_default.scheduled && {
    scheduled: maskHandlerEnv(middleware_insertion_facade_default.scheduled)
  },
  ...middleware_insertion_facade_default.queue && {
    queue: maskHandlerEnv(middleware_insertion_facade_default.queue)
  },
  ...middleware_insertion_facade_default.test && {
    test: maskHandlerEnv(middleware_insertion_facade_default.test)
  },
  ...middleware_insertion_facade_default.email && {
    email: maskHandlerEnv(middleware_insertion_facade_default.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv(rawEnv);
    if (middleware_insertion_facade_default.middleware && middleware_insertion_facade_default.middleware.length > 0) {
      if (!registeredMiddleware) {
        registeredMiddleware = true;
        for (const middleware of middleware_insertion_facade_default.middleware) {
          __facade_register__(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__
      );
    } else {
      return __facade_modules_fetch__(request, env, ctx);
    }
  }
};
function maskHandlerEnv(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv(env), ctx);
}
var middleware_loader_entry_default = facade2;
export {
  middleware_loader_entry_default as default
};
//# sourceMappingURL=functionsWorker-0.24426619703332464.mjs.map
