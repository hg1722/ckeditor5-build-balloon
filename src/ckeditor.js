/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';

export default class BalloonEditor extends BalloonEditorBase {}

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	Highlight
];

// Editor configuration.
BalloonEditor.defaultConfig = {
	toolbar: {
		items: [
			'highlight'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
