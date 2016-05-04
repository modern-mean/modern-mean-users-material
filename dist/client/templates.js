(function(){angular.module("users.templates").run(["$templateCache", function($templateCache) {$templateCache.put("modern-mean-users-material/views/admin/users.client.views.admin.grid.html","<md-content layout-padding layout-gt-sm=\"column\" layout=\"row\">\n  <div flex=\"auto\" layout=\"column\">\n    <div ui-view=\"row-1-col-1\"></div>\n  </div>\n  <div flex=\"auto\" layout=\"column\">\n    <div ui-view=\"row-1-col-2\"></div>\n  </div>\n  <div flex=\"auto\" layout=\"column\">\n    <div ui-view=\"row-1-col-3\"></div>\n  </div>\n</md-content>\n\n<md-content layout-padding layout-gt-sm=\"column\" layout=\"row\">\n  <div flex=\"auto\" layout=\"column\">\n    <div ui-view=\"row-2-col-1\"></div>\n  </div>\n  <div flex=\"auto\" layout=\"column\">\n    <div ui-view=\"row-2-col-2\"></div>\n  </div>\n  <div flex=\"auto\" layout=\"column\">\n    <div ui-view=\"row-2-col-3\"></div>\n  </div>\n</md-content>\n\n<md-content layout-padding layout-gt-sm=\"column\" layout=\"row\">\n  <div flex=\"auto\" layout=\"column\">\n    <div ui-view=\"row-3-col-1\"></div>\n  </div>\n  <div flex=\"auto\" layout=\"column\">\n    <div ui-view=\"row-3-col-2\"></div>\n  </div>\n  <div flex=\"auto\" layout=\"column\">\n    <div ui-view=\"row-3-col-3\"></div>\n  </div>\n</md-content>\n");
$templateCache.put("modern-mean-users-material/views/admin/users.client.views.edit-user.html","<md-content layout-padding>\n  <h1 class=\"md-display-1\">Edit User: <span ng-bind=\"vm.user.email\"></span></h1>\n  <form name=\"userForm\" ng-submit=\"vm.update(userForm.$valid)\" novalidate>\n    <md-input-container class=\"md-block\">\n      <input type=\"text\" id=\"firstName\" name=\"firstName\" ng-model=\"vm.user.firstName\" placeholder=\"First Name\" required>\n      <div ng-messages=\"userForm.firstName.$error\" role=\"alert\">\n        <div ng-message=\"required\">First name is required.</div>\n      </div>\n    </md-input-container>\n    <md-input-container class=\"md-block\">\n      <input type=\"text\" id=\"lastName\" name=\"lastName\" ng-model=\"vm.user.lastName\" placeholder=\"Last Name\" required>\n      <div ng-messages=\"userForm.lastName.$error\" role=\"alert\">\n        <div ng-message=\"required\">Last name is required.</div>\n      </div>\n    </md-input-container>\n    <md-input-container class=\"md-block\">\n      <input type=\"text\" name=\"roles\" ng-model=\"vm.user.roles\" id=\"roles\" placeholder=\"Roles\" ng-list required>\n      <div ng-messages=\"userForm.roles.$error\" role=\"alert\">\n        <div ng-message=\"required\">At least one role is required.</div>\n      </div>\n    </md-input-container>\n    <section layout=\"row\" layout-align=\"center center\">\n      <md-button type=\"submit\" value=\"Update\" class=\"md-raised md-primary\" aria-label=\"Update\"> Update </md-button>\n      or\n      <md-button ui-sref=\"admin.user({userId: vm.user._id})\" class=\"md-raised\" aria-label=\"Go back\">go back</md-button>\n    </section>\n    <section layout=\"row\" layout-align=\"center center\" ng-show=\"vm.error\">\n      <strong ng-bind=\"vm.error\"></strong>\n    </section>\n  </form>\n</md-content>\n");
$templateCache.put("modern-mean-users-material/views/admin/users.client.views.list-users.html","<md-content layout-padding>\n  <h1 class=\"md-display-1\">User List</h1>\n  <md-input-container class=\"md-block\">\n    <input type=\"text\" ng-model=\"vm.search\" placeholder=\"User Search\" ng-change=\"vm.figureOutItemsToDisplay()\" />\n  </md-input-container>\n  <md-list>\n    <md-list-item class=\"md-2-line\" ng-repeat=\"user in vm.pagedItems\" ui-sref=\"admin.user({userId: user._id})\">\n      <img class=\"md-avatar\" ng-src=\"{{user.profileImageURL}}\">\n      <div class=\"md-list-item-text\" layout=\"column\">\n        <h4>{{user.displayName}} <{{user.email}}></h4>\n        <p>Roles: <span ng-bind=\"user.roles\"></span></p>\n      </div>\n    </md-list-item>\n  </md-list>\n  <md-pagination item-total=\"vm.filterLength\" goto-page=\"vm.pageChanged()\" position=\"center\" current-page=\"vm.currentPage\" step=\"vm.itemsPerPage\"></md-pagination>\n</md-content>\n");
$templateCache.put("modern-mean-users-material/views/admin/users.client.views.view-user.html","<md-content layout-padding>\n  <div layout=\"row\">\n    <div layout=\"column\" flex>\n      <h1 class=\"md-display-1\" ng-bind=\"vm.user.email\"></h1>\n    </div>\n    <div layout=\"column\">\n      <div layout=\"row\" style=\"padding-top: 1em;\">\n        <md-button class=\"md-fab md-raised md-accent\" aria-label=\"Edit\" ui-sref=\"admin.user-edit({userId: vm.user._id})\">\n          <ng-md-icon icon=\"edit\"></ng-md-icon>\n        </md-button>\n        <md-button class=\"md-fab md-raised md-warn\" aria-label=\"Remove\" ng-click=\"vm.remove();\" ng-if=\"user._id !== vm.authentication.user._id\">\n          <ng-md-icon icon=\"delete\"><ng-md-icon>\n        </md-button>\n      </div>\n    </div>\n  </div>\n  <md-list>\n    <md-list-item class=\"md-2-line\">\n      <div class=\"md-list-item-text\" layout=\"column\">\n        <h3 class=\"md-title\">First Name</h3>\n        <h4 ng-bind=\"vm.user.firstName\"></h4>\n      </div>\n    </md-list-item>\n    <md-divider ></md-divider>\n    <md-list-item class=\"md-2-line\">\n      <div class=\"md-list-item-text\" layout=\"column\">\n        <h3 class=\"md-title\">Last Name</h3>\n        <h4 ng-bind=\"vm.user.lastName\"></h4>\n      </div>\n    </md-list-item>\n    <md-divider ></md-divider>\n    <md-list-item class=\"md-2-line\">\n      <div class=\"md-list-item-text\" layout=\"column\">\n        <h3 class=\"md-title\">Email</h3>\n        <h4 ng-bind=\"vm.user.email\"></h4>\n      </div>\n    </md-list-item>\n    <md-divider ></md-divider>\n    <md-list-item class=\"md-2-line\">\n      <div class=\"md-list-item-text\" layout=\"column\">\n        <h3 class=\"md-title\">Provider</h3>\n        <h4 ng-bind=\"vm.user.provider\"></h4>\n      </div>\n    </md-list-item>\n    <md-divider ></md-divider>\n    <md-list-item class=\"md-2-line\">\n      <div class=\"md-list-item-text\" layout=\"column\">\n        <h3 class=\"md-title\">Created</h3>\n        <h4 ng-bind=\"vm.user.created\"></h4>\n      </div>\n    </md-list-item>\n    <md-divider ></md-divider>\n    <md-list-item class=\"md-2-line\">\n      <div class=\"md-list-item-text\" layout=\"column\">\n        <h3 class=\"md-title\">Roles</h3>\n        <h4 ng-bind=\"vm.user.roles\"></h4>\n      </div>\n    </md-list-item>\n  </md-list>\n  <md-button ui-sref=\"admin.users\" class=\"md-raised\" aria-label=\"Go back\">go back</md-button>\n</md-content>\n");
$templateCache.put("modern-mean-users-material/views/authentication/users.client.views.authentication.html","<md-content flex>\n  <md-tabs md-dynamic-height md-border-bottom md-selected=\"vm.selected\">\n    <md-tab label=\"Sign In\" >\n      <div ui-view=\"signin\"></div>\n    </md-tab>\n    <md-tab label=\"Sign Up\">\n      <div ui-view=\"signup\"></div>\n    </md-tab>\n  </md-tabs>\n</md-content>\n");
$templateCache.put("modern-mean-users-material/views/authentication/users.client.views.authentication.signin.html","<md-dialog aria-label=\"Sign In\"  ng-cloak>\n  <md-toolbar class=\"md-accent\">\n    <div class=\"md-toolbar-tools\">\n        <h2>Signin</h2>\n        <span flex></span>\n        <md-button class=\"md-icon-button\" ng-click=\"vm.cancel()\">\n          <ng-md-icon icon=\"close\"></ng-md-icon>\n        </md-button>\n      </div>\n  </md-toolbar>\n  <md-dialog-actions layout=\"row\" layout-align=\"center\">\n    <md-button class=\"md-fab md-mini md-accent md-raised\">\n      <md-tooltip md-direction=\"top\">\n        Facebook\n      </md-tooltip>\n      <ng-md-icon icon=\"facebook\"></ng-md-icon>\n    </md-button>\n    <md-button class=\"md-fab md-mini md-accent md-raised\">\n      <md-tooltip md-direction=\"top\">\n        Twitter\n      </md-tooltip>\n      <ng-md-icon icon=\"twitter\"></ng-md-icon>\n    </md-button>\n    <md-button class=\"md-fab md-mini md-accent md-raised\">\n      <md-tooltip md-direction=\"top\">\n        Google\n      </md-tooltip>\n      <ng-md-icon icon=\"google-plus\"></ng-md-icon>\n    </md-button>\n    <md-button class=\"md-fab md-mini md-accent md-raised\">\n      <md-tooltip md-direction=\"top\">\n        LinkedIn\n      </md-tooltip>\n      <ng-md-icon icon=\"linkedin\"></ng-md-icon>\n    </md-button>\n    <md-button class=\"md-fab md-mini md-accent md-raised\">\n      <md-tooltip md-direction=\"top\">\n        Github\n      </md-tooltip>\n      <ng-md-icon icon=\"github-circle\"></ng-md-icon>\n    </md-button>\n  </md-dialog-actions>\n  <md-dialog-content>\n    <div class=\"md-dialog-content\">\n      <form name=\"vm.forms.signIn\" novalidate>\n        <md-input-container class=\"md-block\">\n          <input type=\"email\" id=\"email\" name=\"email\" ng-model=\"vm.credentials.email\" placeholder=\"email address\" required>\n          <div ng-messages=\"vm.forms.signIn.email.$error\" role=\"alert\">\n            <div ng-message=\"required\">email is required.</div>\n          </div>\n        </md-input-container>\n        <md-input-container class=\"md-block\">\n          <input type=\"password\" id=\"password\" name=\"password\" ng-model=\"vm.credentials.password\" placeholder=\"password\" required>\n          <div ng-messages=\"vm.forms.signIn.password.$error\" role=\"alert\">\n            <div ng-message=\"required\">Password is required.</div>\n          </div>\n        </md-input-container>\n      </form>\n    </div>\n  </md-dialog-content>\n  <md-dialog-actions layout=\"row\" md-theme=\"card-actions\" layout-align=\"center\">\n    <md-button ng-click=\"vm.signin()\" class=\"md-raised md-primary\" aria-label=\"Sign In\" ng-disabled=\"vm.forms.signIn.$invalid\">Sign in</md-button>\n    <md-button ng-click=\"vm.clearForm()\" class=\"md-raised md-warn\" aria-label=\"Clear Form\">Clear</md-button>\n    <md-button class=\"md-raised md-accent\" aria-label=\"Forgot Password\">\n      Forgot Password\n      <ng-md-icon icon=\"help\"></ng-md-icon>\n    </md-button>\n  </md-dialog-actions>\n</md-dialog>\n");
$templateCache.put("modern-mean-users-material/views/authentication/users.client.views.authentication.signup.html","<md-dialog aria-label=\"Sign In\"  ng-cloak>\n  <md-toolbar class=\"md-accent\">\n    <div class=\"md-toolbar-tools\">\n        <h2>Sign Up</h2>\n        <span flex></span>\n        <md-button class=\"md-icon-button\" ng-click=\"vm.cancel()\">\n          <ng-md-icon icon=\"close\"></ng-md-icon>\n        </md-button>\n      </div>\n  </md-toolbar>\n  <md-dialog-actions layout=\"row\" layout-align=\"center\">\n    <md-button class=\"md-fab md-mini md-accent md-raised\">\n      <md-tooltip md-direction=\"top\">\n        Facebook\n      </md-tooltip>\n      <ng-md-icon icon=\"facebook\"></ng-md-icon>\n    </md-button>\n    <md-button class=\"md-fab md-mini md-accent md-raised\">\n      <md-tooltip md-direction=\"top\">\n        Twitter\n      </md-tooltip>\n      <ng-md-icon icon=\"twitter\"></ng-md-icon>\n    </md-button>\n    <md-button class=\"md-fab md-mini md-accent md-raised\">\n      <md-tooltip md-direction=\"top\">\n        Google\n      </md-tooltip>\n      <ng-md-icon icon=\"google-plus\"></ng-md-icon>\n    </md-button>\n    <md-button class=\"md-fab md-mini md-accent md-raised\">\n      <md-tooltip md-direction=\"top\">\n        LinkedIn\n      </md-tooltip>\n      <ng-md-icon icon=\"linkedin\"></ng-md-icon>\n    </md-button>\n    <md-button class=\"md-fab md-mini md-accent md-raised\">\n      <md-tooltip md-direction=\"top\">\n        Github\n      </md-tooltip>\n      <ng-md-icon icon=\"github-circle\"></ng-md-icon>\n    </md-button>\n  </md-dialog-actions>\n  <md-dialog-content>\n    <div class=\"md-dialog-content\">\n      <form name=\"vm.forms.signUp\" novalidate>\n        <md-input-container class=\"md-block\">\n          <input type=\"text\" id=\"firstName\" name=\"firstName\" ng-model=\"vm.user.name.first\" placeholder=\"First Name\" required>\n          <div ng-messages=\"vm.forms.signUp.firstName.$error\" role=\"alert\">\n            <div ng-message=\"required\">First name is required.</div>\n          </div>\n        </md-input-container>\n        <md-input-container class=\"md-block\">\n          <input type=\"text\" id=\"lastName\" name=\"lastName\" ng-model=\"vm.user.name.last\" placeholder=\"Last Name\" required>\n          <div ng-messages=\"vm.forms.signUp.lastName.$error\" role=\"alert\">\n            <div ng-message=\"required\">Last name is required.</div>\n          </div>\n        </md-input-container>\n        <md-input-container class=\"md-block\">\n          <input type=\"email\" id=\"email\" name=\"email\" ng-model=\"vm.user.email\" placeholder=\"Email address\" lowercase required>\n          <div ng-messages=\"vm.forms.signUp.email.$error\" role=\"alert\">\n            <div ng-message=\"required\">Email address is required.</div>\n            <div ng-message=\"email\">Email address is invalid.</div>\n          </div>\n        </md-input-container>\n        <md-input-container class=\"md-block\">\n          <input type=\"password\" id=\"password\" name=\"password\" ng-model=\"vm.user.password\" placeholder=\"Password\" uib-popover=\"{{vm.popoverMsg}}\" uib-popover-trigger=\"focus\" password-validator required>\n          <div ng-messages=\"vm.forms.signUp.password.$error\" role=\"alert\">\n            <div ng-message=\"required\">Password is required.</div>\n            <div ng-repeat=\"passwordError in passwordErrors\">\n              <div ng-show=\"vm.forms.signUp.password.$error.requirements\">{{passwordError}}</div>\n            </div>\n          </div>\n        </md-input-container>\n      </form>\n    </div>\n  </md-dialog-content>\n  <md-dialog-actions layout=\"row\" md-theme=\"card-actions\" layout-align=\"center\">\n    <md-button ng-click=\"vm.signup()\" class=\"md-raised md-primary\" aria-label=\"Sign Up\" ng-disabled=\"vm.forms.signUp.$invalid\">Sign Up</md-button>\n    <md-button ng-click=\"vm.clearForm()\" class=\"md-raised md-warn\" aria-label=\"Clear Form\">Clear</md-button>\n  </md-dialog-actions>\n</md-dialog>\n");
$templateCache.put("modern-mean-users-material/views/authentication/users.client.views.authentication.social.html","<md-toolbar>\n  <div class=\"md-toolbar-tools\">\n    <h2 class=\"md-title\">Sign in using your social accounts</h2>\n  </div>\n</md-toolbar>\n<md-content>\n  <h2 class=\"md-title\">Sign in using your social accounts</h2>\n  <img ng-click=\"vm.callOauthProvider(\'/api/auth/facebook\')\" ng-src=\"/dist/img/modern-mean-users-material/buttons/facebook.png\">\n  <img ng-click=\"vm.callOauthProvider(\'/api/auth/twitter\')\" ng-src=\"/dist/img/modern-mean-users-material/buttons/twitter.png\">\n  <img ng-click=\"vm.callOauthProvider(\'/api/auth/google\')\" ng-src=\"/dist/img/modern-mean-users-material/buttons/google.png\">\n  <img ng-click=\"vm.callOauthProvider(\'/api/auth/linkedin\')\" ng-src=\"/dist/img/modern-mean-users-material/buttons/linkedin.png\">\n  <img ng-click=\"vm.callOauthProvider(\'/api/auth/github\')\" ng-src=\"/dist/img/modern-mean-users-material/buttons/github.png\">\n  <img ng-click=\"vm.callOauthProvider(\'/api/auth/paypal\')\"  ng-src=\"/dist/img/modern-mean-users-material/buttons/paypal.png\">\n  \n</md-content>\n");
$templateCache.put("modern-mean-users-material/views/cards/users.client.views.cards.admin.users.html","<md-card>\n  <md-card-header>\n    <md-card-header-text>\n      <span class=\"md-headline\">Manage Users</span>\n    </md-card-header-text>\n    <md-card-title-media>\n      <ng-md-icon icon=\"account_box\"></ng-md-icon>\n    </md-card-title-media>\n  </md-card-header>\n  <md-divider></md-divider>\n  <md-card-content>\n    <p>Add/Upade/Delete Users</p>\n  </md-card-content>\n  <md-card-actions layout=\"row\" layout-align=\"end center\">\n    <md-button class=\"md-raised md-accent\" ui-sref=\"root.admin.users\">Manage</md-button>\n  </md-card-actions>\n</md-card>\n");
$templateCache.put("modern-mean-users-material/views/navigation/users.client.views.navigation.header.html","<md-toolbar layout=\"row\" class=\"md-toolbar-tools md-whiteframe-z2 md-primary md-hue-2\">\n  <md-button ng-show=\"!vm.navigation.left.isLockedOpen()\" class=\"md-fab md-mini md-accent md-raised\" aria-label=\"Leftnav Menu\" ng-click=\"vm.navigation.left.open()\">\n    <ng-md-icon icon=\"menu\"></ng-md-icon>\n  </md-button>\n  <span flex=\"none\" style=\"font-weight: 900; font-size: 1.2em;letter-spacing: -.05em\" hide-xs>MODERN-MEAN</span>\n  <span flex></span>\n  <md-button class=\"md-fab md-mini md-warn\" ng-show=\"vm.authentication.token && vm.isAdmin\" class=\"md-icon-button\" aria-label=\"Admin Dashboard\" ui-sref=\"root.admin.dashboard\">\n    <ng-md-icon icon=\"security\"></ng-md-icon>\n  </md-button>\n\n  <md-fab-speed-dial class=\"md-scale md-hover-full\" md-open=\"vm.userMenu.open\" md-direction=\"left\" ng-mouseenter=\"vm.userMenu.open=true\" ng-mouseleave=\"vm.userMenu.open=false\">\n    <md-fab-trigger>\n      <md-button ng-if=\"!vm.authentication.token\" class=\"md-fab md-mini\" aria-label=\"User Menu\">\n        <ng-md-icon icon=\"account_circle\"></ng-md-icon>\n      </md-button>\n      <md-button ng-if=\"vm.authentication.token\" aria-label=\"User Menu\" >\n        <img style=\"border-radius: 50%;width: 60px;height: auto;\" ng-src=\"{{vm.authentication.user.profileImageURL}}\" alt=\"Profile Image\" />\n      </md-button>\n    </md-fab-trigger>\n    <md-fab-actions ng-if=\"!vm.authentication.token\">\n      <md-button aria-label=\"Sign In\" class=\"md-fab md-raised md-mini md-primary md-hue-1\" ng-click=\"vm.signin()\">\n        <md-tooltip md-direction=\"bottom\">\n          Sign In\n        </md-tooltip>\n        <ng-md-icon icon=\"person\"></ng-md-icon>\n      </md-button>\n      <md-button aria-label=\"Sign Up\" class=\"md-fab md-raised md-mini md-primary md-hue-1\" ng-click=\"vm.signup()\">\n        <md-tooltip md-direction=\"bottom\">\n          Sign Up\n        </md-tooltip>\n        <ng-md-icon icon=\"person_add\"></ng-md-icon>\n      </md-button>\n    </md-fab-actions>\n    <md-fab-actions ng-if=\"vm.authentication.token\">\n      <md-button aria-label=\"User Settings\" class=\"md-fab md-raised md-mini md-primary md-hue-1\" ui-sref=\"root.user.settings\">\n        <md-tooltip md-direction=\"bottom\">\n          Profile\n        </md-tooltip>\n        <ng-md-icon icon=\"settings\"></ng-md-icon>\n      </md-button>\n      <md-button aria-label=\"Sign Out\" class=\"md-fab md-raised md-mini md-primary md-hue-1\" ng-click=\"vm.signout()\">\n        <md-tooltip md-direction=\"bottom\">\n          Log Out\n        </md-tooltip>\n        <ng-md-icon icon=\"logout\"></ng-md-icon>\n      </md-button>\n    </md-fab-actions>\n  </md-fab-speed-dial>\n</md-toolbar>\n");
$templateCache.put("modern-mean-users-material/views/navigation/users.client.views.navigation.rightnav.html","<md-sidenav md-component-id=\"coreRightNav\" class=\"md-sidenav-right md-whiteframe-z2\">\n  <md-toolbar class=\"md-theme-blue-grey md-hue-3\">\n    <h1 class=\"md-toolbar-tools\">\n      <md-button class=\"md-icon-button md-mini\" ng-click=\"vm.navigation.close()\" aria-label=\"Close menu\">\n        <ng-md-icon icon=\"close\"></ng-md-icon>\n      </md-button>\n      <span flex></span>\n      <span style=\"font-weight: 700; font-size: 1.2em\">User Menu</span>\n    </h1>\n  </md-toolbar>\n  <md-list ng-show=\"!vm.authentication.token\">\n    <md-list-item ui-sref=\"root.user.authentication.type({ type: \'signin\' })\" >\n      <ng-md-icon icon=\"home\"></ng-md-icon>\n      <span flex></span>\n      <span>Sign In</span>\n    </md-list-item>\n    <md-list-item ui-sref=\"root.user.authentication.type({ type: \'signup\' })\" >\n      <ng-md-icon icon=\"home\"></ng-md-icon>\n      <span flex></span>\n      <span>Sign Up</span>\n    </md-list-item>\n  </md-list>\n  <md-list ng-show=\"vm.authentication.token\">\n    <md-list-item ui-sref=\"root.user.settings\" >\n      <ng-md-icon icon=\"settings\"></ng-md-icon>\n      <span flex></span>\n      <span>Settings</span>\n    </md-list-item>\n    <md-divider></md-divider>\n    <md-list-item ng-click=\"vm.signout()\" >\n      <ng-md-icon icon=\"home\"></ng-md-icon>\n      <span flex></span>\n      <span>Signout</span>\n    </md-list-item>\n  </md-list>\n</md-sidenav>\n");
$templateCache.put("modern-mean-users-material/views/password/users.client.views.forgot-password.html","<md-content layout-padding>\n  <h1 class=\"md-display-1\">Forgot your password</h1>\n  <p class=\"md-title\">Please your account email address. We will send you your signin credentials.</p>\n  <form name=\"forgotPasswordForm\" ng-submit=\"vm.askForPasswordReset(forgotPasswordForm.$valid)\" novalidate autocomplete=\"off\">\n    <md-input-container class=\"md-block\">\n      <input type=\"email\" id=\"email\" name=\"email\" ng-model=\"vm.credentials.email\" placeholder=\"email address\" lowercase required>\n      <div ng-messages=\"forgotPasswordForm.email.$error\" role=\"alert\">\n        <div ng-message=\"required\">Enter an email address.</div>\n      </div>\n    </md-input-container>\n    <section layout=\"row\" layout-align=\"center center\">\n      <md-button type=\"submit\" class=\"md-raised md-primary\" aria-label=\"Submit\">Submit</md-button>\n    </section>\n    <section layout=\"row\" layout-align=\"center center\" ng-show=\"vm.error\">\n      <strong ng-bind=\"vm.error\"></strong>\n    </section>\n    <section layout=\"row\" layout-align=\"center center\" div ng-show=\"vm.success\">\n      <strong ng-bind=\"vm.success\"></strong>\n    </section>\n  </form>\n</md-content>\n");
$templateCache.put("modern-mean-users-material/views/password/users.client.views.reset-password-invalid.html","<md-content layout-padding>\n  <h1 class=\"md-display-2\">Password reset is invalid</h3>\n  <section layout=\"row\" layout-align=\"center center\">\n    <md-button ui-sref=\"password.forgot\" class=\"md-raised md-primary\" aria-label=\"Reset Password\">Ask for a new password reset</md-button>\n  </section>\n</md-content>\n");
$templateCache.put("modern-mean-users-material/views/password/users.client.views.reset-password-success.html","<md-content layout-padding>\n  <h1 class=\"md-display-2\">Password successfully reset</h1>\n  <section layout=\"row\" layout-align=\"center center\">\n    <md-button ui-sref=\"home\" class=\"md-raised md-primary\" aria-label=\"Continue to homepage\">Continue to home page</md-button>\n  </section>\n</md-content>\n");
$templateCache.put("modern-mean-users-material/views/password/users.client.views.reset-password.html","<md-content layout-padding>\n  <h1 class=\"md-display-1\">Reset your password</h1>\n  <form name=\"resetPasswordForm\" ng-submit=\"vm.resetUserPassword(resetPasswordForm.$valid)\" novalidate autocomplete=\"off\">\n    <md-input-container class=\"md-block\">\n      <input type=\"password\" id=\"newPassword\" name=\"newPassword\" ng-model=\"vm.passwordDetails.newPassword\" placeholder=\"New Password\" autocomplete=\"new-password\" password-validator required>\n      <md-tooltip md-direction=\"top\">{{popupMSG}}</md-tooltip>\n      <div ng-messages=\"resetPasswordForm.newPassword.$error\" role=\"alert\">\n        <div ng-message=\"required\">Enter a new password.</div>\n        <div ng-repeat=\"passwordError in passwordErrors\">\n          <div ng-show=\"resetPasswordForm.newPassword.$error.requirements\">{{passwordError}}</div>\n        </div>\n      </div>\n    </md-input-container>\n    <md-input-container class=\"md-block\">\n      <input type=\"password\" id=\"verifyPassword\" name=\"verifyPassword\" ng-model=\"vm.passwordDetails.verifyPassword\" placeholder=\"Verify Password\" password-verify=\"passwordDetails.newPassword\" required>\n      <div ng-messages=\"resetPasswordForm.verifyPassword.$error\" role=\"alert\">\n        <div ng-message=\"required\">Enter the password again to verify.</div>\n        <div ng-show=resetPasswordForm.verifyPassword.$error.passwordVerify>Passwords do not match.</div>\n      </div>\n    </md-input-container>\n    <section layout=\"row\" layout-align=\"center center\">\n      <md-button type=\"submit\" aria-label=\"Update Passowrd\" class=\"md-raised md-primary\">Update Password</md-button>\n    </section>\n    <section layout=\"row\" layout-align=\"center center\" ng-show=\"vm.error\">\n      <strong ng-bind=\"vm.error\"></strong>\n    </section>\n    <section layout=\"row\" layout-align=\"center center\" ng-show=\"vm.success\">\n      <strong ng-bind=\"vm.success\"></strong>\n    </section>\n  </form>\n</md-content>\n");
$templateCache.put("modern-mean-users-material/views/settings/users.client.views.manage-social-accounts.html","<md-toolbar class=\"md-warn\">\n  <div class=\"md-toolbar-tools\">\n    <h2 class=\"md-flex\">Social Accounts do not work.  Server side needs to be reworked for JWT</h2>\n  </div>\n</md-toolbar>\n<md-content>\n  <h1 class=\"md-display-1\" ng-show=\"vm.user.additionalProvidersData\">Connected social accounts:</h1>\n  <div class=\"col-md-12 text-center\">\n    <div  class=\"social-account-container\">\n      <img ng-src=\"/dist/img/users/client/img/buttons/{{providerName}}.png\">\n      <a class=\"btn btn-danger btn-remove-account\" ng-click=\"vm.removeUserSocialAccount(providerName)\">\n        <i class=\"glyphicon glyphicon-trash\"></i>\n      </a>\n    </div>\n  </div>\n  <h1 class=\"md-display-1\">Unconnected social accounts:</h1>\n  <div class=\"col-md-12 text-center\">\n    <div class=\"social-account-container\" ng-repeat=\"provider in vm.providers\">\n      <a class=\"btn btn-success\" ng-href=\"/api/auth/{{provider.name}}\" target=\"_self\">\n        <i class=\"glyphicon glyphicon-plus\"></i><img ng-src=\"{{provider.image}}\">\n      </a>\n    </div>\n  </div>\n</section>\n");
$templateCache.put("modern-mean-users-material/views/settings/users.client.views.settings.addresses.html","\n<md-list ng-show=\'!vm.editing\'>\n  <md-subheader class=\"md-no-sticky\">Shipping</md-subheader>\n  <md-list-item class=\"md-3-line\" ng-repeat=\"address in vm.user.addresses | filter: { addressType: \'Shipping\' }\">\n     <div class=\"md-list-item-text\" layout=\"column\">{{ address.streetAddress }} {{ address.extendedAddress }} {{ address.locality }} {{ address.region }} {{ address.postalCode }} {{ address.country }}</div>\n     <md-button class=\"md-secondary md-icon-button md-accent\">\n       <ng-md-icon icon=\"mode_edit\" ng-click=\"vm.edit(address)\"></ng-md-icon>\n     </md-button>\n     <md-button class=\"md-secondary md-icon-button md-warn\">\n       <ng-md-icon icon=\"delete\" ng-click=\"vm.remove(address)\"></ng-md-icon>\n     </md-button>\n  </md-list-item>\n  <md-subheader class=\"md-no-sticky\">Billing</md-subheader>\n  <md-list-item ng-repeat=\"address in vm.user.addresses | filter: { addressType: \'Billing\' }\">\n    <div class=\"md-list-item-text\" layout=\"column\">{{ address.streetAddress }} {{ address.extendedAddress }} {{ address.locality }} {{ address.region }} {{ address.postalCode }} {{ address.country }}</div>\n    <md-button class=\"md-secondary md-icon-button md-accent\">\n      <ng-md-icon icon=\"mode_edit\" ng-click=\"vm.edit(address)\"></ng-md-icon>\n    </md-button>\n    <md-button class=\"md-secondary md-icon-button md-warn\">\n      <ng-md-icon icon=\"delete\" ng-click=\"vm.remove(address)\"></ng-md-icon>\n    </md-button>\n  </md-list-item>\n</md-list>\n<form ng-show=\"vm.editing\" name=\"vm.forms.addressForm\" novalidate>\n  <md-input-container class=\"md-block\" flex>\n    <label>Type</label>\n    <md-select name=\"addressType\" ng-model=\"vm.address.addressType\" required>\n      <md-option value=\"\"></md-option>\n      <md-option value=\"Shipping\">Shipping</md-option>\n      <md-option value=\"Billing\">Billing</md-option>\n    </md-select>\n    <div ng-messages=\"vm.forms.addressForm.addressType.$error\" role=\"alert\">\n      <div ng-message=\"required\">Address type is required</div>\n    </div>\n  </md-input-container>\n  <md-input-container class=\"md-block\">\n    <label>Street Address</label>\n    <input type=\"text\" name=\"streetAddress\" ng-model=\"vm.address.streetAddress\" required>\n    <div ng-messages=\"vm.forms.addressForm.streetAddress.$error\" role=\"alert\">\n      <div ng-message=\"required\">Street address is required</div>\n    </div>\n  </md-input-container>\n  <md-input-container class=\"md-block\">\n    <label>Extended Address</label>\n    <input type=\"text\" name=\"extendedAddress\" ng-model=\"vm.address.extendedAddress\">\n  </md-input-container>\n  <div layout-gt-sm=\"row\">\n    <md-input-container class=\"md-block\" flex-gt-sm>\n      <label>City</label>\n      <input type=\"text\" name=\"city\" ng-model=\"vm.address.locality\" required>\n      <div ng-messages=\"vm.forms.addressForm.city.$error\" role=\"alert\">\n        <div ng-message=\"required\">City is required</div>\n      </div>\n    </md-input-container>\n    <md-input-container class=\"md-block\" flex-gt-sm>\n      <label>State</label>\n      <input type=\"text\" name=\"state\" ng-model=\"vm.address.region\" required>\n      <div ng-messages=\"vm.forms.addressForm.state.$error\" role=\"alert\">\n        <div ng-message=\"required\">Street address is required</div>\n      </div>\n    </md-input-container>\n    <md-input-container class=\"md-block\" flex-gt-sm>\n      <label>Postal Code</label>\n      <input type=\"text\" name=\"postalCode\" ng-model=\"vm.address.postalCode\" required>\n      <div ng-messages=\"vm.forms.addressForm.postalCode.$error\" role=\"alert\">\n        <div ng-message=\"required\">Postal code is required</div>\n      </div>\n    </md-input-container>\n    <md-input-container class=\"md-block\" flex-gt-sm>\n      <label>Country</label>\n      <input type=\"text\" name=\"country\" ng-model=\"vm.address.country\" required>\n      <div ng-messages=\"vm.forms.addressForm.country.$error\" role=\"alert\">\n        <div ng-message=\"required\">Country is required</div>\n      </div>\n    </md-input-container>\n  </div>\n</form>\n\n<md-button ng-show=\"!vm.editing\" ng-disabled=\"vm.executing\" class=\"md-raised md-accent\" ng-click=\"vm.editing = true\">Add</md-button>\n<md-button ng-disabled=\"vm.executing || vm.forms.addressForm.$pristine || vm.forms.addressForm.$invalid\" class=\"md-raised md-accent\" ng-click=\"vm.save()\">Save</md-button>\n<md-button ng-disabled=\"(vm.executing || vm.forms.addressForm.$pristine) && !vm.editing\" class=\"md-raised md-warn\" ng-click=\"vm.clear()\">Cancel</md-button>\n<md-progress-linear class=\"md-accent\" ng-show=\"vm.executing\" md-mode=\"indeterminate\"></md-progress-linear>\n");
$templateCache.put("modern-mean-users-material/views/settings/users.client.views.settings.emails.html","<form name=\"vm.forms.emailForm\" novalidate>\n  <div ng-repeat=\"email in vm.user.emails\" layout=\"row\">\n    <md-input-container class=\"md-block\" flex layout-margin>\n      <label>Email</label>\n      <input type=\"email\" name=\"email{{$index}}\" ng-model=\"vm.user.emails[$index].email\">\n    </md-input-container>\n    <md-input-container class=\"md-block\" layout-margin>\n      <label>Primary</label>\n      <md-switch ng-model=\"vm.user.emails[$index].primary\" aria-label=\"Primary Email {{$index}}\" ng-change=\"vm.togglePrimary(email)\"></md-switch>\n    </md-input-container>\n    <md-button class=\"md-icon-button md-warn\" aria-label=\"Remove Email\" layout-margin ng-click=\"vm.remove(email)\" ng-disabled=\"email.primary\">\n      <ng-md-icon icon=\"delete\" ></ng-md-icon>\n    </md-button>\n  </div>\n</form>\n<md-button ng-disabled=\"vm.executing\" class=\"md-raised md-accent\" ng-click=\"vm.add()\">Add</md-button>\n<md-button ng-disabled=\"vm.executing || vm.forms.emailForm.$pristine\" class=\"md-raised md-accent\" ng-click=\"vm.save()\">Save</md-button>\n<md-button ng-disabled=\"vm.executing || vm.forms.emailForm.$pristine\" class=\"md-raised md-warn\" ng-click=\"vm.clear()\">Cancel</md-button>\n<md-progress-linear class=\"md-accent\" ng-show=\"vm.executing\" md-mode=\"indeterminate\"></md-progress-linear>\n");
$templateCache.put("modern-mean-users-material/views/settings/users.client.views.settings.password.html","<form name=\"vm.forms.passwordForm\" novalidate autocomplete=\"off\">\n  <md-input-container class=\"md-block\">\n    <input type=\"password\" id=\"currentPassword\" name=\"currentPassword\"  ng-model=\"vm.password.currentPassword\" placeholder=\"Current Password\" required>\n    <div ng-messages=\"vm.forms.passwordForm.currentPassword.$error\" role=\"alert\">\n      <div ng-message=\"required\">Your current password is required.</div>\n    </div>\n  </md-input-container>\n  <md-input-container class=\"md-block\">\n    <input type=\"password\" id=\"newPassword\" name=\"newPassword\" ng-model=\"vm.password.newPassword\" placeholder=\"New Password\"  password-validator required>\n    <div ng-messages=\"vm.forms.passwordForm.newPassword.$error\" role=\"alert\">\n      <div ng-message=\"required\">Enter a new password.</div>\n      <div ng-repeat=\"passwordError in passwordErrors\">\n        <div ng-show=\"vm.forms.passwordForm.newPassword.$error.requirements\">{{passwordError}}</div>\n      </div>\n    </div>\n  </md-input-container>\n  <md-input-container class=\"md-block\">\n    <input type=\"password\" id=\"verifyPassword\" name=\"verifyPassword\" ng-model=\"vm.password.verifyPassword\" placeholder=\"Verify Password\" password-verify=\"vm.password\" required>\n    <div ng-messages=\"vm.forms.passwordForm.verifyPassword.$error\" role=\"alert\">\n      <div ng-message=\"required\">Verify your new password.</div>\n      <div ng-show=\"vm.forms.passwordForm.verifyPassword.$error.passwordVerify\">Passwords do not match.</div>\n    </div>\n  </md-input-container>\n  <md-button ng-disabled=\"vm.forms.passwordForm.$invalid || vm.executing\" class=\"md-raised md-accent\" ng-click=\"vm.save()\">Save</md-button>\n  <md-button ng-disabled=\"vm.executing || vm.forms.passwordForm.$pristine\" class=\"md-raised md-warn\" ng-click=\"vm.clear()\">Cancel</md-button>\n  <md-progress-linear class=\"md-accent\" ng-show=\"vm.executing\" md-mode=\"indeterminate\"></md-progress-linear>\n</form>\n");
$templateCache.put("modern-mean-users-material/views/settings/users.client.views.settings.personal.html","<form name=\"vm.forms.profileForm\" novalidate autocomplete=\"off\">\n  <md-input-container class=\"md-block\">\n    <input type=\"text\" id=\"firstName\" name=\"firstName\" ng-model=\"vm.user.name.first\" placeholder=\"First Name\" required>\n    <div ng-messages=\"vm.forms.profileForm.firstName.$error\" role=\"alert\">\n      <div ng-message=\"required\">First name is required.</div>\n    </div>\n  </md-input-container>\n  <md-input-container class=\"md-block\">\n    <input type=\"text\" id=\"lastName\" name=\"lastName\" ng-model=\"vm.user.name.last\" placeholder=\"Last Name\" required>\n    <div ng-messages=\"vm.forms.profileForm.lastName.$error\" role=\"alert\">\n      <div ng-message=\"required\">Last name is required.</div>\n    </div>\n  </md-input-container>\n  <md-button ng-disabled=\"vm.executing || vm.forms.profileForm.$pristine\" class=\"md-raised md-accent\" ng-click=\"vm.save()\">Save</md-button>\n  <md-button ng-disabled=\"vm.executing || vm.forms.profileForm.$pristine\" class=\"md-raised md-warn\" ng-click=\"vm.clear()\">Cancel</md-button>\n  <md-progress-linear class=\"md-accent\" ng-show=\"vm.executing\" md-mode=\"indeterminate\"></md-progress-linear>\n</form>\n");
$templateCache.put("modern-mean-users-material/views/settings/users.client.views.settings.picture.html","<md-input-container class=\"md-block\">\n  <div\n    ng-show=\"!vm.file\"\n    ngf-select ngf-drop ng-model=\"vm.file\"\n    class=\"drop-box ng-pristine ng-valid\" ngf-drop-available=\"dropAvailable\">Select File\n    <span ng-show=\"dropAvailable\" class=\"\"> or Drop File</span>\n  </div>\n  <img ngf-src=\"vm.file\">\n</md-input-container>\n<md-button ng-disabled=\"vm.executing || !vm.file\" class=\"md-raised md-accent\" ng-click=\"vm.save()\">Save</md-button>\n<md-button ng-disabled=\"vm.executing || !vm.file\" class=\"md-raised md-warn\" ng-click=\"vm.clear()\">Cancel</md-button>\n<md-progress-linear class=\"md-accent\" ng-show=\"vm.executing\" md-mode=\"indeterminate\"></md-progress-linear>\n");
$templateCache.put("modern-mean-users-material/views/settings/users.client.views.settings.profile.html","<md-content>\n  <div class=\"user-profile-background\" layout=\"row\" style=\"background-image: url(\'/dist/img/modern-mean-users-material/profile/background.jpg\');\">\n    <img class=\"user-profile-picture\" ng-src=\"{{vm.user.profileImageURL}}\" alt=\"User Profile Picture\" />\n    <div>{{vm.user.name.full}}</div>\n  </div>\n\n  <md-tabs md-dynamic-height md-border-bottom>\n    <md-tab label=\"Personal\">\n      <md-content class=\"md-padding\">\n        <div ui-view=\"personal\"></div>\n      </md-content>\n    </md-tab>\n    <md-tab label=\"Email\">\n      <md-content class=\"md-padding\">\n        <div ui-view=\"email\"></div>\n      </md-content>\n    </md-tab>\n    <md-tab label=\"Address\">\n      <md-content class=\"md-padding\">\n        <div ui-view=\"address\"></div>\n      </md-content>\n    </md-tab>\n    <md-tab label=\"Picture\">\n      <md-content class=\"md-padding\">\n        <div ui-view=\"picture\"></div>\n      </md-content>\n    </md-tab>\n    <md-tab label=\"Password\">\n      <md-content class=\"md-padding\">\n        <div ui-view=\"password\"></div>\n      </md-content>\n    </md-tab>\n  </md-tabs>\n</md-content>\n");}]);})();