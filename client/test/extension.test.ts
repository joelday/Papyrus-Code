//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
import * as vscode from 'vscode';

// You can import your extension to test it
import * as extension from '../src/extension';
import PapyrusCode = extension.Extension;

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", () => {
    PapyrusCode.Log("The VS Code version is " + vscode.version);

    // Defines a Mocha unit test
    test("Something 1", () => {
        PapyrusCode.Log("Running mocha TDD framework.");
        assert.equal(-1, [1, 2, 3].indexOf(5));
        assert.equal(-1, [1, 2, 3].indexOf(0));
    });
});
