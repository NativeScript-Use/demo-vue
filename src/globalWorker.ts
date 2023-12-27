import { isBoolean } from "@antfu/utils";
import { defineWorker } from '@nativescript-use/nativescript-task';
import '@nativescript/core/globals';
import { utils } from "./importExample";
defineWorker({ imports: { utils, isBoolean } });