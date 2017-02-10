'use strict';
import * as vscode from 'vscode';
import { window, workspace, commands, ExtensionContext } from 'vscode';
import { PapyrusHelloFeature } from './features/papyrusHello';
import { PapyrusWordCountFeature } from './features/papyrusCount';
import { PapyrusPreviewFeature } from './features/papyrusPreview';
import { PapyrusCompileFeature } from './features/papyrusCompile';


export function activate(context: ExtensionContext) {
	new PapyrusHelloFeature(context);
	new PapyrusWordCountFeature(context);
	new PapyrusPreviewFeature(context);
	new PapyrusCompileFeature(context);

    console.log('The extension "papyrus-code" is now active.');
}


export function deactivate() {
    console.log('The extension "papyrus-code" is now deactivated.');
}
