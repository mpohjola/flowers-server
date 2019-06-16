#!/bin/sh
APPNAME=flowers-server

if [ "$1" = "configure" ]; then
    chmod u+x /usr/share/$APPNAME/app/$APPNAME
fi
systemctl --system daemon-reload >/dev/null || true
if ! systemctl is-enabled $APPNAME.service >/dev/null
then
    systemctl enable $APPNAME.service >/dev/null || true
    systemctl start $APPNAME.service >/dev/null || true
else
    systemctl restart $APPNAME.service >/dev/null || true
fi

