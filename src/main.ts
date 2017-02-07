'use strict';
import * as vscode from 'vscode';
import { window, workspace, commands, ExtensionContext } from 'vscode';
import { PapyrusHelloFeature } from './features/papyrusHello';
import { WordCounter, WordCounterController, WordCountFeature } from './features/papyrusWordCount';
import { PapyrusPreviewFeature } from './features/papyrusPreview';


export function activate(context: ExtensionContext) {
	new PapyrusHelloFeature(context);
	new WordCountFeature(context);
	new PapyrusPreviewFeature(context);

    console.log('The extension "papyrus-code" is now active.');
    console.log('context.extensionPath '+context.extensionPath);
    console.log('context.storagePath '+context.storagePath);
	console.log('context.subscriptions: Length='+context.subscriptions.length);
}


export function deactivate() {
    console.log('The extension "papyrus-code" is now deactivated.');
}
