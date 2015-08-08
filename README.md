## A Google/ChromeOS style LightDM Webkit greeter theme

This is a theme for LightDM Webkit (`lightdm-webkit-greeter-thc`).

It's designed to be a mix between the usual Google log in screen, and the log in screen that you will find on ChromeOS.

<!--### Screenshot
![](http://uk.omg.li/VE7v/69938074-bdf6-443d-bbeb-85f0a9f2f6de.png)-->

### Features

Lightdm-webkit-google-thc is a fork of [https://github.com/omgmog/lightdm-webkit-google lightdm-webkit-google] with a twelve hour clock (AM/PM).

### How to install

Instructions will differ for every platform, but I can tell you how to install it on Arch Linux:

1. Install and enable `lightdm` and `lightdm-webkit-greeter`
2. In the terminal, `cd` to `/usr/share/lightdm-webkit/themes/`
3. Clone this repository here, it should create a folder called `lightdm-webkit-google`
4. Enable the theme in your `/etc/lightdm/lightdm-webkit-greeter.conf`

### Setting your own user picture

There are a couple of methods you can use to set your user picture in LightDM:

- Put a `jpg` of your face in your home directory as a file called `.face`

or

- Add `Icon=/path/to/your/face.png` to the bottom of `/var/lib/AccountsService/users/<youraccountname>`

This work is free. You can redistribute it and/or modify it under the terms of the WTFPL (Do What The Fuck You Want To Public License), Version 2, as published by Sam Hocevar. See http://www.wtfpl.net/ for more details.
