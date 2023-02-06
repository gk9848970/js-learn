import { run } from "./App/app";
import { AlertService } from "./App/alert.service";
import { ComponentService } from "./App/component.service";

import './main.css';

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);