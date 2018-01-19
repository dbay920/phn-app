## Quickstart

`tns run ios` or `tns run android`

for ios push notifcations you might need to modify
`/platforms/ios/(application folder name)/*.entitlements` file and add to it
`aps-environment` key and its value as shown below:

``` xml
 	<plist version="1.0">
 	<dict>
 		<key>aps-environment</key>
 		<string>development</string>
 	</dict>
 	</plist>
```
