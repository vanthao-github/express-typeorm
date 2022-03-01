import { checkRoles } from './../middlewares/checkRole';

import {UserController} from "../controller/UserController";

export const UserRoutes = [{
	method: "get",
	route: "/users",
	controller: UserController,
	action: "all",
	middleware: [checkRoles],
}, {
	method: "get",
	route: "/users/:id",
	controller: UserController,
	action: "one",
}, {
	method: "post",
	route: "/users",
	controller: UserController,
	action: "save"
}, {
	method: "delete",
	route: "/users/:id",
	controller: UserController,
	action: "remove"
}];