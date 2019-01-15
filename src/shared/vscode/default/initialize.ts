/*!
 * Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict'

import { DefaultVSCodeContext } from '.'
import { ext } from '../../extensionGlobals'

ext.vscode = new DefaultVSCodeContext()