export const boot1 = [
  [
    `rsyslogd: [origin software="rsyslogd" swVersion="8.2001.0" x-pid="960" x-info="https://www.rsyslog.com"] rsyslogd was HUPed`,
  ],
  [`systemd[1]: logrotate.service: Succeeded.`],
  [`systemd[1]: Finished Rotate log files.`],
  [
    `networkd-dispatcher[1097]: WARNING: systemd-networkd is not running, output will be incomplete.`,
  ],
  [`systemd[1]: Started Dispatcher daemon for systemd-networkd.`],
  [
    `dbus-daemon[929]: [system] Successfully activated service 'org.freedesktop.hostname1'`,
  ],
  [`systemd[1]: Started Hostname Service.`],
  [
    `NetworkManager[930]: <info>  [1610811962.3177] hostname: hostname: using hostnamed`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3177] hostname: hostname changed from (none) to "surface"`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3181] dns-mgr[0x561255c08290]: init: dns=systemd-resolved rc-manager=symlink, plugin=systemd-resolved`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3187] rfkill0: found Wi-Fi radio killswitch (at /sys/devices/pci0000:00/0000:00:14.3/ieee80211/phy0/rfkill0) (driver iwlwifi)`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3189] manager[0x561255c45030]: rfkill: Wi-Fi hardware radio set enabled`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3189] manager[0x561255c45030]: rfkill: WWAN hardware radio set enabled`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3231] Loaded device plugin: NMWifiFactory (/usr/lib/x86_64-linux-gnu/NetworkManager/1.22.10/libnm-device-plugin-wifi.so)`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3252] Loaded device plugin: NMTeamFactory (/usr/lib/x86_64-linux-gnu/NetworkManager/1.22.10/libnm-device-plugin-team.so)`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3277] Loaded device plugin: NMWwanFactory (/usr/lib/x86_64-linux-gnu/NetworkManager/1.22.10/libnm-device-plugin-wwan.so)`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3283] Loaded device plugin: NMAtmManager (/usr/lib/x86_64-linux-gnu/NetworkManager/1.22.10/libnm-device-plugin-adsl.so)`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3299] Loaded device plugin: NMBluezManager (/usr/lib/x86_64-linux-gnu/NetworkManager/1.22.10/libnm-device-plugin-bluetooth.so)`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3303] manager: rfkill: Wi-Fi enabled by radio killswitch; enabled by state file`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3305] manager: rfkill: WWAN enabled by radio killswitch; enabled by state file`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3306] manager: Networking is enabled by state file`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3307] dhcp-init: Using DHCP client 'internal'`,
  ],
  [
    `dbus-daemon[929]: [system] Activating via systemd: service name='org.freedesktop.nm_dispatcher' unit='dbus-org.freedesktop.nm-dispatcher.service' requested by ':1.10' (uid=0 pid=930 comm="/usr/sbin/NetworkManager --no-daemon " label="unconfined")`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3336] settings: Loaded settings plugin: ifupdown ("/usr/lib/x86_64-linux-gnu/NetworkManager/1.22.10/libnm-settings-plugin-ifupdown.so")`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3336] settings: Loaded settings plugin: keyfile (internal)`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3337] ifupdown: management mode: unmanaged`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3337] ifupdown:       interface-parser: parsing file /etc/network/interfaces`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3337] ifupdown:       interface-parser: source line includes interfaces file(s) /etc/network/interfaces.d`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3337] ifupdown:       interface-parser: finished parsing file /etc/network/interfaces`,
  ],
  [`systemd[1]: Starting Network Manager Script Dispatcher Service...`],
  [
    `NetworkManager[930]: <info>  [1610811962.3403] device (lo): carrier: link connected`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3406] manager: (lo): new Generic device (/org/freedesktop/NetworkManager/Devices/1)`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3414] device (wlp0s20f3): driver supports Access Point (AP) mode`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.3423] manager: (wlp0s20f3): new 802.11 Wi-Fi device (/org/freedesktop/NetworkManager/Devices/2)`,
  ],
  [
    `dbus-daemon[929]: [system] Successfully activated service 'org.freedesktop.nm_dispatcher'`,
  ],
  [`systemd[1]: Started Network Manager Script Dispatcher Service.`],
  [
    `NetworkManager[930]: <info>  [1610811962.3439] device (wlp0s20f3): state change: unmanaged -> unavailable (reason 'managed', sys-iface-state: 'external')`,
  ],
  [
    `kernel: [    4.898676] iwlwifi 0000:00:14.3: Applying debug destination EXTERNAL_DRAM`,
  ],
  [
    `kernel: [    5.048513] iwlwifi 0000:00:14.3: FW already configured (0) - re-configuring`,
  ],
  [`systemd[1]: man-db.service: Succeeded.`],
  [`systemd[1]: Finished Daily man-db regeneration.`],
  [
    `kernel: [    5.063808] iwlwifi 0000:00:14.3: BIOS contains WGDS but no WRDS`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.5253] modem-manager: ModemManager available`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.5265] supplicant: wpa_supplicant running`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.5266] device (wlp0s20f3): supplicant interface state: init -> starting`,
  ],
  [
    `dbus-daemon[929]: [system] Successfully activated service 'org.freedesktop.login1'`,
  ],
  [`systemd[1]: Started Login Service.`],
  [`lightdm[1044]: Seat type 'xlocal' is deprecated, use 'type=local' instead`],
  [`systemd[1]: Started Unattended Upgrades Shutdown.`],
  [`systemd[1]: Received SIGRTMIN+21 from PID 324 (plymouthd).`],
  [
    `wpa_supplicant[968]: nl80211: kernel reports: Attribute failed policy validation`,
  ],
  [
    `wpa_supplicant[968]: Failed to create interface p2p-dev-wlp0s20f3: -22 (Invalid argument)`,
  ],
  [
    `wpa_supplicant[968]: nl80211: Failed to create a P2P Device interface p2p-dev-wlp0s20f3`,
  ],
  [`wpa_supplicant[968]: P2P: Failed to enable P2P Device interface`],
  [`systemd[1]: Received SIGRTMIN+21 from PID 324 (plymouthd).`],
  [`systemd[1]: plymouth-quit-wait.service: Succeeded.`],
  [`systemd[1]: Finished Hold until boot process finishes up.`],
  [`systemd[1]: Started Light Display Manager.`],
  [
    `wpa_supplicant[968]: dbus: fill_dict_with_properties dbus_interface=fi.w1.wpa_supplicant1.Interface.P2PDevice dbus_property=P2PDeviceConfig getter failed`,
  ],
  [`systemd[1]: Starting Set console scheme...`],
  [
    `NetworkManager[930]: <info>  [1610811962.5926] sup-iface[0x561255c59910,wlp0s20f3]: supports 5 scan SSIDs`,
  ],
  [`systemd[1]: Finished Set console scheme.`],
  [`systemd[1]: Created slice system-getty.slice.`],
  [
    `NetworkManager[930]: <info>  [1610811962.5957] device (wlp0s20f3): supplicant interface state: starting -> ready`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.5958] Wi-Fi P2P device controlled by interface wlp0s20f3 created`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.5961] manager: (p2p-dev-wlp0s20f3): new 802.11 Wi-Fi P2P device (/org/freedesktop/NetworkManager/Devices/3)`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.5963] device (p2p-dev-wlp0s20f3): state change: unmanaged -> unavailable (reason 'managed', sys-iface-state: 'external')`,
  ],
  [`systemd[1]: Started Getty on tty1.`],
  [`systemd[1]: Reached target Login Prompts.`],
  [
    `NetworkManager[930]: <info>  [1610811962.5969] device (p2p-dev-wlp0s20f3): state change: unavailable -> disconnected (reason 'none', sys-iface-state: 'managed')`,
  ],
  [
    `NetworkManager[930]: <info>  [1610811962.5971] device (wlp0s20f3): state change: unavailable -> disconnected (reason 'supplicant-available', sys-iface-state: 'managed')`,
  ],
  [
    `NetworkManager[930]: <warn>  [1610811962.5992] sup-iface: failed to cancel p2p connect: P2P cancel failed`,
  ],
  [
    `snapd[962]: AppArmor status: apparmor is enabled and all features are available`,
  ],
  [
    `snapd[962]: daemon.go:347: started snapd/2.48.2 (series 16; classic) ubuntu/20.04 (amd64) linux/5.4.0-62-generic.`,
  ],
  [`systemd[1]: tmp-sanity\x2dmountpoint\x2d054352655.mount: Succeeded.`],
  [
    `snapd[962]: daemon.go:440: adjusting startup timeout by 1m15s (pessimistic estimate of 30s plus 5s per snap)`,
  ],
  [
    `avahi-daemon[925]: Server startup complete. Host name is surface.local. Local service cookie is 1295768762.`,
  ],
  [`kernel: [    5.567383] kauditd_printk_skb: 32 callbacks suppressed`],
  [
    `kernel: [    5.567384] audit: type=1400 audit(1610811963.015:43): apparmor="STATUS" operation="profile_replace" info="same as current profile, skipping" profile="unconfined" name="/snap/snapd/10707/usr/lib/snapd/snap-confine" pid=1623 comm="apparmor_parser"`,
  ],
  [
    `kernel: [    5.567387] audit: type=1400 audit(1610811963.015:44): apparmor="STATUS" operation="profile_replace" info="same as current profile, skipping" profile="unconfined" name="/snap/snapd/10707/usr/lib/snapd/snap-confine//mount-namespace-capture-helper" pid=1623 comm="apparmor_parser"`,
  ],
  [
    `kernel: [    5.595308] audit: type=1400 audit(1610811963.043:45): apparmor="STATUS" operation="profile_replace" info="same as current profile, skipping" profile="unconfined" name="/snap/core/10583/usr/lib/snapd/snap-confine" pid=1638 comm="apparmor_parser"`,
  ],
  [
    `kernel: [    5.595310] audit: type=1400 audit(1610811963.043:46): apparmor="STATUS" operation="profile_replace" info="same as current profile, skipping" profile="unconfined" name="/snap/core/10583/usr/lib/snapd/snap-confine//mount-namespace-capture-helper" pid=1638 comm="apparmor_parser"`,
  ],
  [
    `kernel: [    5.683101] audit: type=1400 audit(1610811963.131:47): apparmor="STATUS" operation="profile_replace" profile="unconfined" name="snap.core.hook.configure" pid=1650 comm="apparmor_parser"`,
  ],
  [
    `kernel: [    5.744196] audit: type=1400 audit(1610811963.191:48): apparmor="STATUS" operation="profile_replace" profile="unconfined" name="snap.ngrok.ngrok" pid=1645 comm="apparmor_parser"`,
  ],
  [`systemd[1]: Created slice User Slice of UID 114.`],
  [`systemd[1]: Starting User Runtime Directory /run/user/114...`],
  [
    `kernel: [    5.821896] audit: type=1400 audit(1610811963.271:49): apparmor="STATUS" operation="profile_replace" profile="unconfined" name="snap.chromium.hook.configure" pid=1649 comm="apparmor_parser"`,
  ],
  [`systemd[1]: Finished User Runtime Directory /run/user/114.`],
  [`systemd[1]: Starting User Manager for UID 114...`],
  [`systemd[1749]: Started Pending report trigger for Ubuntu Report.`],
  [`systemd[1749]: Reached target Paths.`],
  [`systemd[1749]: Reached target Timers.`],
  [`systemd[1749]: Starting D-Bus User Message Bus Socket.`],
  [`systemd[1749]: Listening on GnuPG network certificate management daemon.`],
  [
    `systemd[1749]: Listening on GnuPG cryptographic agent and passphrase cache (access for web browsers).`,
  ],
  [
    `systemd[1749]: Listening on GnuPG cryptographic agent and passphrase cache (restricted).`,
  ],
  [
    `systemd[1749]: Listening on GnuPG cryptographic agent (ssh-agent emulation).`,
  ],
  [
    `systemd[1749]: Listening on GnuPG cryptographic agent and passphrase cache.`,
  ],
  [`systemd[1749]: Listening on debconf communication socket.`],
  [`systemd[1749]: Listening on Sound System.`],
  [`systemd[1749]: Listening on REST API socket for snapd user session agent.`],
  [`systemd[1749]: Listening on D-Bus User Message Bus Socket.`],
  [`systemd[1749]: Reached target Sockets.`],
  [`systemd[1749]: Reached target Basic System.`],
  [`systemd[1]: Started User Manager for UID 114.`],
  [`systemd[1749]: Starting Dunst notification daemon...`],
  [`systemd[1]: Started Session c1 of user lightdm.`],
  [`systemd[1749]: Starting Sound Service...`],
  [`systemd[1749]: Starting Tracker metadata extractor...`],
  [`systemd[1749]: Starting Tracker file system data miner...`],
  [`systemd[1749]: Started D-Bus User Message Bus.`],
  [`tracker-miner-f[1772]: Set scheduler policy to SCHED_IDLE`],
  [`tracker-extract[1768]: Set scheduler policy to SCHED_IDLE`],
  [`tracker-miner-f[1772]: Setting priority nice level to 19`],
  [`tracker-extract[1768]: Setting priority nice level to 19`],
  [`dunst[1766]: CRITICAL: Cannot open X11 display.`],
  [
    `systemd[1749]: dunst.service: Main process exited, code=exited, status=1/FAILURE`,
  ],
  [`systemd[1749]: dunst.service: Failed with result 'exit-code'.`],
  [`systemd[1749]: Failed to start Dunst notification daemon.`],
  [
    `dbus-daemon[1775]: [session uid=114 pid=1775] AppArmor D-Bus mediation is enabled`,
  ],
  [
    `dbus-daemon[929]: [system] Activating via systemd: service name='org.freedesktop.RealtimeKit1' unit='rtkit-daemon.service' requested by ':1.28' (uid=114 pid=1767 comm="/usr/bin/pulseaudio --daemonize=no --log-target=jo" label="unconfined")`,
  ],
  [`systemd[1]: Starting RealtimeKit Scheduling Policy Service...`],
  [
    `dbus-daemon[929]: [system] Successfully activated service 'org.freedesktop.RealtimeKit1'`,
  ],
  [`rtkit-daemon[1790]: Successfully called chroot.`],
  [`rtkit-daemon[1790]: Successfully dropped privileges.`],
  [`rtkit-daemon[1790]: Successfully limited resources.`],
  [`rtkit-daemon[1790]: Running.`],
  [`rtkit-daemon[1790]: Canary thread running.`],
  [`rtkit-daemon[1790]: Watchdog thread running.`],
  [`systemd[1]: Started RealtimeKit Scheduling Policy Service.`],
];

// [`rtkit-daemon[1790]: Successfully made thread 1767 of process 1767 owned by '114' high priority at nice level -11.
// [`rtkit-daemon[1790]: Supervising 1 threads of 1 processes of 1 users.
// [`dbus-daemon[1775]: [session uid=114 pid=1775] Activating via systemd: service name='org.gtk.vfs.Daemon' unit='gvfs-daemon.service' requested by ':1.1' (uid=114 pid=1772 comm="/usr/libexec/tracker-miner-fs " label="unconfined")
// [`systemd[1749]: Starting Virtual filesystem service...
// [`dbus-daemon[1775]: [session uid=114 pid=1775] Successfully activated service 'org.gtk.vfs.Daemon'
// [`systemd[1749]: Started Virtual filesystem service.
// [`dbus-daemon[1775]: [session uid=114 pid=1775] Activating service name='ca.desrt.dconf' requested by ':1.3' (uid=114 pid=1785 comm="/usr/sbin/slick-greeter " label="unconfined")
// [`tracker-miner-f[1772]: Unable to get XDG user directory path for special directory &DOCUMENTS. Ignoring this location.
// [`tracker-miner-f[1772]: Unable to get XDG user directory path for special directory &MUSIC. Ignoring this location.
// [`tracker-miner-f[1772]: Unable to get XDG user directory path for special directory &PICTURES. Ignoring this location.
// [`tracker-miner-f[1772]: Unable to get XDG user directory path for special directory &VIDEOS. Ignoring this location.
// [`tracker-miner-f[1772]: Unable to get XDG user directory path for special directory &DOWNLOAD. Ignoring this location.
// [`tracker-miner-f[1772]: Unable to get XDG user directory path for special directory &DOCUMENTS. Ignoring this location.
// [`tracker-miner-f[1772]: Unable to get XDG user directory path for special directory &MUSIC. Ignoring this location.
// [`tracker-miner-f[1772]: Unable to get XDG user directory path for special directory &PICTURES. Ignoring this location.
// [`tracker-miner-f[1772]: Unable to get XDG user directory path for special directory &VIDEOS. Ignoring this location.
// [`dbus-daemon[1775]: [session uid=114 pid=1775] Activating via systemd: service name='org.gtk.vfs.UDisks2VolumeMonitor' unit='gvfs-udisks2-volume-monitor.service' requested by ':1.1' (uid=114 pid=1772 comm="/usr/libexec/tracker-miner-fs " label="unconfined")
// [`systemd[1749]: Starting Virtual filesystem service - disk device monitor...
// [`dbus-daemon[1775]: [session uid=114 pid=1775] Successfully activated service 'ca.desrt.dconf'
// [`dbus-daemon[1775]: [session uid=114 pid=1775] Successfully activated service 'org.gtk.vfs.UDisks2VolumeMonitor'
// [`systemd[1749]: Started Virtual filesystem service - disk device monitor.
// [`dbus-daemon[1775]: [session uid=114 pid=1775] Activating via systemd: service name='org.gtk.vfs.GPhoto2VolumeMonitor' unit='gvfs-gphoto2-volume-monitor.service' requested by ':1.1' (uid=114 pid=1772 comm="/usr/libexec/tracker-miner-fs " label="unconfined")
// [`systemd[1749]: Starting Virtual filesystem service - digital camera monitor...
// [`dbus-daemon[1775]: [session uid=114 pid=1775] Successfully activated service 'org.gtk.vfs.GPhoto2VolumeMonitor'
// [`systemd[1749]: Started Virtual filesystem service - digital camera monitor.
// [`dbus-daemon[1775]: [session uid=114 pid=1775] Activating via systemd: service name='org.gtk.vfs.GoaVolumeMonitor' unit='gvfs-goa-volume-monitor.service' requested by ':1.1' (uid=114 pid=1772 comm="/usr/libexec/tracker-miner-fs " label="unconfined")
// [`systemd[1749]: Starting Virtual filesystem service - GNOME Online Accounts monitor...
// [`dbus-daemon[1775]: [session uid=114 pid=1775] Successfully activated service 'org.gtk.vfs.GoaVolumeMonitor'
// [`systemd[1749]: Started Virtual filesystem service - GNOME Online Accounts monitor.
// [`dbus-daemon[1775]: [session uid=114 pid=1775] Activating via systemd: service name='org.gtk.vfs.MTPVolumeMonitor' unit='gvfs-mtp-volume-monitor.service' requested by ':1.1' (uid=114 pid=1772 comm="/usr/libexec/tracker-miner-fs " label="unconfined")
// [`systemd[1749]: Starting Virtual filesystem service - Media Transfer Protocol monitor...
// [`dbus-daemon[1775]: [session uid=114 pid=1775] Successfully activated service 'org.gtk.vfs.MTPVolumeMonitor'
// [`systemd[1749]: Started Virtual filesystem service - Media Transfer Protocol monitor.
// [`dbus-daemon[1775]: [session uid=114 pid=1775] Activating via systemd: service name='org.gtk.vfs.AfcVolumeMonitor' unit='gvfs-afc-volume-monitor.service' requested by ':1.1' (uid=114 pid=1772 comm="/usr/libexec/tracker-miner-fs " label="unconfined")
// [`systemd[1749]: Starting Virtual filesystem service - Apple File Conduit monitor...
// [`/slick-greeter-check-hidpi: Window scale: 2
// [`dbus-daemon[1775]: [session uid=114 pid=1775] Successfully activated service 'org.gtk.vfs.AfcVolumeMonitor'
// [`systemd[1749]: Started Virtual filesystem service - Apple File Conduit monitor.
// [`dbus-daemon[929]: [system] Activating via systemd: service name='org.freedesktop.UPower' unit='upower.service' requested by ':1.31' (uid=114 pid=1772 comm="/usr/libexec/tracker-miner-fs " label="unconfined")
// [`systemd[1]: Starting Daemon for power management...
// [`/slick-greeter-set-keyboard-layout: Current keyboard configuration: rules:      evdev#012model:      pc105#012layout:     us
// [`/slick-greeter-set-keyboard-layout: Applying keyboard configuration: ['setxkbmap', '-model', 'pc105', '-layout', 'us', '-variant', '', '-option', '', '-v']
// [`/slick-greeter-set-keyboard-layout: Result: Warning! Multiple definitions of keyboard model#012         Using command line, ignoring X server#012Warning! Multiple definitions of keyboard layout#012         Using command line, ignoring X server#012Trying to build keymap using the following components:#012keycodes:   evdev+aliases(qwerty)#012types:      complete#012compat:     complete#012symbols:    pc+us+inet(evdev)#012geometry:   pc(pc105)
// [`/slick-greeter-set-keyboard-layout: New keyboard configuration: rules:      evdev#012model:      pc105#012layout:     us
// [`dbus-daemon[1775]: [session uid=114 pid=1775] Activating via systemd: service name='org.a11y.Bus' unit='at-spi-dbus-bus.service' requested by ':1.14' (uid=114 pid=1785 comm="/usr/sbin/slick-greeter " label="unconfined")
// [`systemd[1749]: Starting Accessibility services bus...
// [`pulseaudio[1767]: Disabling timer-based scheduling because running inside a VM.
// [`dbus-daemon[1775]: [session uid=114 pid=1775] Successfully activated service 'org.a11y.Bus'
// [`systemd[1749]: Started Accessibility services bus.
// [`systemd[1749]: at-spi-dbus-bus.service: Succeeded.
// [`rtkit-daemon[1790]: Supervising 1 threads of 1 processes of 1 users.
// [`rtkit-daemon[1790]: Successfully made thread 1904 of process 1767 owned by '114' RT at priority 5.
// [`rtkit-daemon[1790]: Supervising 2 threads of 1 processes of 1 users.
// [`pulseaudio[1767]: Disabling timer-based scheduling because running inside a VM.
// [`rtkit-daemon[1790]: Supervising 2 threads of 1 processes of 1 users.
// [`rtkit-daemon[1790]: Successfully made thread 1908 of process 1767 owned by '114' RT at priority 5.
// [`rtkit-daemon[1790]: Supervising 3 threads of 1 processes of 1 users.
// [`kernel: [    6.562738] audit: type=1400 audit(1610811964.011:50): apparmor="STATUS" operation="profile_replace" info="same as current profile, skipping" profile="unconfined" name="snap-update-ns.chromium" pid=1646 comm="apparmor_parser"
// [`systemd[1749]: Started Sound Service.
// [`dbus-daemon[929]: [system] Successfully activated service 'org.freedesktop.UPower'
// [`systemd[1]: Started Daemon for power management.
// [`dbus-daemon[1775]: [session uid=114 pid=1775] Activating via systemd: service name='org.freedesktop.Tracker1' unit='tracker-store.service' requested by ':1.1' (uid=114 pid=1772 comm="/usr/libexec/tracker-miner-fs " label="unconfined")
// [`systemd[1749]: Starting Tracker metadata database store and lookup manager...
// [`systemd[1749]: Started Tracker file system data miner.
// [`dbus-daemon[1775]: [session uid=114 pid=1775] Successfully activated service 'org.freedesktop.Tracker1'
// [`systemd[1749]: Started Tracker metadata database store and lookup manager.
// [`systemd[1]: Started PostgreSQL Cluster 12-main.
// [`systemd[1]: Starting PostgreSQL RDBMS...
// [`systemd[1]: Finished PostgreSQL RDBMS.
// [`systemd[1749]: Started Tracker metadata extractor.
// [`systemd[1749]: Reached target Main User Target.
// [`systemd[1749]: Startup finished in 1.168s.
// [`kernel: [    7.310344] audit: type=1400 audit(1610811964.759:51): apparmor="STATUS" operation="profile_replace" profile="unconfined" name="snap.chromium.chromedriver" pid=1647 comm="apparmor_parser"
// [`ModemManager[1020]: <info>  Couldn't check support for device '/sys/devices/pci0000:00/0000:00:14.3': not supported by any plugin
// [`kernel: [    7.349874] audit: type=1400 audit(1610811964.799:52): apparmor="STATUS" operation="profile_replace" profile="unconfined" name="snap.chromium.chromium" pid=1648 comm="apparmor_parser"
// [`systemd[1]: Started Snap Daemon.
// [`systemd[1]: Starting Wait until snapd is fully seeded...
// [`systemd[1]: Finished Wait until snapd is fully seeded.
// [`systemd[1]: Condition check resulted in Auto import assertions from block devices being skipped.
// [`NetworkManager[930]: <info>  [1610811965.3026] policy: auto-activating connection 'KWENCH' (6bfbb81c-1faf-436c-bc8f-44c5ba25bb89)
// [`NetworkManager[930]: <info>  [1610811965.3034] device (wlp0s20f3): Activation: starting connection 'KWENCH' (6bfbb81c-1faf-436c-bc8f-44c5ba25bb89)
// [`NetworkManager[930]: <info>  [1610811965.3035] device (wlp0s20f3): state change: disconnected -> prepare (reason 'none', sys-iface-state: 'managed')
// [`NetworkManager[930]: <info>  [1610811965.3038] manager: NetworkManager state is now CONNECTING
// [`NetworkManager[930]: <info>  [1610811965.3042] device (wlp0s20f3): state change: prepare -> config (reason 'none', sys-iface-state: 'managed')
// [`NetworkManager[930]: <info>  [1610811965.3110] device (wlp0s20f3): Activation: (wifi) access point 'KWENCH' has security, but secrets are required.
// [`NetworkManager[930]: <info>  [1610811965.3112] device (wlp0s20f3): state change: config -> need-auth (reason 'none', sys-iface-state: 'managed')
// [`NetworkManager[930]: <info>  [1610811965.3147] device (wlp0s20f3): state change: need-auth -> prepare (reason 'none', sys-iface-state: 'managed')
// [`NetworkManager[930]: <info>  [1610811965.3152] device (wlp0s20f3): state change: prepare -> config (reason 'none', sys-iface-state: 'managed')
// [`NetworkManager[930]: <info>  [1610811965.3155] device (wlp0s20f3): Activation: (wifi) connection 'KWENCH' has security, and secrets exist.  No new secrets needed.
// [`NetworkManager[930]: <info>  [1610811965.3155] Config: added 'ssid' value 'KWENCH'
// [`NetworkManager[930]: <info>  [1610811965.3155] Config: added 'scan_ssid' value '1'
// [`NetworkManager[930]: <info>  [1610811965.3156] Config: added 'bgscan' value 'simple:30:-70:86400'
// [`NetworkManager[930]: <info>  [1610811965.3156] Config: added 'key_mgmt' value 'WPA-PSK WPA-PSK-SHA256 FT-PSK'
// [`NetworkManager[930]: <info>  [1610811965.3156] Config: added 'auth_alg' value 'OPEN'
// [`NetworkManager[930]: <info>  [1610811965.3156] Config: added 'psk' value '<hidden>'
// [`wpa_supplicant[968]: wlp0s20f3: SME: Trying to authenticate with 0e:ec:da:15:98:4a (SSID='KWENCH' freq=5785 MHz)
// [`kernel: [    7.867592] wlp0s20f3: authenticate with 0e:ec:da:15:98:4a
// [`kernel: [    7.870415] wlp0s20f3: send auth to 0e:ec:da:15:98:4a (try 1/3)
// [`NetworkManager[930]: <info>  [1610811965.3273] device (wlp0s20f3): supplicant interface state: ready -> authenticating
// [`NetworkManager[930]: <info>  [1610811965.3274] device (p2p-dev-wlp0s20f3): supplicant management interface state: ready -> authenticating
// [`wpa_supplicant[968]: wlp0s20f3: Trying to associate with 0e:ec:da:15:98:4a (SSID='KWENCH' freq=5785 MHz)
// [`kernel: [    7.896406] wlp0s20f3: authenticated
// [`NetworkManager[930]: <info>  [1610811965.3510] device (wlp0s20f3): supplicant interface state: authenticating -> associating
// [`NetworkManager[930]: <info>  [1610811965.3510] device (p2p-dev-wlp0s20f3): supplicant management interface state: authenticating -> associating
// [`kernel: [    7.897133] wlp0s20f3: associate with 0e:ec:da:15:98:4a (try 1/3)
// [`wpa_supplicant[968]: wlp0s20f3: Associated with 0e:ec:da:15:98:4a
// [`wpa_supplicant[968]: wlp0s20f3: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
// [`kernel: [    7.901234] wlp0s20f3: RX AssocResp from 0e:ec:da:15:98:4a (capab=0x411 status=0 aid=1)
// [`kernel: [    7.902899] wlp0s20f3: associated
// [`wpa_supplicant[968]: wlp0s20f3: WPA: Key negotiation completed with 0e:ec:da:15:98:4a [PTK=CCMP GTK=CCMP]
// [`wpa_supplicant[968]: wlp0s20f3: CTRL-EVENT-CONNECTED - Connection to 0e:ec:da:15:98:4a completed [id=0 id_str=]
// [`NetworkManager[930]: <info>  [1610811965.4185] device (wlp0s20f3): supplicant interface state: associating -> completed
// [`kernel: [    7.961130] IPv6: ADDRCONF(NETDEV_CHANGE): wlp0s20f3: link becomes ready
// [`NetworkManager[930]: <info>  [1610811965.4185] device (wlp0s20f3): Activation: (wifi) Stage 2 of 5 (Device Configure) successful. Connected to wireless network "KWENCH"
// [`wpa_supplicant[968]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-53 noise=9999 txrate=6000
// [`NetworkManager[930]: <info>  [1610811965.4185] device (p2p-dev-wlp0s20f3): supplicant management interface state: associating -> completed
// [`NetworkManager[930]: <info>  [1610811965.4187] device (wlp0s20f3): state change: config -> ip-config (reason 'none', sys-iface-state: 'managed')
// [`NetworkManager[930]: <info>  [1610811965.4192] dhcp4 (wlp0s20f3): activation: beginning transaction (timeout in 45 seconds)
// [`avahi-daemon[925]: Joining mDNS multicast group on interface wlp0s20f3.IPv6 with address fe80::35a:46e0:cf7a:54af.
// [`avahi-daemon[925]: New relevant interface wlp0s20f3.IPv6 for mDNS.
// [`avahi-daemon[925]: Registering new address record for fe80::35a:46e0:cf7a:54af on wlp0s20f3.*.
// [`wpa_supplicant[968]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=1 signal=-53 noise=9999 txrate=108000
// [`NetworkManager[930]: <info>  [1610811965.6699] dhcp4 (wlp0s20f3): option dhcp_lease_time      => '86400'
// [`NetworkManager[930]: <info>  [1610811965.6700] dhcp4 (wlp0s20f3): option domain_name_servers  => '10.4.0.1'
// [`NetworkManager[930]: <info>  [1610811965.6700] dhcp4 (wlp0s20f3): option expiry               => '1610898365'
// [`NetworkManager[930]: <info>  [1610811965.6700] dhcp4 (wlp0s20f3): option ip_address           => '10.4.0.255'
// [`NetworkManager[930]: <info>  [1610811965.6700] dhcp4 (wlp0s20f3): option requested_broadcast_address => '1'
// [`NetworkManager[930]: <info>  [1610811965.6700] dhcp4 (wlp0s20f3): option requested_domain_name => '1'
// [`NetworkManager[930]: <info>  [1610811965.6700] dhcp4 (wlp0s20f3): option requested_domain_name_servers => '1'
// [`NetworkManager[930]: <info>  [1610811965.6700] dhcp4 (wlp0s20f3): option requested_domain_search => '1'
// [`NetworkManager[930]: <info>  [1610811965.6700] dhcp4 (wlp0s20f3): option requested_host_name  => '1'
// [`NetworkManager[930]: <info>  [1610811965.6700] dhcp4 (wlp0s20f3): option requested_interface_mtu => '1'
// [`NetworkManager[930]: <info>  [1610811965.6700] dhcp4 (wlp0s20f3): option requested_ms_classless_static_routes => '1'
// [`NetworkManager[930]: <info>  [1610811965.6700] dhcp4 (wlp0s20f3): option requested_nis_domain => '1'
// [`NetworkManager[930]: <info>  [1610811965.6700] dhcp4 (wlp0s20f3): option requested_nis_servers => '1'
// [`NetworkManager[930]: <info>  [1610811965.6701] dhcp4 (wlp0s20f3): option requested_ntp_servers => '1'
// [`NetworkManager[930]: <info>  [1610811965.6701] dhcp4 (wlp0s20f3): option requested_rfc3442_classless_static_routes => '1'
// [`NetworkManager[930]: <info>  [1610811965.6701] dhcp4 (wlp0s20f3): option requested_root_path  => '1'
// [`NetworkManager[930]: <info>  [1610811965.6701] dhcp4 (wlp0s20f3): option requested_routers    => '1'
// [`NetworkManager[930]: <info>  [1610811965.6701] dhcp4 (wlp0s20f3): option requested_static_routes => '1'
// [`NetworkManager[930]: <info>  [1610811965.6701] dhcp4 (wlp0s20f3): option requested_subnet_mask => '1'
// [`NetworkManager[930]: <info>  [1610811965.6701] dhcp4 (wlp0s20f3): option requested_time_offset => '1'
// [`NetworkManager[930]: <info>  [1610811965.6701] dhcp4 (wlp0s20f3): option requested_wpad       => '1'
// [`avahi-daemon[925]: Joining mDNS multicast group on interface wlp0s20f3.IPv4 with address 10.4.0.255.
// [`NetworkManager[930]: <info>  [1610811965.6701] dhcp4 (wlp0s20f3): option routers              => '10.4.0.1'
// [`NetworkManager[930]: <info>  [1610811965.6701] dhcp4 (wlp0s20f3): option subnet_mask          => '255.255.252.0'
// [`NetworkManager[930]: <info>  [1610811965.6701] dhcp4 (wlp0s20f3): state changed unknown -> bound
// [`NetworkManager[930]: <info>  [1610811965.6722] device (wlp0s20f3): state change: ip-config -> ip-check (reason 'none', sys-iface-state: 'managed')
// [`avahi-daemon[925]: New relevant interface wlp0s20f3.IPv4 for mDNS.
// [`avahi-daemon[925]: Registering new address record for 10.4.0.255 on wlp0s20f3.IPv4.
// [`NetworkManager[930]: <info>  [1610811965.6775] device (wlp0s20f3): state change: ip-check -> secondaries (reason 'none', sys-iface-state: 'managed')
// [`NetworkManager[930]: <info>  [1610811965.6779] device (wlp0s20f3): state change: secondaries -> activated (reason 'none', sys-iface-state: 'managed')
// [`NetworkManager[930]: <info>  [1610811965.6786] manager: NetworkManager state is now CONNECTED_LOCAL
// [`NetworkManager[930]: <info>  [1610811965.6842] manager: NetworkManager state is now CONNECTED_SITE
// [`NetworkManager[930]: <info>  [1610811965.6860] policy: set 'KWENCH' (wlp0s20f3) as default for IPv4 routing and DNS
// [`NetworkManager[930]: <info>  [1610811965.6880] device (wlp0s20f3): Activation: successful, device activated.
// [`NetworkManager[930]: <info>  [1610811965.6939] manager: NetworkManager state is now CONNECTED_GLOBAL
// [`NetworkManager[930]: <info>  [1610811965.7002] manager: startup complete
// [`systemd[1]: Finished Network Manager Wait Online.
// [`systemd[1]: Reached target Network is Online.
// [`systemd[1]: Starting LSB: disk temperature monitoring daemon...
// [`systemd[1]: Starting Tool to automatically collect and submit kernel crash signatures...
// [`systemd[1]: Started crash report submission daemon.
// [`systemd[1]: kerneloops.service: Found left-over process 2259 (kerneloops) in control group while starting unit. Ignoring.
// [`systemd[1]: This usually indicates unclean termination of a previous run, or service implementation deficiencies.
// [`systemd[1]: Started Tool to automatically collect and submit kernel crash signatures.
// [`systemd[1]: Started LSB: disk temperature monitoring daemon.
// [`whoopsie[2257]: [07:46:05] Using lock path: /var/lock/whoopsie/lock
// [`whoopsie[2257]: [07:46:05] The default IPv4 route is: /org/freedesktop/NetworkManager/ActiveConnection/1
// [`whoopsie[2257]: [07:46:05] Not a paid data plan: /org/freedesktop/NetworkManager/ActiveConnection/1
// [`whoopsie[2257]: [07:46:05] Found usable connection: /org/freedesktop/NetworkManager/ActiveConnection/1
// [`set-cpufreq[948]: Setting powersave scheduler for all CPUs
// [`systemd[1]: ondemand.service: Succeeded.
// [`systemd[1]: dmesg.service: Succeeded.
// [`snapd[962]: storehelpers.go:551: cannot refresh: snap has no updates available: "chromium", "core", "core18", "core20", "gnome-3-28-1804", "gtk-common-themes", "heroku", "ngrok", "snapd"
// [`snapd[962]: autorefresh.go:479: auto-refresh: all snaps are up-to-date
// [`systemd[1]: unattended-upgrades.service: Succeeded.
// [`systemd[1]: Unnecessary job for /dev/ipts/0 was removed.
// [`systemd[1]: Stopping Session c1 of user lightdm.
// [`systemd[1]: Removed slice system-modprobe.slice.
// [`systemd[1]: Stopped target Sound Card.
// [`systemd[1]: Stopped target Timers.
// [`systemd[1]: apt-daily-upgrade.timer: Succeeded.
// [`systemd[1]: Stopped Daily apt upgrade and clean activities.
// [`systemd[1]: apt-daily.timer: Succeeded.
// [`systemd[1]: Stopped Daily apt download activities.
// [`systemd[1]: e2scrub_all.timer: Succeeded.
// [`systemd[1]: Stopped Periodic ext4 Online Metadata Check for All Filesystems.
// [`systemd[1]: fstrim.timer: Succeeded.
// [`systemd[1]: Stopped Discard unused blocks once a week.
// [`systemd[1]: fwupd-refresh.timer: Succeeded.
// [`systemd[1]: Stopped Refresh fwupd metadata regularly.
// [`systemd[1]: logrotate.timer: Succeeded.
// [`systemd[1]: Stopped Daily rotation of log files.
// [`systemd[1]: man-db.timer: Succeeded.
// [`systemd[1]: Stopped Daily man-db regeneration.
// [`systemd[1]: motd-news.timer: Succeeded.
// [`systemd[1]: Stopped Message of the Day.
// [`systemd[1]: systemd-tmpfiles-clean.timer: Succeeded.
// [`systemd[1]: Stopped Daily Cleanup of Temporary Directories.
// [`systemd[1]: lvm2-lvmpolld.socket: Succeeded.
// [`systemd[1]: Closed LVM2 poll daemon socket.
// [`systemd[1]: Unmounting RPC Pipe File System...
// [`nm-dispatcher: Caught signal 15, shutting down...
// [`systemd[1]: Stopping Network Manager Script Dispatcher Service...
// [`systemd[1]: Stopping ACPI event daemon...
// [`systemd[1]: Stopping Save/Restore Sound Card State...
// [`systemd[1]: Stopping Availability of block devices...
// [`systemd[1749]: run-rpc_pipefs.mount: Succeeded.
// [`systemd[1]: Stopping Create final runtime dir for shutdown pivot root...
// [`systemd[1]: Stopping RealtimeKit Scheduling Policy Service...
// [`systemd[1]: Condition check resulted in Ubuntu core (all-snaps) system shutdown helper setup service being skipped.
// [`systemd[1]: Stopping Hostname Service...
// [`systemd[1]: Stopping Load/Save Random Seed...
// [`systemd[1]: Stopping Accounts Service...
// [`ModemManager[1020]: <info>  Caught signal, shutting down...
// [`systemd[1]: Stopping Light Display Manager...
// [`anacron[922]: Received SIGUSR1
// [`systemd[1]: Stopped target Login Prompts.
// [`anacron[922]: Exited
// [`systemd[1]: Stopping Modem Manager...
// [`systemd[1]: Stopping Run anacron jobs...
// [`systemd[1]: Stopping LSB: automatic crash report generation...
// [`systemd[1]: Stopping Regular background program processing daemon...
// [`systemd[1]: Stopping Make remote CUPS printers available locally...
// [`systemd[1]: Stopping Getty on tty1...
// [`systemd[1]: Stopping LSB: Record successful boot for GRUB...
// [`NetworkManager[930]: <info>  [1610811970.9081] modem-manager: ModemManager no longer available
// [`systemd[1]: Stopping LSB: disk temperature monitoring daemon...
// [`blkdeactivate[4319]: Deactivating block devices:
// [`systemd-modules-load[428]: Inserted module 'lp'
// [`systemd-modules-load[428]: Inserted module 'ppdev'
// [`kernel: [    0.000000] microcode: microcode updated early to revision 0xa0, date = 2020-07-30
// [`kernel: [    0.000000] Linux version 5.10.5-surface (root@6b445f98509f) (gcc (Ubuntu 9.3.0-17ubuntu1~20.04) 9.3.0, GNU ld (GNU Binutils for Ubuntu) 2.34) #1 SMP Thu Jan 7 23:33:52 UTC 2021
// [`systemd-modules-load[428]: Inserted module 'parport_pc'
// [`kernel: [    0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz-5.10.5-surface root=UUID=150b68aa-654e-43a4-8265-286f2e5ffcb5 ro quiet splash reboot=pci
// [`kernel: [    0.000000] KERNEL supported cpus:
// [`kernel: [    0.000000]   Intel GenuineIntel
// [`kernel: [    0.000000]   AMD AuthenticAMD
// [`kernel: [    0.000000]   Hygon HygonGenuine
// [`systemd-sysctl[445]: Not setting net/ipv4/conf/all/promote_secondaries (explicit setting exists).
// [`kernel: [    0.000000]   Centaur CentaurHauls
// [`kernel: [    0.000000]   zhaoxin   Shanghai
// [`kernel: [    0.000000] x86/split lock detection: warning about user-space split_locks
// [`kernel: [    0.000000] x86/fpu: Supporting XSAVE feature 0x001: 'x87 floating point registers'
// [`kernel: [    0.000000] x86/fpu: Supporting XSAVE feature 0x002: 'SSE registers'
// [`systemd-sysctl[445]: Not setting net/ipv4/conf/default/promote_secondaries (explicit setting exists).
// [`kernel: [    0.000000] x86/fpu: Supporting XSAVE feature 0x004: 'AVX registers'
// [`kernel: [    0.000000] x86/fpu: Supporting XSAVE feature 0x020: 'AVX-512 opmask'
// [`kernel: [    0.000000] x86/fpu: Supporting XSAVE feature 0x040: 'AVX-512 Hi256'
// [`kernel: [    0.000000] x86/fpu: Supporting XSAVE feature 0x080: 'AVX-512 ZMM_Hi256'
// [`systemd[1]: Starting Flush Journal to Persistent Storage...
// [`kernel: [    0.000000] x86/fpu: Supporting XSAVE feature 0x200: 'Protection Keys User registers'
// [`kernel: [    0.000000] x86/fpu: xstate_offset[2]:  576, xstate_sizes[2]:  256
// [`kernel: [    0.000000] x86/fpu: xstate_offset[5]:  832, xstate_sizes[5]:   64
// [`kernel: [    0.000000] x86/fpu: xstate_offset[6]:  896, xstate_sizes[6]:  512
// [`systemd[1]: Activated swap /swapfile.
// [`kernel: [    0.000000] x86/fpu: xstate_offset[7]: 1408, xstate_sizes[7]: 1024
// [`kernel: [    0.000000] x86/fpu: xstate_offset[9]: 2432, xstate_sizes[9]:    8
// [`kernel: [    0.000000] x86/fpu: Enabled xstate features 0x2e7, context size is 2440 bytes, using 'compacted' format.
// [`kernel: [    0.000000] BIOS-provided physical RAM map:
// [`kernel: [    0.000000] BIOS-e820: [mem 0x0000000000000000-0x000000000009ffff] usable
// [`systemd[1]: Reached target Swap.
// [`kernel: [    0.000000] BIOS-e820: [mem 0x00000000000a0000-0x00000000000fffff] reserved
// [`kernel: [    0.000000] BIOS-e820: [mem 0x0000000000100000-0x000000007a831fff] usable
// [`kernel: [    0.000000] BIOS-e820: [mem 0x000000007a832000-0x000000007a832fff] ACPI NVS
// [`kernel: [    0.000000] BIOS-e820: [mem 0x000000007a833000-0x000000007a833fff] reserved
// [`systemd[1]: Finished Monitoring of LVM2 mirrors, snapshots etc. using dmeventd or progress polling.
// [`kernel: [    0.000000] BIOS-e820: [mem 0x000000007a834000-0x000000007bae1fff] usable
// [`kernel: [    0.000000] BIOS-e820: [mem 0x000000007bae2000-0x000000007bb89fff] reserved
// [`kernel: [    0.000000] BIOS-e820: [mem 0x000000007bb8a000-0x000000007bbb3fff] ACPI NVS
// [`kernel: [    0.000000] BIOS-e820: [mem 0x000000007bbb4000-0x000000007bbfefff] ACPI data
// [`systemd[1]: Reached target Local File Systems (Pre).
// [`kernel: [    0.000000] BIOS-e820: [mem 0x000000007bbff000-0x000000007bbfffff] usable
// [`kernel: [    0.000000] BIOS-e820: [mem 0x000000007bc00000-0x00000000953fffff] reserved
// [`kernel: [    0.000000] BIOS-e820: [mem 0x00000000fe010000-0x00000000fe010fff] reserved
// [`kernel: [    0.000000] BIOS-e820: [mem 0x00000000fed20000-0x00000000fed7ffff] reserved
// [`kernel: [    0.000000] BIOS-e820: [mem 0x0000000100000000-0x000000026abfffff] usable
// [`kernel: [    0.000000] NX (Execute Disable) protection: active
// [`systemd[1]: Mounting Mount unit for chromium, revision 1424...
// [`kernel: [    0.000000] efi: EFI v2.70 by MSFT
// [`kernel: [    0.000000] efi: ACPI=0x7bbfe000 ACPI 2.0=0x7bbfe014 TPMFinalLog=0x7bbab000 SMBIOS=0x7bb51000 SMBIOS 3.0=0x7bb4f000 MEMATTR=0x77e22518 ESRT=0x78a93398 RNG=0x7bb64798 TPMEventLog=0x77e11018
// [`kernel: [    0.000000] efi: seeding entropy pool
// [`kernel: [    0.000000] random: fast init done
// [`kernel: [    0.000000] SMBIOS 3.2.0 present.
// [`systemd[1]: Mounting Mount unit for chromium, revision 1444...
// [`kernel: [    0.000000] DMI: Microsoft Corporation Surface Laptop 3/Surface Laptop 3, BIOS 7.124.140 06/23/2020
// [`kernel: [    0.000000] tsc: Detected 1500.000 MHz processor
// [`kernel: [    0.000000] tsc: Detected 1497.600 MHz TSC
// [`systemd[1]: Mounting Mount unit for core, revision 10577...
// [`kernel: [    0.001137] e820: update [mem 0x00000000-0x00000fff] usable ==> reserved
// [`kernel: [    0.001143] e820: remove [mem 0x000a0000-0x000fffff] usable
// [`kernel: [    0.001152] last_pfn = 0x26ac00 max_arch_pfn = 0x400000000
// [`kernel: [    0.001158] MTRR default type: write-back
// [`kernel: [    0.001160] MTRR fixed ranges enabled:
// [`kernel: [    0.001162]   00000-9FFFF write-back
// [`systemd[1]: Mounting Mount unit for core, revision 10583...
// [`kernel: [    0.001163]   A0000-BFFFF uncachable
// [`kernel: [    0.001165]   C0000-FFFFF write-protect
// [`kernel: [    0.001166] MTRR variable ranges enabled:
// [`kernel: [    0.001169]   0 base 00C0000000 mask 7FC0000000 uncachable
// [`kernel: [    0.001171]   1 base 00A0000000 mask 7FE0000000 uncachable
// [`systemd[1]: Mounting Mount unit for core18, revision 1932...
// [`kernel: [    0.001172]   2 base 0098000000 mask 7FF8000000 uncachable
// [`kernel: [    0.001174]   3 base 0094000000 mask 7FFC000000 uncachable
// [`kernel: [    0.001175]   4 base 0092000000 mask 7FFE000000 uncachable
// [`kernel: [    0.001176]   5 base 0091000000 mask 7FFF000000 uncachable
// [`systemd[1]: Mounting Mount unit for core18, revision 1944...
// [`kernel: [    0.001178]   6 base 4000000000 mask 4000000000 uncachable
// [`kernel: [    0.001179]   7 disabled
// [`kernel: [    0.001180]   8 disabled
// [`kernel: [    0.001181]   9 disabled
// [`systemd[1]: Mounting Mount unit for core20, revision 875...
// [`kernel: [    0.002182] x86/PAT: Configuration [0-7]: WB  WC  UC- UC  WB  WP  UC- WT
// [`kernel: [    0.002902] last_pfn = 0x7bc00 max_arch_pfn = 0x400000000
// [`kernel: [    0.030559] esrt: Reserving ESRT space from 0x0000000078a93398 to 0x0000000078a934e8.
// [`kernel: [    0.030571] e820: update [mem 0x78a93000-0x78a93fff] usable ==> reserved
// [`systemd[1]: Mounting Mount unit for core20, revision 904...
// [`kernel: [    0.030617] check: Scanning 1 areas for low memory corruption
// [`kernel: [    0.030625] Using GB pages for direct mapping
// [`kernel: [    0.031329] Secure boot disabled
// [`kernel: [    0.031331] RAMDISK: [mem 0x3aaa6000-0x3fffdfff]
// [`kernel: [    0.031366] ACPI: Early table checksum verification disabled
// [`systemd[1]: Mounting Mount unit for gnome-3-28-1804, revision 145...
// [`kernel: [    0.031371] ACPI: RSDP 0x000000007BBFE014 000024 (v02 MSFT  )
// [`kernel: [    0.031377] ACPI: XSDT 0x000000007BBFD0E8 0000C4 (v01 MSFT   MSFT     00000002 MSFT 20160422)
// [`kernel: [    0.031387] ACPI: FACP 0x000000007BBE3000 000114 (v06 MSFT   MSFT     00000002 MSFT 20160422)
// [`kernel: [    0.031396] ACPI: DSDT 0x000000007BBC3000 01B1E0 (v02 MSFT   MSFT     00000002 MSFT 20160422)
// [`kernel: [    0.031402] ACPI: FACS 0x000000007BB92000 000040
// [`systemd[1]: Mounting Mount unit for gtk-common-themes, revision 1513...
// [`kernel: [    0.031407] ACPI: SSDT 0x000000007BBFB000 001B61 (v02 CpuRef CpuSsdt  00003000 INTL 20181003)
// [`kernel: [    0.031413] ACPI: MSDM 0x000000007BBFA000 000055 (v01 MSFT            00000001 MSFT 00000001)
// [`kernel: [    0.031418] ACPI: SSDT 0x000000007BBF4000 00557B (v02 OEMID  DptfTabl 00001000 INTL 20181003)
// [`kernel: [    0.031424] ACPI: SSDT 0x000000007BBF0000 0033E3 (v02 SaSsdt SaSsdt   00003000 INTL 20181003)
// [`systemd[1]: Mounting Mount unit for gtk-common-themes, revision 1514...
// [`kernel: [    0.031429] ACPI: SSDT 0x000000007BBE4000 00B27A (v02 INTEL  TcssSsdt 00001000 INTL 20181003)
// [`kernel: [    0.031434] ACPI: HPET 0x000000007BBE2000 000038 (v01 MSFT   MSFT     00000002 MSFT 20160422)
// [`kernel: [    0.031440] ACPI: LPIT 0x000000007BBE1000 000094 (v01 MSFT   MSFT     00000002 MSFT 20160422)
// [`kernel: [    0.031445] ACPI: APIC 0x000000007BBE0000 00012C (v03 MSFT   MSFT     00000002 MSFT 20160422)
// [`kernel: [    0.031450] ACPI: MCFG 0x000000007BBDF000 00003C (v01 MSFT   MSFT     00000002 MSFT 20160422)
// [`kernel: [    0.031455] ACPI: SSDT 0x000000007BBC2000 0000DD (v02 MSFT   DEVPANEL 00000001 INTL 20181003)
// [`systemd[1]: Mounting Mount unit for heroku, revision 4010...
// [`kernel: [    0.031461] ACPI: SSDT 0x000000007BBC1000 000DB4 (v02 MSFT   RTD3_ED  00001000 INTL 20181003)
// [`kernel: [    0.031466] ACPI: SSDT 0x000000007BBC0000 0009DE (v02 MSFT   xh_ed000 00000000 INTL 20181003)
// [`kernel: [    0.031471] ACPI: NHLT 0x000000007BBBF000 00002D (v00 MSFT   MSFT     00000002 MSFT 20160422)
// [`systemd[1]: Mounting Mount unit for heroku, revision 4017...
// [`kernel: [    0.031476] ACPI: SSDT 0x000000007BBBE000 000574 (v02 MSFT   Tpm2Tabl 00001000 INTL 20181003)
// [`kernel: [    0.031482] ACPI: TPM2 0x000000007BBBD000 000034 (v03 MSFT   MSFT     00000002 MSFT 20160422)
// [`kernel: [    0.031487] ACPI: DMAR 0x000000007BBBC000 000088 (v02 MSFT   MSFT     00000002 MSFT 20160422)
// [`systemd[1]: Mounting Mount unit for ngrok, revision 26...
// [`kernel: [    0.031492] ACPI: BGRT 0x000000007BBBB000 000038 (v01 MSFT   MSFT     00000002 MSFT 20160422)
// [`kernel: [    0.031497] ACPI: WSMT 0x000000007BBBA000 000028 (v01 MSFT   MSFT     00000002 MSFT 20160422)
// [`kernel: [    0.031503] ACPI: FPDT 0x000000007BBB9000 000034 (v01 MSFT   MSFT     00000002 MSFT 20160422)
// [`kernel: [    0.031516] ACPI: Local APIC address 0xfee00000
// [`kernel: [    0.031916] No NUMA configuration found
// [`kernel: [    0.031918] Faking a node at [mem 0x0000000000000000-0x000000026abfffff]
// [`systemd[1]: Mounting Mount unit for ngrok, revision 29...
// [`kernel: [    0.031929] NODE_DATA(0) allocated [mem 0x26abd5000-0x26abfffff]
// [`kernel: [    0.032278] cma: Reserved 32 MiB at 0x0000000268800000
// [`systemd[1]: Mounting Mount unit for snapd, revision 10492...
// [`kernel: [    0.032305] Zone ranges:
// [`kernel: [    0.032307]   DMA      [mem 0x0000000000001000-0x0000000000ffffff]
// [`kernel: [    0.032309]   DMA32    [mem 0x0000000001000000-0x00000000ffffffff]
// [`systemd[1]: Mounting Mount unit for snapd, revision 10707...
// [`systemd[1]: Started udev Kernel Device Manager.
// [`systemd[1]: Starting Show Plymouth Boot Screen...
// [`systemd[1]: plymouth-start.service: Succeeded.
// [`systemd[1]: Started Show Plymouth Boot Screen.
// [`systemd[1]: Condition check resulted in Dispatch Password Requests to Console Directory Watch being skipped.
// [`systemd[1]: Started Forward Password Requests to Plymouth Directory Watch.
// [`systemd[1]: Reached target Local Encrypted Volumes.
// [`systemd[1]: Finished Flush Journal to Persistent Storage.
// [`systemd[1]: Mounted Mount unit for chromium, revision 1444.
// [`systemd[1]: Mounted Mount unit for core, revision 10577.
// [`systemd[1]: Created slice system-systemd\x2dbacklight.slice.
// [`systemd[1]: Starting Load/Save Screen Backlight Brightness of backlight:intel_backlight...
// [`systemd[1]: Finished Load/Save Screen Backlight Brightness of backlight:intel_backlight.
// [`systemd-udevd[481]: ethtool: autonegotiation is unset or enabled, the speed and duplex are not writable.
// [`systemd[1]: Mounted Mount unit for core20, revision 875.
// [`kernel: [    0.032311]   Normal   [mem 0x0000000100000000-0x000000026abfffff]
// [`kernel: [    0.032314]   Device   empty
// [`systemd[1]: Found device /dev/ipts/0.
// [`kernel: [    0.032316] Movable zone start for each node
// [`kernel: [    0.032322] Early memory node ranges
// [`kernel: [    0.032323]   node   0: [mem 0x0000000000001000-0x000000000009ffff]
// [`kernel: [    0.032325]   node   0: [mem 0x0000000000100000-0x000000007a831fff]
// [`kernel: [    0.032327]   node   0: [mem 0x000000007a834000-0x000000007bae1fff]
// [`systemd[1]: Mounted Mount unit for chromium, revision 1424.
// [`kernel: [    0.032328]   node   0: [mem 0x000000007bbff000-0x000000007bbfffff]
// ["systemd[1]: Mounted Mount unit for core, revision 10583.
// ["kernel: [    0.032329]   node   0: [mem 0x0000000100000000-0x000000026abfffff]
// ["kernel: [    0.032740] Zeroed struct page in unavailable ranges: 39296 pages
// ["systemd[1]: Mounted Mount unit for core20, revision 904.
// ["kernel: [    0.032742] Initmem setup node 0 [mem 0x0000000000001000-0x000000026abfffff]
// ["kernel: [    0.032745] On node 0 totalpages: 1992320
// ["kernel: [    0.032747]   DMA zone: 64 pages used for memmap
// ["kernel: [    0.032748]   DMA zone: 25 pages reserved
// ["kernel: [    0.032750]   DMA zone: 3999 pages, LIFO batch:0
// ["systemd[1]: Mounted Mount unit for gtk-common-themes, revision 1513.
// ["kernel: [    0.032781]   DMA32 zone: 7852 pages used for memmap
// ["kernel: [    0.032783]   DMA32 zone: 502497 pages, LIFO batch:63
// ["kernel: [    0.036680]   Normal zone: 23216 pages used for memmap
// ["kernel: [    0.036681]   Normal zone: 1485824 pages, LIFO batch:63
// ["kernel: [    0.048200] x86/hpet: Will disable the HPET for this platform because it's not reliable
// ["systemd[1]: Mounted Mount unit for gtk-common-themes, revision 1514.
// ["kernel: [    0.048240] Reserving Intel graphics memory at [mem 0x91800000-0x953fffff]
// ["kernel: [    0.048680] ACPI: PM-Timer IO Port: 0x1808
// ["kernel: [    0.048683] ACPI: Local APIC address 0xfee00000
// ["kernel: [    0.048694] ACPI: LAPIC_NMI (acpi_id[0x01] high edge lint[0x1])
// ["kernel: [    0.048695] ACPI: LAPIC_NMI (acpi_id[0x02] high edge lint[0x1])
// ["systemd-udevd[480]: Using default interface naming scheme 'v245'.
// ["kernel: [    0.048696] ACPI: LAPIC_NMI (acpi_id[0x03] high edge lint[0x1])
// ["kernel: [    0.048697] ACPI: LAPIC_NMI (acpi_id[0x04] high edge lint[0x1])
// ["systemd-udevd[480]: ethtool: autonegotiation is unset or enabled, the speed and duplex are not writable.
// ["kernel: [    0.048699] ACPI: LAPIC_NMI (acpi_id[0x05] high edge lint[0x1])
// ["kernel: [    0.048700] ACPI: LAPIC_NMI (acpi_id[0x06] high edge lint[0x1])
// ["kernel: [    0.048701] ACPI: LAPIC_NMI (acpi_id[0x07] high edge lint[0x1])
// ["kernel: [    0.048702] ACPI: LAPIC_NMI (acpi_id[0x08] high edge lint[0x1])
// ["kernel: [    0.048703] ACPI: LAPIC_NMI (acpi_id[0x09] high edge lint[0x1])
// ["kernel: [    0.048704] ACPI: LAPIC_NMI (acpi_id[0x0a] high edge lint[0x1])
// ["kernel: [    0.048705] ACPI: LAPIC_NMI (acpi_id[0x0b] high edge lint[0x1])
// ["systemd-udevd[473]: Using default interface naming scheme 'v245'.
// ["kernel: [    0.048706] ACPI: LAPIC_NMI (acpi_id[0x0c] high edge lint[0x1])
// ["kernel: [    0.048707] ACPI: LAPIC_NMI (acpi_id[0x0d] high edge lint[0x1])
// ["kernel: [    0.048708] ACPI: LAPIC_NMI (acpi_id[0x0e] high edge lint[0x1])
// ["kernel: [    0.048710] ACPI: LAPIC_NMI (acpi_id[0x0f] high edge lint[0x1])
// ["kernel: [    0.048711] ACPI: LAPIC_NMI (acpi_id[0x10] high edge lint[0x1])
// ["systemd[1]: Mounted Mount unit for snapd, revision 10492.
// ["kernel: [    0.048748] IOAPIC[0]: apic_id 2, version 32, address 0xfec00000, GSI 0-119
// ["kernel: [    0.048752] ACPI: INT_SRC_OVR (bus 0 bus_irq 0 global_irq 2 dfl dfl)
// ["kernel: [    0.048754] ACPI: INT_SRC_OVR (bus 0 bus_irq 9 global_irq 9 high level)
// ["systemd[1]: Mounted Mount unit for gnome-3-28-1804, revision 145.
// ["kernel: [    0.048757] ACPI: IRQ0 used by override.
// ["kernel: [    0.048759] ACPI: IRQ9 used by override.
// ["kernel: [    0.048762] Using ACPI (MADT) for SMP configuration information
// ["kernel: [    0.048764] ACPI: HPET id: 0x8086a201 base: 0xfed00000
// ["kernel: [    0.048780] e820: update [mem 0x7834c000-0x78378fff] usable ==> reserved
// ["systemd[1]: Mounted Mount unit for core18, revision 1932.
// ["kernel: [    0.048792] TSC deadline timer available
// ["kernel: [    0.048794] smpboot: Allowing 8 CPUs, 0 hotplug CPUs
// ["kernel: [    0.048824] PM: hibernation: Registered nosave memory: [mem 0x00000000-0x00000fff]
// ["kernel: [    0.048826] PM: hibernation: Registered nosave memory: [mem 0x000a0000-0x000fffff]
// ["systemd[1]: Mounted Mount unit for heroku, revision 4017.
// ["kernel: [    0.048829] PM: hibernation: Registered nosave memory: [mem 0x7834c000-0x78378fff]
// ["kernel: [    0.048831] PM: hibernation: Registered nosave memory: [mem 0x78a93000-0x78a93fff]
// ["systemd[1]: Mounted Mount unit for ngrok, revision 29.
// ["kernel: [    0.048833] PM: hibernation: Registered nosave memory: [mem 0x7a832000-0x7a832fff]
// ["kernel: [    0.048834] PM: hibernation: Registered nosave memory: [mem 0x7a833000-0x7a833fff]
// ["kernel: [    0.048837] PM: hibernation: Registered nosave memory: [mem 0x7bae2000-0x7bb89fff]
// ["kernel: [    0.048838] PM: hibernation: Registered nosave memory: [mem 0x7bb8a000-0x7bbb3fff]
// ["kernel: [    0.048839] PM: hibernation: Registered nosave memory: [mem 0x7bbb4000-0x7bbfefff]
// ["kernel: [    0.048841] PM: hibernation: Registered nosave memory: [mem 0x7bc00000-0x953fffff]
// ["systemd[1]: Found device HFM256GDGTNG-87A0A EFI\x20System\x20Partition.
// ["kernel: [    0.048842] PM: hibernation: Registered nosave memory: [mem 0x95400000-0xfe00ffff]
// ["kernel: [    0.048843] PM: hibernation: Registered nosave memory: [mem 0xfe010000-0xfe010fff]
// ["kernel: [    0.048845] PM: hibernation: Registered nosave memory: [mem 0xfe011000-0xfed1ffff]
// ["kernel: [    0.048846] PM: hibernation: Registered nosave memory: [mem 0xfed20000-0xfed7ffff]
// ["kernel: [    0.048847] PM: hibernation: Registered nosave memory: [mem 0xfed80000-0xffffffff]
// ["systemd[1]: Starting File System Check on /dev/disk/by-uuid/36B1-BA90...
// ["kernel: [    0.048849] [mem 0x95400000-0xfe00ffff] available for PCI devices
// ["kernel: [    0.048852] Booting paravirtualized kernel on bare hardware
// ["kernel: [    0.048856] clocksource: refined-jiffies: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 7645519600211568 ns
// ["kernel: [    0.048865] setup_percpu: NR_CPUS:8192 nr_cpumask_bits:8 nr_cpu_ids:8 nr_node_ids:1
// ["systemd[1]: Started File System Check Daemon to report status.
// ["kernel: [    0.049185] percpu: Embedded 56 pages/cpu s192512 r8192 d28672 u262144
// ["kernel: [    0.049194] pcpu-alloc: s192512 r8192 d28672 u262144 alloc=1*2097152
// ["kernel: [    0.049196] pcpu-alloc: [0] 0 1 2 3 4 5 6 7
// ["kernel: [    0.049238] Built 1 zonelists, mobility grouping on.  Total pages: 1961163
// ["systemd-fsck[858]: fsck.fat 4.1 (2017-01-24)
// ["kernel: [    0.049239] Policy zone: Normal
// ["kernel: [    0.049241] Kernel command line: BOOT_IMAGE=/boot/vmlinuz-5.10.5-surface root=UUID=150b68aa-654e-43a4-8265-286f2e5ffcb5 ro quiet splash reboot=pci
// ["kernel: [    0.049997] Dentry cache hash table entries: 1048576 (order: 11, 8388608 bytes, linear)
// ["kernel: [    0.050311] Inode-cache hash table entries: 524288 (order: 10, 4194304 bytes, linear)
// ["kernel: [    0.050437] mem auto-init: stack:off, heap alloc:on, heap free:off
// ["systemd-fsck[858]: /dev/nvme0n1p1: 11 files, 1996/130812 clusters
// ["kernel: [    0.079091] Memory: 7543840K/7969280K available (14345K kernel code, 3518K rwdata, 5272K rodata, 2656K init, 5972K bss, 392412K reserved, 32768K cma-reserved)
// ["kernel: [    0.079100] random: get_random_u64 called from __kmem_cache_create+0x31/0x430 with crng_init=1
// ["kernel: [    0.079269] SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=8, Nodes=1
// ["systemd[1]: Finished File System Check on /dev/disk/by-uuid/36B1-BA90.
// ["kernel: [    0.079287] ftrace: allocating 47600 entries in 186 pages
// ["kernel: [    0.108642] ftrace: allocated 186 pages with 5 groups
// ["kernel: [    0.108799] rcu: Hierarchical RCU implementation.
// ["kernel: [    0.108801] rcu: 	RCU restricting CPUs from NR_CPUS=8192 to nr_cpu_ids=8.
// ["systemd[1]: Mounting /boot/efi...
// ["kernel: [    0.108803] 	Trampoline variant of Tasks RCU enabled.
// ["kernel: [    0.108804] 	Rude variant of Tasks RCU enabled.
// ["kernel: [    0.108805] 	Tracing variant of Tasks RCU enabled.
// ["kernel: [    0.108807] rcu: RCU calculated value of scheduler-enlistment delay is 25 jiffies.
// ["kernel: [    0.108808] rcu: Adjusting geometry for rcu_fanout_leaf=16, nr_cpu_ids=8
// ["kernel: [    0.115257] NR_IRQS: 524544, nr_irqs: 2048, preallocated irqs: 16
// ["kernel: [    0.115858] random: crng done (trusting CPU's manufacturer)
// ["kernel: [    0.115897] Console: colour dummy device 80x25
// ["kernel: [    0.115920] printk: console [tty0] enabled
// ["kernel: [    0.115945] ACPI: Core revision 20200925
// ["systemd[1]: Mounted /boot/efi.
// ["kernel: [    0.116252] APIC: Switch to symmetric I/O mode setup
// ["kernel: [    0.116255] DMAR: Host address width 39
// ["kernel: [    0.116257] DMAR: DRHD base: 0x000000fed90000 flags: 0x0
// ["mtp-probe: checking bus 3, device 2: "/sys/devices/pci0000:00/0000:00:14.0/usb3/3-6"
// ["kernel: [    0.116265] DMAR: dmar0: reg_base_addr fed90000 ver 4:0 cap 1c0000c40660462 ecap 49e2ff0505e
// ["kernel: [    0.116267] DMAR: DRHD base: 0x000000fed91000 flags: 0x1
// ["kernel: [    0.116275] DMAR: dmar1: reg_base_addr fed91000 ver 1:0 cap d2008c40660462 ecap f050da
// ["kernel: [    0.116277] DMAR: RMRR base: 0x00000091000000 end: 0x000000953fffff
// ["kernel: [    0.116281] DMAR-IR: IOAPIC id 2 under DRHD base  0xfed91000 IOMMU 1
// ["kernel: [    0.116282] DMAR-IR: HPET id 0 under DRHD base 0xfed91000
// ["mtp-probe: bus: 3, device: 2 was not an MTP device
// ["kernel: [    0.116284] DMAR-IR: x2apic is disabled because BIOS sets x2apic opt out bit.
// ["systemd[1]: Mounted Mount unit for heroku, revision 4010.
// ["kernel: [    0.116285] DMAR-IR: Use 'intremap=no_x2apic_optout' to override the BIOS setting.
// ["kernel: [    0.118068] DMAR-IR: Enabled IRQ remapping in xapic mode
// ["kernel: [    0.118070] x2apic: IRQ remapping doesn't support X2APIC mode
// ["kernel: [    0.122640] clocksource: tsc-early: mask: 0xffffffffffffffff max_cycles: 0x159647815e3, max_idle_ns: 440795269835 ns
// ["systemd[1]: Mounted Mount unit for ngrok, revision 26.
// ["kernel: [    0.122650] Calibrating delay loop (skipped), value calculated using timer frequency.. 2995.20 BogoMIPS (lpj=5990400)
// ["systemd[1]: Mounted Mount unit for core18, revision 1944.
// ["systemd[1]: Mounted Mount unit for snapd, revision 10707.
// ["systemd[1]: Reached target Local File Systems.
// ["systemd[1]: Starting Load AppArmor profiles...
// ["systemd[1]: Starting Set console font and keymap...
// ["systemd[1]: Starting Create final runtime dir for shutdown pivot root...
// ["systemd[1]: Starting Preprocess NFS configuration...
// ["systemd[1]: Starting Tell Plymouth To Write Out Runtime Data...
// ["systemd[1]: Condition check resulted in Store a System Token in an EFI Variable being skipped.
// ["systemd[1]: Condition check resulted in Commit a transient machine-id on disk being skipped.
// ["systemd[1]: Starting Create Volatile Files and Directories...
// ["systemd[1]: Finished Set console font and keymap.
// ["systemd[1]: Finished Create final runtime dir for shutdown pivot root.
// ["systemd[1]: nfs-config.service: Succeeded.
// ["systemd[1]: Finished Preprocess NFS configuration.
// ["systemd[1]: Condition check resulted in RPC security service for NFS client and server being skipped.
// ["systemd[1]: Reached target NFS client services.
// ["apparmor.systemd[912]: Restarting AppArmor
// ["kernel: [    0.122654] pid_max: default: 32768 minimum: 301
// ["apparmor.systemd[912]: Reloading AppArmor profiles
// ["kernel: [    0.126645] LSM: Security Framework initializing
// ["kernel: [    0.126645] Yama: becoming mindful.
// ["kernel: [    0.126645] AppArmor: AppArmor initialized
// ["kernel: [    0.126645] Mount-cache hash table entries: 16384 (order: 5, 131072 bytes, linear)
// ["kernel: [    0.126645] Mountpoint-cache hash table entries: 16384 (order: 5, 131072 bytes, linear)
// ["kernel: [    0.126645] x86/cpu: User Mode Instruction Prevention (UMIP) activated
// ["apparmor.systemd[929]: Skipping profile in /etc/apparmor.d/disable: usr.bin.firefox
// ["kernel: [    0.126645] mce: CPU0: Thermal monitoring enabled (TM1)
// ["kernel: [    0.126645] process: using mwait in idle threads
// ["kernel: [    0.126645] Last level iTLB entries: 4KB 0, 2MB 0, 4MB 0
// ["kernel: [    0.126645] Last level dTLB entries: 4KB 0, 2MB 0, 4MB 0, 1GB 0
// ["kernel: [    0.126645] Spectre V1 : Mitigation: usercopy/swapgs barriers and __user pointer sanitization
// ["kernel: [    0.126645] Spectre V2 : Mitigation: Enhanced IBRS
// ["apparmor.systemd[930]: Skipping profile in /etc/apparmor.d/disable: usr.sbin.rsyslogd
// ["kernel: [    0.126645] Spectre V2 : Spectre v2 / SpectreRSB mitigation: Filling RSB on context switch
// ["kernel: [    0.126645] Spectre V2 : mitigation: Enabling conditional Indirect Branch Prediction Barrier
// ["kernel: [    0.126645] Speculative Store Bypass: Mitigation: Speculative Store Bypass disabled via prctl and seccomp
// ["systemd[1]: Received SIGRTMIN+20 from PID 317 (plymouthd).
// ["kernel: [    0.126645] Freeing SMP alternatives memory: 40K
// ["kernel: [    0.126645] smpboot: CPU0: Intel(R) Core(TM) i5-1035G7 CPU @ 1.20GHz (family: 0x6, model: 0x7e, stepping: 0x5)
// ["kernel: [    0.126645] Performance Events: PEBS fmt4+-baseline,  AnyThread deprecated, Icelake events, 32-deep LBR, full-width counters, Intel PMU driver.
// ["kernel: [    0.126645] ... version:                5
// ["systemd[1]: plymouth-read-write.service: Succeeded.
// ["kernel: [    0.126645] ... bit width:              48
// ["kernel: [    0.126645] ... generic registers:      8
// ["kernel: [    0.126645] ... value mask:             0000ffffffffffff
// ["kernel: [    0.126645] ... max period:             00007fffffffffff
// ["kernel: [    0.126645] ... fixed-purpose events:   4
// ["systemd[1]: Finished Tell Plymouth To Write Out Runtime Data.
// ["kernel: [    0.126645] ... event mask:             0001000f000000ff
// ["kernel: [    0.126645] rcu: Hierarchical SRCU implementation.
// ["kernel: [    0.126645] NMI watchdog: Enabled. Permanently consumes one hw-PMU counter.
// ["kernel: [    0.126645] smp: Bringing up secondary CPUs ...
// ["systemd[1]: Starting Tell Plymouth To Write Out Runtime Data...
// ["kernel: [    0.126645] x86: Booting SMP configuration:
// ["kernel: [    0.126645] .... node  #0, CPUs:      #1 #2 #3 #4 #5 #6 #7
// ["kernel: [    0.159756] smp: Brought up 1 node, 8 CPUs
// ["systemd[1]: Starting Show Plymouth Boot Screen...
// ["kernel: [    0.159756] smpboot: Max logical packages: 1
// ["kernel: [    0.159756] smpboot: Total of 8 processors activated (23961.60 BogoMIPS)
// ["kernel: [    0.163098] devtmpfs: initialized
// ["kernel: [    0.163098] x86/mm: Memory block size: 128MB
// ["kernel: [    0.163662] PM: Registering ACPI NVS region [mem 0x7a832000-0x7a832fff] (4096 bytes)
// ["kernel: [    0.163662] PM: Registering ACPI NVS region [mem 0x7bb8a000-0x7bbb3fff] (172032 bytes)
// ["systemd[1]: Condition check resulted in Set Up Additional Binary Formats being skipped.
// ["kernel: [    0.163662] clocksource: jiffies: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 7645041785100000 ns
// ["kernel: [    0.163662] futex hash table entries: 2048 (order: 5, 131072 bytes, linear)
// ["kernel: [    0.163662] pinctrl core: initialized pinctrl subsystem
// ["systemd[1]: Condition check resulted in Store a System Token in an EFI Variable being skipped.
// ["kernel: [    0.163662] PM: RTC time: 15:47:11, date: 2021-01-16
// ["kernel: [    0.163662] NET: Registered protocol family 16
// ["kernel: [    0.163662] DMA: preallocated 1024 KiB GFP_KERNEL pool for atomic allocations
// ["systemd[1]: Condition check resulted in Rebuild Hardware Database being skipped.
// ["kernel: [    0.163662] DMA: preallocated 1024 KiB GFP_KERNEL|GFP_DMA pool for atomic allocations
// ["kernel: [    0.163662] DMA: preallocated 1024 KiB GFP_KERNEL|GFP_DMA32 pool for atomic allocations
// ["kernel: [    0.163662] audit: initializing netlink subsys (disabled)
// ["kernel: [    0.163662] audit: type=2000 audit(1610812031.040:1): state=initialized audit_enabled=0 res=1
// ["systemd[1]: Condition check resulted in Commit a transient machine-id on disk being skipped.
// ["kernel: [    0.163662] thermal_sys: Registered thermal governor 'fair_share'
// ["kernel: [    0.163662] thermal_sys: Registered thermal governor 'bang_bang'
// ["kernel: [    0.163662] thermal_sys: Registered thermal governor 'step_wise'
// ["systemd[1]: Condition check resulted in Platform Persistent Storage Archival being skipped.
// ["kernel: [    0.163662] thermal_sys: Registered thermal governor 'user_space'
// ["kernel: [    0.163662] thermal_sys: Registered thermal governor 'power_allocator'
// ["kernel: [    0.163662] EISA bus registered
// ["kernel: [    0.163662] cpuidle: using governor ladder
// ["kernel: [    0.163662] cpuidle: using governor menu
// ["kernel: [    0.163662] ACPI: bus type PCI registered
// ["systemd[1]: Finished Create Volatile Files and Directories.
// ["kernel: [    0.163662] acpiphp: ACPI Hot Plug PCI Controller Driver version: 0.5
// ["kernel: [    0.163662] PCI: MMCONFIG for domain 0000 [bus 00-ff] at [mem 0xe0000000-0xefffffff] (base 0xe0000000)
// ["kernel: [    0.163662] PCI: not using MMCONFIG
// ["kernel: [    0.163662] PCI: Using configuration type 1 for base access
// ["systemd[1]: Starting RPC bind portmap service...
// ["kernel: [    0.167133] ENERGY_PERF_BIAS: Set to 'normal', was 'performance'
// ["kernel: [    0.168646] HugeTLB registered 1.00 GiB page size, pre-allocated 0 pages
// ["systemd[1]: Starting Network Name Resolution...
// ["kernel: [    0.168646] HugeTLB registered 2.00 MiB page size, pre-allocated 0 pages
// ["kernel: [    0.170794] ACPI: Added _OSI(Module Device)
// ["kernel: [    0.170795] ACPI: Added _OSI(Processor Device)
// ["kernel: [    0.170797] ACPI: Added _OSI(3.0 _SCP Extensions)
// ["kernel: [    0.170798] ACPI: Added _OSI(Processor Aggregator Device)
// ["kernel: [    0.170800] ACPI: Added _OSI(Linux-Dell-Video)
// ["systemd[1]: Starting Network Time Synchronization...
// ["kernel: [    0.170802] ACPI: Added _OSI(Linux-Lenovo-NV-HDMI-Audio)
// ["kernel: [    0.170804] ACPI: Added _OSI(Linux-HPI-Hybrid-Graphics)
// ["systemd[1]: Starting Update UTMP about System Boot/Shutdown...
// ["kernel: [    0.251203] ACPI: 9 ACPI AML tables successfully acquired and loaded
// ["kernel: [    0.265793] ACPI: Dynamic OEM Table Load:
// ["kernel: [    0.265809] ACPI: SSDT 0xFFFF901281072C00 0000F4 (v02 PmRef  Cpu0Psd  00003000 INTL 20181003)
// ["kernel: [    0.268047] ACPI: \_SB_.PR00: _OSC native thermal LVT Acked
// ["kernel: [    0.269579] ACPI: Dynamic OEM Table Load:
// ["systemd[1]: plymouth-start.service: Succeeded.
// ["kernel: [    0.269589] ACPI: SSDT 0xFFFF901281078400 000394 (v02 PmRef  Cpu0Cst  00003001 INTL 20181003)
// ["kernel: [    0.271956] ACPI: Dynamic OEM Table Load:
// ["kernel: [    0.271964] ACPI: SSDT 0xFFFF901280C0B800 000437 (v02 PmRef  Cpu0Ist  00003000 INTL 20181003)
// ["kernel: [    0.274467] ACPI: Dynamic OEM Table Load:
// ["systemd[1]: Started Show Plymouth Boot Screen.
// ["kernel: [    0.274475] ACPI: SSDT 0xFFFF901281066C00 00012C (v02 PmRef  Cpu0Hwp  00003000 INTL 20181003)
// ["kernel: [    0.276663] ACPI: Dynamic OEM Table Load:
// ["kernel: [    0.276673] ACPI: SSDT 0xFFFF901280C0B000 000724 (v02 PmRef  HwpLvt   00003000 INTL 20181003)
// ["kernel: [    0.279416] ACPI: Dynamic OEM Table Load:
// ["kernel: [    0.279425] ACPI: SSDT 0xFFFF901280C0C800 0005FC (v02 PmRef  ApIst    00003000 INTL 20181003)
// ["systemd[1]: plymouth-read-write.service: Succeeded.
// ["kernel: [    0.281978] ACPI: Dynamic OEM Table Load:
// ["kernel: [    0.281986] ACPI: SSDT 0xFFFF901281079000 000317 (v02 PmRef  ApHwp    00003000 INTL 20181003)
// ["kernel: [    0.284512] ACPI: Dynamic OEM Table Load:
// ["kernel: [    0.284521] ACPI: SSDT 0xFFFF901281080000 000AB0 (v02 PmRef  ApPsd    00003000 INTL 20181003)
// ["systemd[1]: Finished Tell Plymouth To Write Out Runtime Data.
// ["systemd[1]: Received SIGRTMIN+20 from PID 317 (plymouthd).
// ["kernel: [    0.288076] ACPI: Dynamic OEM Table Load:
// ["kernel: [    0.288085] ACPI: SSDT 0xFFFF90128107B400 00030A (v02 PmRef  ApCst    00003000 INTL 20181003)
// ["kernel: [    0.295949] ACPI: Interpreter enabled
// ["kernel: [    0.296040] ACPI: (supports S0 S4 S5)
// ["systemd[1]: Condition check resulted in Dispatch Password Requests to Console Directory Watch being skipped.
// ["kernel: [    0.296041] ACPI: Using IOAPIC for interrupt routing
// ["kernel: [    0.296111] PCI: MMCONFIG for domain 0000 [bus 00-ff] at [mem 0xe0000000-0xefffffff] (base 0xe0000000)
// ["systemd[1]: Finished Update UTMP about System Boot/Shutdown.
// ["kernel: [    0.297397] PCI: MMCONFIG at [mem 0xe0000000-0xefffffff] reserved in ACPI motherboard resources
// ["kernel: [    0.297420] PCI: Using host bridge windows from ACPI; if necessary, use "pci=nocrs" and report a bug
// ["kernel: [    0.298262] ACPI: Enabled 8 GPEs in block 00 to 7F
// ["kernel: [    0.320427] ACPI: Power Resource [V0PR] (on)
// ["kernel: [    0.320732] ACPI: Power Resource [V1PR] (on)
// ["systemd[1]: Started RPC bind portmap service.
// ["kernel: [    0.321032] ACPI: Power Resource [V2PR] (on)
// ["kernel: [    0.323767] ACPI: Power Resource [WRST] (on)
// ["kernel: [    0.324128] ACPI: Power Resource [TBT0] (on)
// ["kernel: [    0.324200] ACPI: Power Resource [TBT1] (on)
// ["systemd[1]: Reached target Remote File Systems (Pre).
// ["kernel: [    0.324267] ACPI: Power Resource [D3C] (on)
// ["kernel: [    0.341632] ACPI: Power Resource [PIN] (off)
// ["kernel: [    0.342592] ACPI: PCI Root Bridge [PCI0] (domain 0000 [bus 00-fe])
// ["kernel: [    0.342601] acpi PNP0A08:00: _OSC: OS supports [ExtendedConfig ASPM ClockPM Segments MSI HPX-Type3]
// ["systemd[1]: Reached target Remote File Systems.
// ["kernel: [    0.354763] acpi PNP0A08:00: _OSC: OS now controls [PCIeHotplug SHPCHotplug PME AER PCIeCapability LTR]
// ["kernel: [    0.361429] PCI host bridge to bus 0000:00
// ["kernel: [    0.361433] pci_bus 0000:00: root bus resource [io  0x0000-0x0cf7 window]
// ["kernel: [    0.361435] pci_bus 0000:00: root bus resource [io  0x0d00-0xffff window]
// ["systemd[1]: Reached target RPC Port Mapper.
// ["kernel: [    0.361437] pci_bus 0000:00: root bus resource [mem 0x000a0000-0x000bffff window]
// ["kernel: [    0.361439] pci_bus 0000:00: root bus resource [mem 0x000c0000-0x000c3fff window]
// ["kernel: [    0.361440] pci_bus 0000:00: root bus resource [mem 0x000c4000-0x000c7fff window]
// ["systemd[1]: Finished Load AppArmor profiles.
// ["systemd[1]: Starting Raise network interfaces...
// ["systemd[1]: Starting Load AppArmor profiles managed internally by snapd...
// ["systemd[1]: Finished Raise network interfaces.
// ["systemd[1]: Started Network Time Synchronization.
// ["systemd[1]: Reached target System Time Set.
// ["systemd[1]: Reached target System Time Synchronized.
// ["systemd-resolved[948]: Positive Trust Anchors:
// ["systemd-resolved[948]: . IN DS 20326 8 2 e06d44b80b8f1d39a95c0b0d7c65d08458e880409bbc683457104237c7f8ec8d
// ["systemd-resolved[948]: Negative trust anchors: 10.in-addr.arpa 16.172.in-addr.arpa 17.172.in-addr.arpa 18.172.in-addr.arpa 19.172.in-addr.arpa 20.172.in-addr.arpa 21.172.in-addr.arpa 22.172.in-addr.arpa 23.172.in-addr.arpa 24.172.in-addr.arpa 25.172.in-addr.arpa 26.172.in-addr.arpa 27.172.in-addr.arpa 28.172.in-addr.arpa 29.172.in-addr.arpa 30.172.in-addr.arpa 31.172.in-addr.arpa 168.192.in-addr.arpa d.f.ip6.arpa corp home internal intranet lan local private test
// ["systemd-resolved[948]: Using system hostname 'surface'.
// ["systemd[1]: Started Network Name Resolution.
// ["systemd[1]: Reached target Host and Network Name Lookups.
// ["systemd[1]: Finished Load AppArmor profiles managed internally by snapd.
// ["systemd[1]: Reached target System Initialization.
// ["systemd[1]: Started ACPI Events Check.
// ["systemd[1]: Started CUPS Scheduler.
// ["systemd[1]: Started Trigger anacron every hour.
// ["kernel: [    0.361442] pci_bus 0000:00: root bus resource [mem 0x000c8000-0x000cbfff window]
// ["kernel: [    0.361443] pci_bus 0000:00: root bus resource [mem 0x000cc000-0x000cffff window]
// ["kernel: [    0.361445] pci_bus 0000:00: root bus resource [mem 0x000d0000-0x000d3fff window]
// [kernel: [    0.361446] pci_bus 0000:00: root bus resource [mem 0x000d4000-0x000d7fff window]
// [kernel: [    0.361448] pci_bus 0000:00: root bus resource [mem 0x000d8000-0x000dbfff window]
// [systemd[1]: Started Daily apt download activities.
// [kernel: [    0.361449] pci_bus 0000:00: root bus resource [mem 0x000dc000-0x000dffff window]
// [systemd[1]: Started Daily apt upgrade and clean activities.
// [kernel: [    0.361451] pci_bus 0000:00: root bus resource [mem 0x000e0000-0x000e3fff window]
// [kernel: [    0.361452] pci_bus 0000:00: root bus resource [mem 0x000e4000-0x000e7fff window]
// [kernel: [    0.361454] pci_bus 0000:00: root bus resource [mem 0x000e8000-0x000ebfff window]
// [kernel: [    0.361455] pci_bus 0000:00: root bus resource [mem 0x000ec000-0x000effff window]
// [kernel: [    0.361457] pci_bus 0000:00: root bus resource [mem 0x000f0000-0x000fffff window]
// [systemd[1]: Started Periodic ext4 Online Metadata Check for All Filesystems.
// [kernel: [    0.361459] pci_bus 0000:00: root bus resource [mem 0x95400000-0xdfffffff window]
// [systemd[1]: Started Discard unused blocks once a week.
// [kernel: [    0.361460] pci_bus 0000:00: root bus resource [mem 0x4000000000-0x7fffffffff window]
// [kernel: [    0.361462] pci_bus 0000:00: root bus resource [bus 00-fe]
// [kernel: [    0.361535] pci 0000:00:00.0: [8086:8a12] type 00 class 0x060000
// [kernel: [    0.364021] pci 0000:00:02.0: [8086:8a52] type 00 class 0x030000
// [kernel: [    0.364038] pci 0000:00:02.0: reg 0x10: [mem 0x6000000000-0x6000ffffff 64bit]
// [kernel: [    0.364049] pci 0000:00:02.0: reg 0x18: [mem 0x4000000000-0x400fffffff 64bit pref]
// [systemd[1]: Started Refresh fwupd metadata regularly.
// [kernel: [    0.364056] pci 0000:00:02.0: reg 0x20: [io  0x3000-0x303f]
// [kernel: [    0.364086] pci 0000:00:02.0: BAR 2: assigned to efifb
// [kernel: [    0.364088] pci 0000:00:02.0: DMAR: Skip IOMMU disabling for graphics
// [kernel: [    0.366305] pci 0000:00:04.0: [8086:8a03] type 00 class 0x118000
// [systemd[1]: Started Daily rotation of log files.
// [kernel: [    0.366330] pci 0000:00:04.0: reg 0x10: [mem 0x6001120000-0x600112ffff 64bit]
// [kernel: [    0.368666] pci 0000:00:0d.0: [8086:8a13] type 00 class 0x0c0330
// [kernel: [    0.368686] pci 0000:00:0d.0: reg 0x10: [mem 0x6001110000-0x600111ffff 64bit]
// [systemd[1]: Started Daily man-db regeneration.
// [kernel: [    0.368766] pci 0000:00:0d.0: PME# supported from D3hot D3cold
// [systemd[1]: Started Message of the Day.
// [systemd[1]: Condition check resulted in Timer to automatically fetch and run repair assertions being skipped.
// [kernel: [    0.371062] pci 0000:00:14.0: [8086:34ed] type 00 class 0x0c0330
// [kernel: [    0.371110] pci 0000:00:14.0: reg 0x10: [mem 0x6001100000-0x600110ffff 64bit]
// [kernel: [    0.371245] pci 0000:00:14.0: PME# supported from D3hot D3cold
// [kernel: [    0.373483] pci 0000:00:14.2: [8086:34ef] type 00 class 0x050000
// [systemd[1]: Started Daily Cleanup of Temporary Directories.
// [kernel: [    0.373531] pci 0000:00:14.2: reg 0x10: [mem 0x6001138000-0x6001139fff 64bit]
// [systemd[1]: Reached target Paths.
// [kernel: [    0.373553] pci 0000:00:14.2: reg 0x18: [mem 0x6001140000-0x6001140fff 64bit]
// [kernel: [    0.375906] pci 0000:00:14.3: [8086:34f0] type 00 class 0x028000
// [kernel: [    0.376003] pci 0000:00:14.3: reg 0x10: [mem 0x6001134000-0x6001137fff 64bit]
// [kernel: [    0.376313] pci 0000:00:14.3: PME# supported from D0 D3hot D3cold
// [kernel: [    0.378709] pci 0000:00:15.0: [8086:34e8] type 00 class 0x0c8000
// [kernel: [    0.378810] pci 0000:00:15.0: reg 0x10: [mem 0x00000000-0x00000fff 64bit]
// [kernel: [    0.381387] pci 0000:00:15.1: [8086:34e9] type 00 class 0x0c8000
// [kernel: [    0.381490] pci 0000:00:15.1: reg 0x10: [mem 0x00000000-0x00000fff 64bit]
// [systemd[1]: Reached target Timers.
// [kernel: [    0.384066] pci 0000:00:16.0: [8086:34e0] type 00 class 0x078000
// [kernel: [    0.384115] pci 0000:00:16.0: reg 0x10: [mem 0x600113d000-0x600113dfff 64bit]
// [kernel: [    0.384258] pci 0000:00:16.0: PME# supported from D3hot
// [kernel: [    0.386528] pci 0000:00:16.4: [8086:34e4] type 00 class 0x078000
// [kernel: [    0.386563] pci 0000:00:16.4: reg 0x10: [mem 0x600113c000-0x600113cfff 64bit]
// [kernel: [    0.386725] pci 0000:00:16.4: PME# supported from D3hot
// [systemd[1]: Listening on ACPID Listen Socket.
// [kernel: [    0.389021] pci 0000:00:19.0: [8086:34c5] type 00 class 0x0c8000
// [kernel: [    0.389125] pci 0000:00:19.0: reg 0x10: [mem 0x00000000-0x00000fff 64bit]
// [kernel: [    0.391664] pci 0000:00:1d.0: [8086:34b0] type 01 class 0x060400
// [kernel: [    0.391856] pci 0000:00:1d.0: PME# supported from D0 D3hot D3cold
// [kernel: [    0.391920] pci 0000:00:1d.0: PTM enabled (root), 4ns granularity
// [systemd[1]: Listening on Avahi mDNS/DNS-SD Stack Activation Socket.
// [kernel: [    0.394348] pci 0000:00:1e.0: [8086:34a8] type 00 class 0x078000
// [kernel: [    0.394448] pci 0000:00:1e.0: reg 0x10: [mem 0x00000000-0x00000fff 64bit]
// [kernel: [    0.397106] pci 0000:00:1f.0: [8086:3482] type 00 class 0x060100
// [kernel: [    0.399509] pci 0000:00:1f.3: [8086:34c8] type 00 class 0x040380
// [systemd[1]: Listening on CUPS Scheduler.
// [kernel: [    0.399593] pci 0000:00:1f.3: reg 0x10: [mem 0x6001130000-0x6001133fff 64bit]
// [kernel: [    0.399678] pci 0000:00:1f.3: reg 0x20: [mem 0x6001000000-0x60010fffff 64bit]
// [kernel: [    0.399867] pci 0000:00:1f.3: PME# supported from D3hot D3cold
// [systemd[1]: Listening on D-Bus System Message Bus Socket.
// [kernel: [    0.402173] pci 0000:00:1f.5: [8086:34a4] type 00 class 0x0c8000
// [kernel: [    0.402202] pci 0000:00:1f.5: reg 0x10: [mem 0xfe010000-0xfe010fff]
// [kernel: [    0.404561] pci 0000:01:00.0: [1c5c:1327] type 00 class 0x010802
// [kernel: [    0.404593] pci 0000:01:00.0: reg 0x10: [mem 0x95400000-0x95403fff 64bit]
// [kernel: [    0.404796] pci 0000:01:00.0: supports D1
// [kernel: [    0.404798] pci 0000:01:00.0: PME# supported from D0 D1 D3hot
// [systemd[1]: Starting Socket activation for snappy daemon.
// [systemd[1]: Listening on UUID daemon activation socket.
// [kernel: [    0.405016] pci 0000:00:1d.0: PCI bridge to [bus 01]
// [kernel: [    0.405027] pci 0000:00:1d.0:   bridge window [mem 0x95400000-0x954fffff]
// [kernel: [    0.494756] iommu: Default domain type: Translated
// [kernel: [    0.494756] pci 0000:00:02.0: vgaarb: setting as boot VGA device
// [kernel: [    0.494756] pci 0000:00:02.0: vgaarb: VGA device added: decodes=io+mem,owns=io+mem,locks=none
// [systemd[1]: Listening on Socket activation for snappy daemon.
// [kernel: [    0.494756] pci 0000:00:02.0: vgaarb: bridge control possible
// [kernel: [    0.494756] vgaarb: loaded
// [systemd[1]: Reached target Sockets.
// [kernel: [    0.494906] SCSI subsystem initialized
// [kernel: [    0.498660] libata version 3.00 loaded.
// [kernel: [    0.498681] ACPI: bus type USB registered
// [kernel: [    0.498697] usbcore: registered new interface driver usbfs
// [kernel: [    0.498707] usbcore: registered new interface driver hub
// [kernel: [    0.498737] usbcore: registered new device driver usb
// [systemd[1]: Reached target Basic System.
// [kernel: [    0.498756] pps_core: LinuxPPS API ver. 1 registered
// [kernel: [    0.498757] pps_core: Software ver. 5.3.6 - Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>
// [kernel: [    0.498760] PTP clock support registered
// [systemd[1]: Starting Accounts Service...
// [kernel: [    0.498787] EDAC MC: Ver: 3.0.0
// [kernel: [    0.499035] Registered efivars operations
// [kernel: [    0.499035] NetLabel: Initializing
// [systemd[1]: Started ACPI event daemon.
// [kernel: [    0.499035] NetLabel:  domain hash size = 128
// [kernel: [    0.499035] NetLabel:  protocols = UNLABELED CIPSOv4 CALIPSO
// [kernel: [    0.499035] NetLabel:  unlabeled traffic allowed by default
// [kernel: [    0.499035] PCI: Using ACPI for IRQ routing
// [kernel: [    0.530850] PCI: pci_cache_line_size set to 64 bytes
// [kernel: [    0.531059] pci 0000:00:1f.5: can't claim BAR 0 [mem 0xfe010000-0xfe010fff]: no compatible bridge window
// [systemd[1]: Condition check resulted in Manage Sound Card State (restore and store) being skipped.
// [kernel: [    0.531261] e820: reserve RAM buffer [mem 0x7834c000-0x7bffffff]
// [kernel: [    0.531264] e820: reserve RAM buffer [mem 0x78a93000-0x7bffffff]
// [kernel: [    0.531266] e820: reserve RAM buffer [mem 0x7a832000-0x7bffffff]
// [kernel: [    0.531268] e820: reserve RAM buffer [mem 0x7bae2000-0x7bffffff]
// [systemd[1]: Starting Save/Restore Sound Card State...
// [kernel: [    0.531270] e820: reserve RAM buffer [mem 0x7bc00000-0x7bffffff]
// [kernel: [    0.531271] e820: reserve RAM buffer [mem 0x26ac00000-0x26bffffff]
// [kernel: [    0.535916] clocksource: Switched to clocksource tsc-early
// [kernel: [    0.552930] VFS: Disk quotas dquot_6.6.0
// [systemd[1]: Started Run anacron jobs.
// [kernel: [    0.552954] VFS: Dquot-cache hash table entries: 512 (order 0, 4096 bytes)
// [kernel: [    0.553097] AppArmor: AppArmor Filesystem Enabled
// [kernel: [    0.553137] pnp: PnP ACPI init
// [kernel: [    0.553590] system 00:00: [io  0x0680-0x069f] has been reserved
// [kernel: [    0.553593] system 00:00: [io  0x164e-0x164f] has been reserved
// [systemd[1]: Starting LSB: automatic crash report generation...
// [kernel: [    0.553601] system 00:00: Plug and Play ACPI device, IDs PNP0c02 (active)
// [kernel: [    0.553685] pnp 00:01: Plug and Play ACPI device, IDs PNP0b00 (active)
// [kernel: [    0.553862] system 00:02: [io  0x1854-0x1857] has been reserved
// [kernel: [    0.553867] system 00:02: Plug and Play ACPI device, IDs INT3f0d PNP0c02 (active)
// [anacron[1080]: Anacron 2.3 started on 2021-01-16
// [kernel: [    0.554488] system 00:03: [mem 0xfed10000-0xfed17fff] has been reserved
// [kernel: [    0.554491] system 00:03: [mem 0xfeda0000-0xfeda0fff] has been reserved
// [systemd[1]: Starting Avahi mDNS/DNS-SD Stack...
// [kernel: [    0.554493] system 00:03: [mem 0xfeda1000-0xfeda1fff] has been reserved
// [kernel: [    0.554495] system 00:03: [mem 0xe0000000-0xefffffff] has been reserved
// [kernel: [    0.554497] system 00:03: [mem 0xfed20000-0xfed7ffff] could not be reserved
// [kernel: [    0.554499] system 00:03: [mem 0xfed90000-0xfed93fff] could not be reserved
// [systemd[1]: Started Regular background program processing daemon.
// [systemd[1]: Started CUPS Scheduler.
// [systemd[1]: Started D-Bus System Message Bus.
// [anacron[1080]: Will run job `cron.daily' in 5 min.
// [anacron[1080]: Jobs will be executed sequentially
// [cron[1084]: (CRON) INFO (pidfile fd = 3)
// [systemd[1]: Starting Network Manager...
// [cron[1084]: (CRON) INFO (Running @reboot jobs)
// [systemd[1]: Started Save initial kernel messages after boot.
// [systemd[1]: Starting Remove Stale Online ext4 Metadata Check Snapshots...
// [systemd[1]: Condition check resulted in getty on tty2-tty6 if dbus and logind are not available being skipped.
// [avahi-daemon[1082]: Found user 'avahi' (UID 116) and group 'avahi' (GID 123).
// [systemd[1]: Starting Detect the available GPUs and deal with any system changes...
// [systemd[1]: Starting LSB: Record successful boot for GRUB...
// [systemd[1]: Starting GRUB failed boot detection...
// [systemd[1]: Started Intel Precise Touch & Stylus Daemon.
// [systemd[1]: Started irqbalance daemon.
// [systemd[1]: Starting Dispatcher daemon for systemd-networkd...
// [kernel: [    0.554501] system 00:03: [mem 0xfee00000-0xfeefffff] has been reserved
// [kernel: [    0.554506] system 00:03: Plug and Play ACPI device, IDs PNP0c02 (active)
// [kernel: [    0.555607] system 00:04: [io  0x1800-0x18fe] could not be reserved
// [systemd[1]: Starting LSB: Kernel NFS server support...
// [kernel: [    0.555610] system 00:04: [mem 0xfd000000-0xfd68ffff] has been reserved
// [kernel: [    0.555612] system 00:04: [mem 0xfd6b0000-0xfd6cffff] has been reserved
// [kernel: [    0.555613] system 00:04: [mem 0xfd6f0000-0xfdffffff] has been reserved
// [kernel: [    0.555616] system 00:04: [mem 0xfe000000-0xfe01ffff] could not be reserved
// [kernel: [    0.555617] system 00:04: [mem 0xfe200000-0xfe7fffff] has been reserved
// [kernel: [    0.555619] system 00:04: [mem 0xff000000-0xffffffff] has been reserved
// [systemd[1]: Started Set the CPU Frequency Scaling governor.
// [kernel: [    0.555624] system 00:04: Plug and Play ACPI device, IDs PNP0c02 (active)
// [kernel: [    0.556133] system 00:05: [io  0x2000-0x20fe] has been reserved
// [kernel: [    0.556138] system 00:05: Plug and Play ACPI device, IDs PNP0c02 (active)
// [kernel: [    0.556507] system 00:06: [mem 0xfe038000-0xfe038fff] has been reserved
// [kernel: [    0.556512] system 00:06: Plug and Play ACPI device, IDs PNP0c02 (active)
// [systemd[1]: Starting Authorization Manager...
// [kernel: [    0.557455] pnp: PnP ACPI: found 7 devices
// [kernel: [    0.563735] clocksource: acpi_pm: mask: 0xffffff max_cycles: 0xffffff, max_idle_ns: 2085701024 ns
// [systemd[1]: Starting Restore /etc/resolv.conf if the system crashed before the ppp link was shut down...
// [kernel: [    0.563819] NET: Registered protocol family 2
// [kernel: [    0.564075] tcp_listen_portaddr_hash hash table entries: 4096 (order: 4, 65536 bytes, linear)
// [kernel: [    0.564144] TCP established hash table entries: 65536 (order: 7, 524288 bytes, linear)
// [kernel: [    0.564395] TCP bind hash table entries: 65536 (order: 8, 1048576 bytes, linear)
// [kernel: [    0.564505] TCP: Hash tables configured (established 65536 bind 65536)
// [kernel: [    0.564596] MPTCP token hash table entries: 8192 (order: 5, 196608 bytes, linear)
// [systemd[1]: Starting System Logging Service...
// [kernel: [    0.564645] UDP hash table entries: 4096 (order: 5, 131072 bytes, linear)
// [kernel: [    0.564678] UDP-Lite hash table entries: 4096 (order: 5, 131072 bytes, linear)
// [systemd[1]: Condition check resulted in Secure Boot updates for DB and DBX being skipped.
// [kernel: [    0.564745] NET: Registered protocol family 1
// [kernel: [    0.564752] NET: Registered protocol family 44
// [kernel: [    0.564778] pci 0000:00:15.0: BAR 0: assigned [mem 0x4010000000-0x4010000fff 64bit]
// [kernel: [    0.564860] pci 0000:00:15.1: BAR 0: assigned [mem 0x4010001000-0x4010001fff 64bit]
// [kernel: [    0.564940] pci 0000:00:19.0: BAR 0: assigned [mem 0x4010002000-0x4010002fff 64bit]
// [kernel: [    0.565018] pci 0000:00:1e.0: BAR 0: assigned [mem 0x4010003000-0x4010003fff 64bit]
// [kernel: [    0.565097] pci 0000:00:1f.5: BAR 0: assigned [mem 0x95500000-0x95500fff]
// [kernel: [    0.565125] pci 0000:00:1d.0: PCI bridge to [bus 01]
// [kernel: [    0.565147] pci 0000:00:1d.0:   bridge window [mem 0x95400000-0x954fffff]
// [kernel: [    0.565162] pci_bus 0000:00: resource 4 [io  0x0000-0x0cf7 window]
// [kernel: [    0.565163] pci_bus 0000:00: resource 5 [io  0x0d00-0xffff window]
// [systemd[1]: Condition check resulted in Automatically repair incorrect owner/permissions on core devices being skipped.
// [kernel: [    0.565165] pci_bus 0000:00: resource 6 [mem 0x000a0000-0x000bffff window]
// [kernel: [    0.565167] pci_bus 0000:00: resource 7 [mem 0x000c0000-0x000c3fff window]
// [kernel: [    0.565169] pci_bus 0000:00: resource 8 [mem 0x000c4000-0x000c7fff window]
// [systemd[1]: Condition check resulted in Wait for the Ubuntu Core chooser trigger being skipped.
// [kernel: [    0.565170] pci_bus 0000:00: resource 9 [mem 0x000c8000-0x000cbfff window]
// [kernel: [    0.565172] pci_bus 0000:00: resource 10 [mem 0x000cc000-0x000cffff window]
// [kernel: [    0.565174] pci_bus 0000:00: resource 11 [mem 0x000d0000-0x000d3fff window]
// [systemd[1]: Starting Snap Daemon...
// [kernel: [    0.565175] pci_bus 0000:00: resource 12 [mem 0x000d4000-0x000d7fff window]
// [kernel: [    0.565177] pci_bus 0000:00: resource 13 [mem 0x000d8000-0x000dbfff window]
// [kernel: [    0.565179] pci_bus 0000:00: resource 14 [mem 0x000dc000-0x000dffff window]
// [kernel: [    0.565180] pci_bus 0000:00: resource 15 [mem 0x000e0000-0x000e3fff window]
// [kernel: [    0.565182] pci_bus 0000:00: resource 16 [mem 0x000e4000-0x000e7fff window]
// [systemd[1]: Starting Resets System Activity Data Collector...
// [kernel: [    0.565184] pci_bus 0000:00: resource 17 [mem 0x000e8000-0x000ebfff window]
// [kernel: [    0.565185] pci_bus 0000:00: resource 18 [mem 0x000ec000-0x000effff window]
// [systemd[1]: Starting Login Service...
// [kernel: [    0.565187] pci_bus 0000:00: resource 19 [mem 0x000f0000-0x000fffff window]
// [kernel: [    0.565188] pci_bus 0000:00: resource 20 [mem 0x95400000-0xdfffffff window]
// [kernel: [    0.565190] pci_bus 0000:00: resource 21 [mem 0x4000000000-0x7fffffffff window]
// [kernel: [    0.565192] pci_bus 0000:01: resource 1 [mem 0x95400000-0x954fffff]
// [systemd[1]: Starting Thermal Daemon Service...
// [kernel: [    0.565449] pci 0000:00:02.0: Video device with shadowed ROM at [mem 0x000c0000-0x000dffff]
// [kernel: [    0.566421] PCI: CLS 0 bytes, default 64
// [systemd[1]: Starting Disk Manager...
// [kernel: [    0.566474] Trying to unpack rootfs image as initramfs...
// [kernel: [    0.856189] Initramfs unpacking failed: Decoding failed
// [kernel: [    0.856203] fbcon: Taking over console
// [kernel: [    0.869291] Freeing initrd memory: 87392K
// [kernel: [    0.869403] PCI-DMA: Using software bounce buffering for IO (SWIOTLB)
// [kernel: [    0.869407] software IO TLB: mapped [mem 0x0000000073e0d000-0x0000000077e0d000] (64MB)
// [systemd[1]: Starting VirtualBox Linux kernel module...
// [kernel: [    0.869817] clocksource: tsc: mask: 0xffffffffffffffff max_cycles: 0x159647815e3, max_idle_ns: 440795269835 ns
// [systemd[1]: Starting WPA supplicant...
// [kernel: [    0.869840] clocksource: Switched to clocksource tsc
// [kernel: [    0.870014] check: Scanning for low memory corruption every 60 seconds
// [kernel: [    0.870767] Initialise system trusted keyrings
// [kernel: [    0.870783] Key type blacklist registered
// [systemd[1]: Started LSB: automatic crash report generation.
// [kernel: [    0.870828] workingset: timestamp_bits=36 max_order=21 bucket_order=0
// [kernel: [    0.872391] zbud: loaded
// [systemd[1]: Started LSB: Kernel NFS server support.
// [kernel: [    0.872750] squashfs: version 4.0 (2009/01/31) Phillip Lougher
// [kernel: [    0.872991] fuse: init (API version 7.32)
// [kernel: [    0.873207] integrity: Platform Keyring initialized
// [systemd[1]: pppd-dns.service: Succeeded.
// [kernel: [    0.892830] Key type asymmetric registered
// [kernel: [    0.892832] Asymmetric key parser 'x509' registered
// [kernel: [    0.892841] Block layer SCSI generic (bsg) driver version 0.4 loaded (major 243)
// [systemd[1]: Finished Restore /etc/resolv.conf if the system crashed before the ppp link was shut down.
// [kernel: [    0.892903] io scheduler mq-deadline registered
// [kernel: [    0.893580] pcieport 0000:00:1d.0: PME: Signaling with IRQ 122
// [kernel: [    0.893773] shpchp: Standard Hot Plug PCI Controller Driver version: 0.4
// [kernel: [    0.893849] efifb: probing for efifb
// [systemd[1]: Finished Resets System Activity Data Collector.
// [kernel: [    0.893871] efifb: showing boot graphics
// [kernel: [    0.895814] efifb: framebuffer at 0x4000000000, using 13256k, total 13254k
// [systemd[1]: e2scrub_reap.service: Succeeded.
// [kernel: [    0.895816] efifb: mode is 2256x1504x32, linelength=9024, pages=1
// [kernel: [    0.895817] efifb: scrolling: redraw
// [kernel: [    0.895819] efifb: Truecolor: size=8:8:8:8, shift=24:16:8:0
// [systemd[1]: Finished Remove Stale Online ext4 Metadata Check Snapshots.
// [kernel: [    0.895934] Console: switching to colour frame buffer device 141x47
// [kernel: [    0.904884] fb0: EFI VGA frame buffer device
// [kernel: [    0.904896] intel_idle: MWAIT substates: 0x11121020
// [kernel: [    0.905374] Monitor-Mwait will be used to enter C-1 state
// [avahi-daemon[1082]: Successfully dropped root privileges.
// [kernel: [    0.905406] Monitor-Mwait will be used to enter C-2 state
// [avahi-daemon[1082]: avahi-daemon 0.7 starting up.
// [kernel: [    0.905416] Monitor-Mwait will be used to enter C-3 state
// [kernel: [    0.905425] ACPI: \_SB_.PR00: Found 3 idle states
// [kernel: [    0.905427] intel_idle: v0.5.1 model 0x7E
// [kernel: [    0.905852] intel_idle: Local APIC timer is reliable in all C-states
// [kernel: [    0.906114] input: Lid Switch as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0C0D:00/input/input0
// [systemd[1]: Finished Save/Restore Sound Card State.
// [kernel: [    0.906146] ACPI: Lid Switch [LID0]
// [kernel: [    0.908918] [Firmware Bug]: No valid trip found
// [kernel: [    0.908999] [Firmware Bug]: No valid trip found
// [kernel: [    0.909075] [Firmware Bug]: No valid trip found
// [systemd[1]: grub-initrd-fallback.service: Succeeded.
// [kernel: [    0.909149] [Firmware Bug]: No valid trip found
// [kernel: [    0.909222] [Firmware Bug]: No valid trip found
// [kernel: [    0.909296] [Firmware Bug]: No valid trip found
// [systemd[1]: Finished GRUB failed boot detection.
// [kernel: [    0.909370] [Firmware Bug]: No valid trip found
// [systemd[1]: Reached target Sound Card.
// [kernel: [    0.909598] Serial: 8250/16550 driver, 32 ports, IRQ sharing enabled
// [kernel: [    0.914328] hpet_acpi_add: no address or irqs in _CRS
// [kernel: [    0.914405] Linux agpgart interface v0.103
// [kernel: [    0.926157] loop: module loaded
// [kernel: [    0.926521] libphy: Fixed MDIO Bus: probed
// [grub-common[1092]:  * Recording successful boot for GRUB
// [rsyslogd: imuxsock: Acquired UNIX socket '/run/systemd/journal/syslog' (fd 3) from systemd.  [v8.2001.0]
// [kernel: [    0.926523] tun: Universal TUN/TAP device driver, 1.6
// [kernel: [    0.926558] PPP generic driver version 2.4.2
// [kernel: [    0.926627] VFIO - User Level meta-driver version: 0.3
// [kernel: [    0.926787] ehci_hcd: USB 2.0 'Enhanced' Host Controller (EHCI) Driver
// [rsyslogd: rsyslogd's groupid changed to 110
// [kernel: [    0.926792] ehci-pci: EHCI PCI platform driver
// [kernel: [    0.926803] ehci-platform: EHCI generic platform driver
// [kernel: [    0.926818] ohci_hcd: USB 1.1 'Open' Host Controller (OHCI) Driver
// [kernel: [    0.926820] ohci-pci: OHCI PCI platform driver
// [kernel: [    0.926829] ohci-platform: OHCI generic platform driver
// [systemd[1]: Started System Logging Service.
// [kernel: [    0.926838] uhci_hcd: USB Universal Host Controller Interface driver
// [kernel: [    0.926882] i8042: PNP: No PS/2 controller found.
// [rsyslogd: rsyslogd's userid changed to 104
// [rsyslogd: [origin software="rsyslogd" swVersion="8.2001.0" x-pid="1116" x-info="https://www.rsyslog.com"] start
// [grub-common[1092]:    ...done.
// [kernel: [    0.927017] rtc_cmos 00:01: RTC can wake from S4
// [kernel: [    0.927625] rtc_cmos 00:01: registered as rtc0
// [kernel: [    0.927829] rtc_cmos 00:01: setting system clock to 2021-01-16T15:47:12 UTC (1610812032)
// [kernel: [    0.927849] rtc_cmos 00:01: alarms up to one month, y3k, 242 bytes nvram
// [kernel: [    0.927909] device-mapper: uevent: version 1.0.3
// [kernel: [    0.927978] device-mapper: ioctl: 4.43.0-ioctl (2020-10-01) initialised: dm-devel@redhat.com
// [kernel: [    0.928001] platform eisa.0: Probing EISA bus 0
// [kernel: [    0.928003] platform eisa.0: EISA: Cannot allocate resource for mainboard
// [kernel: [    0.928005] platform eisa.0: Cannot allocate resource for EISA slot 1
// [kernel: [    0.928007] platform eisa.0: Cannot allocate resource for EISA slot 2
// [kernel: [    0.928008] platform eisa.0: Cannot allocate resource for EISA slot 3
// [kernel: [    0.928010] platform eisa.0: Cannot allocate resource for EISA slot 4
// [kernel: [    0.928011] platform eisa.0: Cannot allocate resource for EISA slot 5
// [kernel: [    0.928012] platform eisa.0: Cannot allocate resource for EISA slot 6
// [kernel: [    0.928014] platform eisa.0: Cannot allocate resource for EISA slot 7
// [kernel: [    0.928015] platform eisa.0: Cannot allocate resource for EISA slot 8
// [kernel: [    0.928017] platform eisa.0: EISA: Detected 0 cards
// [kernel: [    0.928020] intel_pstate: Intel P-state driver initializing
// [kernel: [    0.928808] intel_pstate: HWP enabled
// [kernel: [    0.928864] ledtrig-cpu: registered to indicate activity on CPUs
// [kernel: [    0.928867] EFI Variables Facility v0.08 2004-May-17
// [kernel: [    0.942674] intel_pmc_core INT33A1:00:  initialized
// [kernel: [    0.942755] drop_monitor: Initializing network drop monitor service
// [kernel: [    0.942865] NET: Registered protocol family 10
// [kernel: [    0.946420] Segment Routing with IPv6
// [kernel: [    0.946435] NET: Registered protocol family 17
// [kernel: [    0.946460] Key type dns_resolver registered
// [kernel: [    0.946897] microcode: sig=0x706e5, pf=0x80, revision=0xa0
// [kernel: [    0.946935] microcode: Microcode Update Driver: v2.2.
// [kernel: [    0.946939] IPI shorthand broadcast: enabled
// [kernel: [    0.946944] sched_clock: Marking stable (940012612, 6920095)->(970945717, -24013010)
// [kernel: [    0.946997] registered taskstats version 1
// [kernel: [    0.947004] Loading compiled-in X.509 certificates
// [kernel: [    0.947525] Loaded X.509 cert 'Build time autogenerated kernel key: 72be0e22d0ee0886d8e56f359566e26abe13adf1'
// [kernel: [    0.947553] zswap: loaded using pool lzo/zbud
// [kernel: [    0.947664] Key type ._fscrypt registered
// [kernel: [    0.947664] Key type .fscrypt registered
// [kernel: [    0.947665] Key type fscrypt-provisioning registered
// [kernel: [    0.947693] Key type trusted registered
// [kernel: [    0.949261] Key type encrypted registered
// [kernel: [    0.949264] AppArmor: AppArmor sha1 policy hashing enabled
// [kernel: [    0.950022] integrity: Loading X.509 certificate: UEFI:MokListRT
// [kernel: [    0.950041] integrity: Loaded X.509 cert 'SomeOrg: shim: a01ee84e9b37ace407961cc468c5909447878469'
// [kernel: [    0.950042] integrity: Loading X.509 certificate: UEFI:MokListRT
// [kernel: [    0.950233] integrity: Loaded X.509 cert 'Canonical Ltd. Master Certificate Authority: ad91990bc22ab1f517048c23b6655a268e345a63'
// [kernel: [    0.950237] ima: Allocated hash algorithm: sha1
// [kernel: [    0.968742] ima: No architecture policies found
// [kernel: [    0.968748] evm: Initialising EVM extended attributes:
// [kernel: [    0.968749] evm: security.selinux
// [kernel: [    0.968749] evm: security.SMACK64
// [kernel: [    0.968750] evm: security.SMACK64EXEC
// [kernel: [    0.968750] evm: security.SMACK64TRANSMUTE
// [kernel: [    0.968750] evm: security.SMACK64MMAP
// [kernel: [    0.968751] evm: security.apparmor
// [kernel: [    0.968751] evm: security.ima
// [kernel: [    0.968751] evm: security.capability
// [kernel: [    0.968752] evm: HMAC attrs: 0x1
// [kernel: [    0.969363] PM:   Magic number: 5:996:790
// [kernel: [    0.969632] RAS: Correctable Errors collector initialized.
// [kernel: [    0.981601] Freeing unused decrypted memory: 2036K
// [kernel: [    0.981957] Freeing unused kernel image (initmem) memory: 2656K
// [kernel: [    1.010822] Write protecting the kernel read-only data: 22528k
// [kernel: [    1.011710] Freeing unused kernel image (text/rodata gap) memory: 2036K
// [kernel: [    1.012054] Freeing unused kernel image (rodata/data gap) memory: 872K
// [kernel: [    1.029291] x86/mm: Checked W+X mappings: passed, no W+X pages found.
// [kernel: [    1.029297] Run /init as init process
// [kernel: [    1.029298]   with arguments:
// [kernel: [    1.029299]     /init
// [kernel: [    1.029299]     splash
// [kernel: [    1.029300]   with environment:
// [kernel: [    1.029301]     HOME=/
// [kernel: [    1.029301]     TERM=linux
// [kernel: [    1.029302]     BOOT_IMAGE=/boot/vmlinuz-5.10.5-surface
// [kernel: [    1.085950] xhci_hcd 0000:00:0d.0: xHCI Host Controller
// [kernel: [    1.085955] xhci_hcd 0000:00:0d.0: new USB bus registered, assigned bus number 1
// [kernel: [    1.087010] xhci_hcd 0000:00:0d.0: hcc params 0x20007fc1 hci version 0x110 quirks 0x0000000200009810
// [kernel: [    1.087014] xhci_hcd 0000:00:0d.0: cache line size of 64 is not supported
// [kernel: [    1.087160] usb usb1: New USB device found, idVendor=1d6b, idProduct=0002, bcdDevice= 5.10
// [kernel: [    1.087162] usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1
// [kernel: [    1.087163] usb usb1: Product: xHCI Host Controller
// [kernel: [    1.087163] usb usb1: Manufacturer: Linux 5.10.5-surface xhci-hcd
// [kernel: [    1.087164] usb usb1: SerialNumber: 0000:00:0d.0
// [kernel: [    1.087241] hub 1-0:1.0: USB hub found
// [kernel: [    1.087247] hub 1-0:1.0: 1 port detected
// [kernel: [    1.087464] xhci_hcd 0000:00:0d.0: xHCI Host Controller
// [kernel: [    1.087467] xhci_hcd 0000:00:0d.0: new USB bus registered, assigned bus number 2
// [kernel: [    1.087470] xhci_hcd 0000:00:0d.0: Host supports USB 3.1 Enhanced SuperSpeed
// [kernel: [    1.087507] usb usb2: New USB device found, idVendor=1d6b, idProduct=0003, bcdDevice= 5.10
// [kernel: [    1.087508] usb usb2: New USB device strings: Mfr=3, Product=2, SerialNumber=1
// [kernel: [    1.087509] usb usb2: Product: xHCI Host Controller
// [kernel: [    1.087510] usb usb2: Manufacturer: Linux 5.10.5-surface xhci-hcd
// [kernel: [    1.087510] usb usb2: SerialNumber: 0000:00:0d.0
// [kernel: [    1.087587] hub 2-0:1.0: USB hub found
// [kernel: [    1.087598] hub 2-0:1.0: 4 ports detected
// [kernel: [    1.088401] xhci_hcd 0000:00:14.0: xHCI Host Controller
// [kernel: [    1.088404] xhci_hcd 0000:00:14.0: new USB bus registered, assigned bus number 3
// [kernel: [    1.089561] xhci_hcd 0000:00:14.0: hcc params 0x20007fc1 hci version 0x110 quirks 0x0000000000009810
// [kernel: [    1.089585] xhci_hcd 0000:00:14.0: cache line size of 64 is not supported
// [kernel: [    1.089860] usb usb3: New USB device found, idVendor=1d6b, idProduct=0002, bcdDevice= 5.10
// [kernel: [    1.089861] usb usb3: New USB device strings: Mfr=3, Product=2, SerialNumber=1
// [kernel: [    1.089863] usb usb3: Product: xHCI Host Controller
// [kernel: [    1.089864] usb usb3: Manufacturer: Linux 5.10.5-surface xhci-hcd
// [kernel: [    1.089865] usb usb3: SerialNumber: 0000:00:14.0
// [kernel: [    1.089965] hub 3-0:1.0: USB hub found
// [kernel: [    1.089997] hub 3-0:1.0: 12 ports detected
// [kernel: [    1.092038] xhci_hcd 0000:00:14.0: xHCI Host Controller
// [kernel: [    1.092043] xhci_hcd 0000:00:14.0: new USB bus registered, assigned bus number 4
// [kernel: [    1.092047] xhci_hcd 0000:00:14.0: Host supports USB 3.1 Enhanced SuperSpeed
// [kernel: [    1.092118] usb usb4: New USB device found, idVendor=1d6b, idProduct=0003, bcdDevice= 5.10
// [kernel: [    1.092120] usb usb4: New USB device strings: Mfr=3, Product=2, SerialNumber=1
// [kernel: [    1.092121] usb usb4: Product: xHCI Host Controller
// [kernel: [    1.092122] usb usb4: Manufacturer: Linux 5.10.5-surface xhci-hcd
// [kernel: [    1.092123] usb usb4: SerialNumber: 0000:00:14.0
// [kernel: [    1.092236] hub 4-0:1.0: USB hub found
// [kernel: [    1.092267] hub 4-0:1.0: 6 ports detected
// [kernel: [    1.094069] nvme nvme0: pci function 0000:01:00.0
// [kernel: [    1.094781] cryptd: max_cpu_qlen set to 1000
// [kernel: [    1.100172] AVX2 version of gcm_enc/dec engaged.
// [kernel: [    1.100175] AES CTR mode by8 optimization enabled
// [kernel: [    1.102753] nvme nvme0: missing or invalid SUBNQN field.
// [kernel: [    1.110670] intel-lpss 0000:00:15.0: enabling device (0000 -> 0002)
// [kernel: [    1.111048] idma64 idma64.0: Found Intel integrated DMA 64-bit
// [kernel: [    1.117426] nvme nvme0: 8/0/0 default/read/poll queues
// [kernel: [    1.122681]  nvme0n1: p1 p2
// [kernel: [    1.130812] intel-lpss 0000:00:15.1: enabling device (0000 -> 0002)
// [kernel: [    1.131301] idma64 idma64.1: Found Intel integrated DMA 64-bit
// [kernel: [    1.150743] intel-lpss 0000:00:19.0: enabling device (0000 -> 0002)
// [kernel: [    1.166842] checking generic (4000000000 cf2000) vs hw (6000000000 1000000)
// [kernel: [    1.166845] checking generic (4000000000 cf2000) vs hw (4000000000 10000000)
// [kernel: [    1.166846] fb0: switching to inteldrmfb from EFI VGA
// [kernel: [    1.166914] Console: switching to colour dummy device 80x25
// [kernel: [    1.166942] i915 0000:00:02.0: vgaarb: deactivate vga console
// [kernel: [    1.168502] i915 0000:00:02.0: vgaarb: changed VGA decodes: olddecodes=io+mem,decodes=io+mem:owns=io+mem
// [kernel: [    1.168869] i915 0000:00:02.0: [drm] Finished loading DMC firmware i915/icl_dmc_ver1_09.bin (v1.9)
// [kernel: [    1.174664] intel-lpss 0000:00:1e.0: enabling device (0000 -> 0002)
// [kernel: [    1.175102] idma64 idma64.3: Found Intel integrated DMA 64-bit
// [kernel: [    1.197602] [drm] Initialized i915 1.6.0 20200917 for 0000:00:02.0 on minor 0
// [kernel: [    1.200541] ACPI: Video Device [GFX0] (multi-head: yes  rom: no  post: no)
// [kernel: [    1.202153] input: Video Bus as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0A08:00/LNXVIDEO:00/input/input1
// [kernel: [    1.203963] fbcon: i915drmfb (fb0) is primary device
// [kernel: [    1.430777] usb 3-6: new high-speed USB device number 2 using xhci_hcd
// [kernel: [    1.615544] usb 3-6: New USB device found, idVendor=045e, idProduct=0990, bcdDevice=10.37
// [kernel: [    1.615547] usb 3-6: New USB device strings: Mfr=3, Product=1, SerialNumber=2
// [kernel: [    1.615549] usb 3-6: Product: Surface Camera Front
// [kernel: [    1.615550] usb 3-6: Manufacturer: Surface
// [kernel: [    1.615551] usb 3-6: SerialNumber: 200901010001
// [kernel: [    2.340731] Console: switching to colour frame buffer device 141x47
// [kernel: [    2.364914] i915 0000:00:02.0: [drm] fb0: i915drmfb frame buffer device
// [kernel: [    2.558723] raid6: avx512x4 gen() 54027 MB/s
// [kernel: [    2.626648] raid6: avx512x4 xor() 20327 MB/s
// [kernel: [    2.694723] raid6: avx512x2 gen() 59464 MB/s
// [kernel: [    2.762718] raid6: avx512x2 xor() 33608 MB/s
// [kernel: [    2.830724] raid6: avx512x1 gen() 54476 MB/s
// [kernel: [    2.898648] raid6: avx512x1 xor() 30888 MB/s
// [kernel: [    2.966722] raid6: avx2x4   gen() 46677 MB/s
// [kernel: [    3.034721] raid6: avx2x4   xor() 17918 MB/s
// [kernel: [    3.102718] raid6: avx2x2   gen() 47103 MB/s
// [kernel: [    3.170716] raid6: avx2x2   xor() 24803 MB/s
// [kernel: [    3.238723] raid6: avx2x1   gen() 39321 MB/s
// [kernel: [    3.306720] raid6: avx2x1   xor() 19545 MB/s
// [kernel: [    3.374720] raid6: sse2x4   gen() 12406 MB/s
// [kernel: [    3.442723] raid6: sse2x4   xor()  6732 MB/s
// [kernel: [    3.510648] raid6: sse2x2   gen() 12874 MB/s
// [kernel: [    3.578715] raid6: sse2x2   xor()  8013 MB/s
// [kernel: [    3.646726] raid6: sse2x1   gen() 12044 MB/s
// [kernel: [    3.714721] raid6: sse2x1   xor()  6340 MB/s
// [kernel: [    3.714721] raid6: using algorithm avx512x2 gen() 59464 MB/s
// [kernel: [    3.714722] raid6: .... xor() 33608 MB/s, rmw enabled
// [kernel: [    3.714722] raid6: using avx512x2 recovery algorithm
// [kernel: [    3.715521] xor: automatically using best checksumming function   avx
// [kernel: [    3.716273] async_tx: api initialized (async)
// [kernel: [    3.821036] Btrfs loaded, crc32c=crc32c-intel
// [kernel: [    3.887833] EXT4-fs (nvme0n1p2): mounted filesystem with ordered data mode. Opts: (null)
// [kernel: [    4.083827] systemd[1]: Inserted module 'autofs4'
// [kernel: [    4.126546] systemd[1]: systemd 245.4-4ubuntu3.3 running in system mode. (+PAM +AUDIT +SELINUX +IMA +APPARMOR +SMACK +SYSVINIT +UTMP +LIBCRYPTSETUP +GCRYPT +GNUTLS +ACL +XZ +LZ4 +SECCOMP +BLKID +ELFUTILS +KMOD +IDN2 -IDN +PCRE2 default-hierarchy=hybrid)
// [kernel: [    4.142898] systemd[1]: Detected architecture x86-64.
// [kernel: [    4.167060] systemd[1]: Set hostname to <surface>.
// [kernel: [    4.245936] systemd[1]: /lib/systemd/system/dbus.socket:5: ListenStream= references a path below legacy directory /var/run/, updating /var/run/dbus/system_bus_socket → /run/dbus/system_bus_socket; please update the unit file accordingly.
// [kernel: [    4.287965] systemd[1]: Created slice system-modprobe.slice.
// [kernel: [    4.288093] systemd[1]: Created slice system-postgresql.slice.
// [kernel: [    4.288195] systemd[1]: Created slice system-systemd\x2dfsck.slice.
// [kernel: [    4.288334] systemd[1]: Created slice User and Session Slice.
// [kernel: [    4.288364] systemd[1]: Started Forward Password Requests to Wall Directory Watch.
// [kernel: [    4.288466] systemd[1]: Set up automount Arbitrary Executable File Formats File System Automount Point.
// [kernel: [    4.288496] systemd[1]: Reached target User and Group Name Lookups.
// [kernel: [    4.288506] systemd[1]: Reached target Slices.
// [kernel: [    4.288548] systemd[1]: Listening on Device-mapper event daemon FIFOs.
// [kernel: [    4.288601] systemd[1]: Listening on LVM2 poll daemon socket.
// [kernel: [    4.290579] systemd[1]: Listening on RPCbind Server Activation Socket.
// [kernel: [    4.290661] systemd[1]: Listening on Syslog Socket.
// [kernel: [    4.290780] systemd[1]: Listening on fsck to fsckd communication Socket.
// [kernel: [    4.290807] systemd[1]: Listening on initctl Compatibility Named Pipe.
// [kernel: [    4.290899] systemd[1]: Listening on Journal Audit Socket.
// [kernel: [    4.290937] systemd[1]: Listening on Journal Socket (/dev/log).
// [kernel: [    4.290987] systemd[1]: Listening on Journal Socket.
// [kernel: [    4.291037] systemd[1]: Listening on udev Control Socket.
// [kernel: [    4.291073] systemd[1]: Listening on udev Kernel Socket.
// [kernel: [    4.291549] systemd[1]: Mounting Huge Pages File System...
// [kernel: [    4.292044] systemd[1]: Mounting POSIX Message Queue File System...
// [kernel: [    4.292510] systemd[1]: Mounting RPC Pipe File System...
// [kernel: [    4.293127] systemd[1]: Mounting Kernel Debug File System...
// [kernel: [    4.293917] systemd[1]: Mounting Kernel Trace File System...
// [kernel: [    4.294762] systemd[1]: Starting Journal Service...
// [kernel: [    4.295292] systemd[1]: Starting Availability of block devices...
// [kernel: [    4.295888] systemd[1]: Starting Set the console keyboard layout...
// [kernel: [    4.296443] systemd[1]: Starting Create list of static device nodes for the current kernel...
// [kernel: [    4.296949] systemd[1]: Starting Monitoring of LVM2 mirrors, snapshots etc. using dmeventd or progress polling...
// [kernel: [    4.296978] systemd[1]: Condition check resulted in Load Kernel Module drm being skipped.
// [kernel: [    4.297363] systemd[1]: Condition check resulted in Set Up Additional Binary Formats being skipped.
// [kernel: [    4.297390] systemd[1]: Condition check resulted in File System Check on Root Device being skipped.
// [kernel: [    4.299107] systemd[1]: Starting Load Kernel Modules...
// [kernel: [    4.299830] systemd[1]: Starting Remount Root and Kernel File Systems...
// [kernel: [    4.300636] systemd[1]: Starting udev Coldplug all Devices...
// [kernel: [    4.301403] systemd[1]: Starting Uncomplicated firewall...
// [kernel: [    4.302790] systemd[1]: Mounted Huge Pages File System.
// [kernel: [    4.303047] systemd[1]: Mounted POSIX Message Queue File System.
// [kernel: [    4.303210] systemd[1]: Mounted Kernel Debug File System.
// [kernel: [    4.303356] systemd[1]: Mounted Kernel Trace File System.
// [kernel: [    4.304288] systemd[1]: Finished Availability of block devices.
// [kernel: [    4.304795] systemd[1]: Finished Create list of static device nodes for the current kernel.
// [kernel: [    4.305159] systemd[1]: Finished Uncomplicated firewall.
// [kernel: [    4.308800] EXT4-fs (nvme0n1p2): re-mounted. Opts: errors=remount-ro
// [kernel: [    4.309773] systemd[1]: Finished Remount Root and Kernel File Systems.
// [kernel: [    4.310429] RPC: Registered named UNIX socket transport module.
// [kernel: [    4.310430] RPC: Registered udp transport module.
// [kernel: [    4.310430] RPC: Registered tcp transport module.
// [kernel: [    4.310431] RPC: Registered tcp NFSv4.1 backchannel transport module.
// [kernel: [    4.310614] systemd[1]: Activating swap /swapfile...
// [kernel: [    4.311272] systemd[1]: Condition check resulted in Rebuild Hardware Database being skipped.
// [kernel: [    4.311313] systemd[1]: Condition check resulted in Platform Persistent Storage Archival being skipped.
// [kernel: [    4.311932] systemd[1]: Starting Load/Save Random Seed...
// [kernel: [    4.312799] systemd[1]: Starting Create System Users...
// [kernel: [    4.313553] systemd[1]: Mounted RPC Pipe File System.
// [kernel: [    4.314394] lp: driver loaded but no devices found
// [kernel: [    4.317551] ppdev: user-space parallel port driver
// [kernel: [    4.324984] systemd[1]: Finished Load Kernel Modules.
// [kernel: [    4.325436] systemd[1]: Finished Create System Users.
// [kernel: [    4.326371] systemd[1]: Mounting FUSE Control File System...
// [kernel: [    4.327155] systemd[1]: Mounting Kernel Configuration File System...
// [kernel: [    4.327950] systemd[1]: Starting Apply Kernel Variables...
// [kernel: [    4.328707] systemd[1]: Starting Create Static Device Nodes in /dev...
// [kernel: [    4.329487] systemd[1]: Mounted FUSE Control File System.
// [kernel: [    4.329618] systemd[1]: Mounted Kernel Configuration File System.
// [kernel: [    4.330482] systemd[1]: Finished Load/Save Random Seed.
// [kernel: [    4.337034] systemd[1]: Finished Apply Kernel Variables.
// [kernel: [    4.338247] systemd[1]: Finished Create Static Device Nodes in /dev.
// [kernel: [    4.339138] systemd[1]: Starting udev Kernel Device Manager...
// [kernel: [    4.343692] systemd[1]: Finished Set the console keyboard layout.
// [kernel: [    4.359578] systemd[1]: Finished udev Coldplug all Devices.
// kernel: [    4.360334] systemd[1]: Starting Helper to synchronize boot up for ifupdown...
// kernel: [    4.363475] systemd[1]: Finished Helper to synchronize boot up for ifupdown.
// kernel: [    4.363592] systemd[1]: Started Journal Service.
// kernel: [    4.367589] systemd-journald[420]: Received client request to flush runtime journal.
// kernel: [    4.368059] Adding 2097148k swap on /swapfile.  Priority:-2 extents:6 across:2260988k SSFS
// kernel: [    4.455056] acpi-tad ACPI000E:00: Missing _PRW
// kernel: [    4.543682] pstore: Using crash dump compression: deflate
// kernel: [    4.543693] pstore: Registered efi as persistent store backend
// kernel: [    4.545406] cfg80211: Loading compiled-in X.509 certificates for regulatory database
// kernel: [    4.545430] mei_me 0000:00:16.0: enabling device (0000 -> 0002)
// kernel: [    4.545632] cfg80211: Loaded X.509 cert 'sforshee: 00b28ddf47aef9cea7'
// kernel: [    4.546362] mei_me 0000:00:16.4: enabling device (0000 -> 0002)
// kernel: [    4.547517] proc_thermal 0000:00:04.0: enabling device (0000 -> 0002)
// kernel: [    4.549062] RAPL PMU: API unit is 2^-32 Joules, 4 fixed counters, 655360 ms ovfl timer
// kernel: [    4.549064] RAPL PMU: hw unit of domain pp0-core 2^-14 Joules
// kernel: [    4.549065] RAPL PMU: hw unit of domain package 2^-14 Joules
// kernel: [    4.549066] RAPL PMU: hw unit of domain pp1-gpu 2^-14 Joules
// kernel: [    4.549066] RAPL PMU: hw unit of domain psys 2^-14 Joules
// kernel: [    4.549508] intel_rapl_common: Found RAPL domain package
// kernel: [    4.551633] dw-apb-uart.3: ttyS4 at MMIO 0x4010003000 (irq = 20, base_baud = 7500000) is a 16550A
// kernel: [    4.551739] proc_thermal 0000:00:04.0: Creating sysfs group for PROC_THERMAL_PCI
// kernel: [    4.554852] Intel(R) Wireless WiFi driver for Linux
// kernel: [    4.555026] iwlwifi 0000:00:14.3: enabling device (0000 -> 0002)
// kernel: [    4.555402] serial serial0: tty port ttyS4 registered
// kernel: [    4.560290] surface_serial_hub serial0-0: SAM firmware version: 14.310.139
// kernel: [    4.562164] iwlwifi 0000:00:14.3: Direct firmware load for iwlwifi-Qu-c0-hr-b0-59.ucode failed with error -2
// kernel: [    4.562753] iwlwifi 0000:00:14.3: Direct firmware load for iwlwifi-Qu-c0-hr-b0-58.ucode failed with error -2
// kernel: [    4.562777] iwlwifi 0000:00:14.3: Direct firmware load for iwlwifi-Qu-c0-hr-b0-57.ucode failed with error -2
// kernel: [    4.562791] iwlwifi 0000:00:14.3: Direct firmware load for iwlwifi-Qu-c0-hr-b0-56.ucode failed with error -2
// kernel: [    4.565813] iwlwifi 0000:00:14.3: api flags index 2 larger than supported by driver
// kernel: [    4.565827] iwlwifi 0000:00:14.3: TLV_FW_FSEQ_VERSION: FSEQ Version: 65.3.35.22
// kernel: [    4.565832] iwlwifi 0000:00:14.3: Found debug destination: EXTERNAL_DRAM
// kernel: [    4.565833] iwlwifi 0000:00:14.3: Found debug configuration: 0
// kernel: [    4.566049] iwlwifi 0000:00:14.3: loaded firmware version 55.d9698065.0 Qu-c0-hr-b0-55.ucode op_mode iwlmvm
// kernel: [    4.627121] iwlwifi 0000:00:14.3: Detected Intel(R) Wi-Fi 6 AX201 160MHz, REV=0x338
// kernel: [    4.675592] intel_rapl_common: Found RAPL domain package
// kernel: [    4.675595] intel_rapl_common: Found RAPL domain core
// kernel: [    4.675596] intel_rapl_common: Found RAPL domain uncore
// kernel: [    4.675598] intel_rapl_common: Found RAPL domain psys
// kernel: [    4.676180] mei_hdcp 0000:00:16.0-b638ab7e-94e2-4ea2-a552-d1c54b627f04: bound 0000:00:02.0 (ops i915_hdcp_component_ops [i915])
// kernel: [    4.676181] input: gpio-keys as /devices/platform/MSHW0040:00/gpio-keys.1.auto/input/input2
// kernel: [    4.676298] hid: raw HID events driver (C) Jiri Kosina
// kernel: [    4.676519] input: gpio-keys as /devices/platform/MSHW0040:00/gpio-keys.2.auto/input/input3
// kernel: [    4.678319] ipts 0000:00:16.4-3e8d0870-271a-4208-8eb5-9acb9402ae04: Starting IPTS
// kernel: [    4.692414] ipts 0000:00:16.4-3e8d0870-271a-4208-8eb5-9acb9402ae04: Device 045E:0983 ready
// kernel: [    4.728362] hid-generic 0019:045E:0922.0001: hidraw0: <UNKNOWN> HID v1.11 Device [Microsoft Surface 045E:0922] on 01:15:02:05:00
// kernel: [    4.730375] input: Microsoft Surface 045E:09AE Keyboard as /devices/platform/MSHW0114:00/00:00:01:00:00/01:15:02:01:00/0019:045E:09AE.0002/input/input4
// kernel: [    4.730423] input: Microsoft Surface 045E:09AE Consumer Control as /devices/platform/MSHW0114:00/00:00:01:00:00/01:15:02:01:00/0019:045E:09AE.0002/input/input6
// kernel: [    4.730463] hid-generic 0019:045E:09AE.0002: input,hidraw1: <UNKNOWN> HID v1.11 Keyboard [Microsoft Surface 045E:09AE] on 01:15:02:01:00
// kernel: [    4.733486] input: Microsoft Surface 045E:09AF Mouse as /devices/platform/MSHW0114:00/00:00:01:00:00/01:15:02:03:00/0019:045E:09AF.0003/input/input7
// kernel: [    4.733544] input: Microsoft Surface 045E:09AF Touchpad as /devices/platform/MSHW0114:00/00:00:01:00:00/01:15:02:03:00/0019:045E:09AF.0003/input/input8
// kernel: [    4.733586] input: Microsoft Surface 045E:09AF as /devices/platform/MSHW0114:00/00:00:01:00:00/01:15:02:03:00/0019:045E:09AF.0003/input/input9
// kernel: [    4.733624] input: Microsoft Surface 045E:09AF as /devices/platform/MSHW0114:00/00:00:01:00:00/01:15:02:03:00/0019:045E:09AF.0003/input/input10
// kernel: [    4.733670] hid-generic 0019:045E:09AF.0003: input,hidraw2: <UNKNOWN> HID v1.11 Mouse [Microsoft Surface 045E:09AF] on 01:15:02:03:00
// kernel: [    4.741740] snd_hda_intel 0000:00:1f.3: DSP detected with PCI class/subclass/prog-if info 0x040380
// systemd[1]: Started LSB: Record successful boot for GRUB.
// kernel: [    4.741758] acpi PNP0A05:00: No SoundWire links detected
// kernel: [    4.741791] snd_hda_intel 0000:00:1f.3: enabling device (0000 -> 0002)
// kernel: [    4.742070] snd_hda_intel 0000:00:1f.3: bound 0000:00:02.0 (ops i915_audio_component_bind_ops [i915])
// kernel: [    4.794889] snd_hda_codec_realtek hdaudioC0D0: autoconfig for ALC274: line_outs=1 (0x1b/0x0/0x0/0x0/0x0) type:speaker
// kernel: [    4.794890] snd_hda_codec_realtek hdaudioC0D0:    speaker_outs=0 (0x0/0x0/0x0/0x0/0x0)
// kernel: [    4.794891] snd_hda_codec_realtek hdaudioC0D0:    hp_outs=1 (0x21/0x0/0x0/0x0/0x0)
// kernel: [    4.794892] snd_hda_codec_realtek hdaudioC0D0:    mono: mono_out=0x0
// kernel: [    4.794892] snd_hda_codec_realtek hdaudioC0D0:    inputs:
// kernel: [    4.794893] snd_hda_codec_realtek hdaudioC0D0:      Mic=0x19
// kernel: [    4.794894] snd_hda_codec_realtek hdaudioC0D0:      Internal Mic=0x12
// kernel: [    4.811661] iwlwifi 0000:00:14.3: base HW address: c8:34:8e:64:34:c8
// kernel: [    4.824452] thermal thermal_zone7: failed to read out thermal zone (-61)
// kernel: [    4.826321] iwlwifi 0000:00:14.3 wlp0s20f3: renamed from wlan0
// kernel: [    4.857461] input: Microsoft Surface 045E:09AF Mouse as /devices/platform/MSHW0114:00/00:00:01:00:00/01:15:02:03:00/0019:045E:09AF.0003/input/input11
// kernel: [    4.857527] input: Microsoft Surface 045E:09AF Touchpad as /devices/platform/MSHW0114:00/00:00:01:00:00/01:15:02:03:00/0019:045E:09AF.0003/input/input12
// kernel: [    4.857574] input: Microsoft Surface 045E:09AF UNKNOWN as /devices/platform/MSHW0114:00/00:00:01:00:00/01:15:02:03:00/0019:045E:09AF.0003/input/input13
// kernel: [    4.857615] input: Microsoft Surface 045E:09AF UNKNOWN as /devices/platform/MSHW0114:00/00:00:01:00:00/01:15:02:03:00/0019:045E:09AF.0003/input/input14
// kernel: [    4.857660] hid-multitouch 0019:045E:09AF.0003: input,hidraw2: <UNKNOWN> HID v1.11 Mouse [Microsoft Surface 045E:09AF] on 01:15:02:03:00
// kernel: [    4.859998] surface_serial_hub serial0-0: rtl: dropping unexpected command message (rqid = 0x0048)
// kernel: [    4.861791] surface_serial_hub serial0-0: rtl: dropping unexpected command message (rqid = 0x0049)
// kernel: [    4.863773] mousedev: PS/2 mouse device common for all mice
// kernel: [    5.266350] input: HDA Intel PCH Mic as /devices/pci0000:00/0000:00:1f.3/sound/card0/input15
// kernel: [    5.266396] input: HDA Intel PCH Headphone as /devices/pci0000:00/0000:00:1f.3/sound/card0/input16
// kernel: [    5.266434] input: HDA Intel PCH HDMI/DP,pcm=3 as /devices/pci0000:00/0000:00:1f.3/sound/card0/input17
// kernel: [    5.266472] input: HDA Intel PCH HDMI/DP,pcm=7 as /devices/pci0000:00/0000:00:1f.3/sound/card0/input18
// kernel: [    5.266700] input: HDA Intel PCH HDMI/DP,pcm=8 as /devices/pci0000:00/0000:00:1f.3/sound/card0/input19
// kernel: [    5.266742] input: HDA Intel PCH HDMI/DP,pcm=9 as /devices/pci0000:00/0000:00:1f.3/sound/card0/input20
// kernel: [    5.266777] input: HDA Intel PCH HDMI/DP,pcm=10 as /devices/pci0000:00/0000:00:1f.3/sound/card0/input21
// kernel: [    5.266875] input: HDA Intel PCH HDMI/DP,pcm=11 as /devices/pci0000:00/0000:00:1f.3/sound/card0/input22
// kernel: [    5.266918] input: HDA Intel PCH HDMI/DP,pcm=12 as /devices/pci0000:00/0000:00:1f.3/sound/card0/input23
// kernel: [    5.271569] audit: type=1400 audit(1610812036.839:2): apparmor="STATUS" operation="profile_load" profile="unconfined" name="libreoffice-senddoc" pid=932 comm="apparmor_parser"
// kernel: [    5.271573] audit: type=1400 audit(1610812036.839:3): apparmor="STATUS" operation="profile_load" profile="unconfined" name="libreoffice-xpdfimport" pid=928 comm="apparmor_parser"
// kernel: [    5.271575] audit: type=1400 audit(1610812036.839:4): apparmor="STATUS" operation="profile_load" profile="unconfined" name="lsb_release" pid=935 comm="apparmor_parser"
// kernel: [    5.272205] audit: type=1400 audit(1610812036.839:5): apparmor="STATUS" operation="profile_load" profile="unconfined" name="nvidia_modprobe" pid=926 comm="apparmor_parser"
// kernel: [    5.272208] audit: type=1400 audit(1610812036.839:6): apparmor="STATUS" operation="profile_load" profile="unconfined" name="nvidia_modprobe//kmod" pid=926 comm="apparmor_parser"
// kernel: [    5.276385] audit: type=1400 audit(1610812036.843:7): apparmor="STATUS" operation="profile_load" profile="unconfined" name="ippusbxd" pid=939 comm="apparmor_parser"
// kernel: [    5.276756] audit: type=1400 audit(1610812036.843:8): apparmor="STATUS" operation="profile_load" profile="unconfined" name="libreoffice-oopslash" pid=941 comm="apparmor_parser"
// kernel: [    5.281592] audit: type=1400 audit(1610812036.847:9): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/bin/man" pid=947 comm="apparmor_parser"
// kernel: [    5.281596] audit: type=1400 audit(1610812036.847:10): apparmor="STATUS" operation="profile_load" profile="unconfined" name="man_filter" pid=947 comm="apparmor_parser"
// kernel: [    5.281598] audit: type=1400 audit(1610812036.847:11): apparmor="STATUS" operation="profile_load" profile="unconfined" name="man_groff" pid=947 comm="apparmor_parser"
// kernel: [    5.502566] dptf_power INT3407:00: Unsupported event [0x82]
// kernel: [    5.661346] mc: Linux media interface: v0.10
// kernel: [    5.666684] videodev: Linux video capture interface: v2.00
// kernel: [    5.828553] uvcvideo: Found UVC 1.50 device Surface Camera Front (045e:0990)
// kernel: [    5.833881] input: Surface Camera Front: Surface C as /devices/pci0000:00/0000:00:14.0/usb3/3-6/3-6:1.0/input/input24
// kernel: [    5.835000] uvcvideo: Found UVC 1.50 device Surface Camera Front (045e:0990)
// kernel: [    5.838117] input: Surface Camera Front: Surface I as /devices/pci0000:00/0000:00:14.0/usb3/3-6/3-6:1.2/input/input25
// kernel: [    5.838172] usbcore: registered new interface driver uvcvideo
// kernel: [    5.838173] USB Video Class driver (1.1.1)
// kernel: [    6.052776] input: IPTS Touch as /devices/virtual/input/input26
// kernel: [    6.052859] input: IPTS Stylus as /devices/virtual/input/input27
// udisksd[1125]: udisks daemon version 2.8.4 starting
// systemd[1]: gpu-manager.service: Succeeded.
// systemd[1]: Finished Detect the available GPUs and deal with any system changes.
// dbus-daemon[1086]: dbus[1086]: Unknown group "power" in message bus configuration file
// systemd[1]: Started Thermal Daemon Service.
// systemd[1]: Started Avahi mDNS/DNS-SD Stack.
// wpa_supplicant[1127]: Successfully initialized wpa_supplicant
// avahi-daemon[1082]: Successfully called chroot().
// avahi-daemon[1082]: Successfully dropped remaining capabilities.
// systemd[1]: Started Make remote CUPS printers available locally.
// avahi-daemon[1082]: No service file found in /etc/avahi/services.
// systemd[1]: Started WPA supplicant.
// avahi-daemon[1082]: Joining mDNS multicast group on interface lo.IPv6 with address ::1.
// avahi-daemon[1082]: New relevant interface lo.IPv6 for mDNS.
// avahi-daemon[1082]: Joining mDNS multicast group on interface lo.IPv4 with address 127.0.0.1.
// avahi-daemon[1082]: New relevant interface lo.IPv4 for mDNS.
// avahi-daemon[1082]: Network interface enumeration completed.
// avahi-daemon[1082]: Registering new address record for ::1 on lo.*.
// avahi-daemon[1082]: Registering new address record for 127.0.0.1 on lo.IPv4.
// thermald[1124]: [WARN]27 CPUID levels; family:model:stepping 0x6:7e:5 (6:126:5)
// thermald[1124]: [WARN]Polling mode is enabled: 4
// thermald[1124]: [WARN]sensor id 11 : No temp sysfs for reading raw temp
// thermald[1124]: message repeated 2 times: [ [WARN]sensor id 11 : No temp sysfs for reading raw temp]
// thermald[1124]: I/O warning : failed to load external entity "/etc/thermald/thermal-conf.xml"
// thermald[1124]: [WARN]error: could not parse file /etc/thermald/thermal-conf.xml
// thermald[1124]: [WARN]sysfs open failed
// thermald[1124]: I/O warning : failed to load external entity "/etc/thermald/thermal-conf.xml"
// thermald[1124]: [WARN]error: could not parse file /etc/thermald/thermal-conf.xml
// udisksd[1125]: failed to load module mdraid: libbd_mdraid.so.2: cannot open shared object file: No such file or directory
// thermald[1124]: I/O warning : failed to load external entity "/etc/thermald/thermal-conf.xml"
// thermald[1124]: [WARN]error: could not parse file /etc/thermald/thermal-conf.xml
// polkitd[1114]: started daemon version 0.105 using authority implementation `local' version `0.105'
// systemd[1]: Started Authorization Manager.
// NetworkManager[1088]: <info>  [1610812037.7100] NetworkManager (version 1.22.10) is starting... (for the first time)
// NetworkManager[1088]: <info>  [1610812037.7101] Read config: /etc/NetworkManager/NetworkManager.conf (lib: 10-dns-resolved.conf, no-mac-addr-change.conf) (run: 10-globally-managed-devices.conf) (etc: default-wifi-powersave-on.conf)
// systemd[1]: Starting Modem Manager...
// NetworkManager[1088]: <info>  [1610812037.7120] bus-manager: acquired D-Bus service "org.freedesktop.NetworkManager"
// udisksd[1125]: Failed to load the 'mdraid' libblockdev plugin
// NetworkManager[1088]: <info>  [1610812037.7155] manager[0x556e15942030]: monitoring kernel firmware directory '/lib/firmware'.
// NetworkManager[1088]: <info>  [1610812037.7156] monitoring ifupdown state file '/run/network/ifstate'.
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.hostname1' unit='dbus-org.freedesktop.hostname1.service' requested by ':1.10' (uid=0 pid=1088 comm="/usr/sbin/NetworkManager --no-daemon ")
// systemd[1]: Started Network Manager.
// systemd[1]: Reached target Network.
// systemd[1]: Starting Network Manager Wait Online...
// systemd[1]: Starting OpenVPN service...
// systemd[1]: Starting PostgreSQL Cluster 12-main...
// systemd[1]: Condition check resulted in fast remote file copy program daemon being skipped.
// accounts-daemon[1077]: started daemon version 0.6.55
// systemd[1]: Starting Hostname Service...
// systemd[1]: Starting Permit User Sessions...
// systemd[1]: Finished OpenVPN service.
// systemd[1]: Started Accounts Service.
// systemd[1]: Finished Permit User Sessions.
// systemd[1]: Starting Light Display Manager...
// ModemManager[1169]: <info>  ModemManager (version 1.12.8) starting in system bus...
// systemd[1]: Starting Hold until boot process finishes up...
// vboxdrv.sh[1126]: vboxdrv.sh: Starting VirtualBox services.
// vboxdrv.sh: Starting VirtualBox services.
// snapd[1117]: AppArmor status: apparmor is enabled but some kernel features are missing: dbus, network
// vboxdrv.sh[1126]: vboxdrv.sh: Building VirtualBox kernel modules.
// vboxdrv.sh: Building VirtualBox kernel modules.
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.login1' unit='dbus-org.freedesktop.login1.service' requested by ':1.15' (uid=0 pid=1201 comm="/usr/sbin/lightdm ")
// systemd[1]: Condition check resulted in Load Kernel Module drm being skipped.
// systemd[1]: Started Disk Manager.
// udisksd[1125]: Acquired the name org.freedesktop.UDisks2 on the system message bus
// systemd[1]: Started Modem Manager.
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.hostname1'
// systemd[1]: Started Hostname Service.
// NetworkManager[1088]: <info>  [1610812037.7984] hostname: hostname: using hostnamed
// NetworkManager[1088]: <info>  [1610812037.7984] hostname: hostname changed from (none) to "surface"
// NetworkManager[1088]: <info>  [1610812037.7986] dns-mgr[0x556e15905290]: init: dns=systemd-resolved rc-manager=symlink, plugin=systemd-resolved
// NetworkManager[1088]: <info>  [1610812037.7991] rfkill0: found Wi-Fi radio killswitch (at /sys/devices/pci0000:00/0000:00:14.3/ieee80211/phy0/rfkill0) (driver iwlwifi)
// NetworkManager[1088]: <info>  [1610812037.7992] manager[0x556e15942030]: rfkill: Wi-Fi hardware radio set enabled
// NetworkManager[1088]: <info>  [1610812037.7992] manager[0x556e15942030]: rfkill: WWAN hardware radio set enabled
// NetworkManager[1088]: <info>  [1610812037.8030] Loaded device plugin: NMWifiFactory (/usr/lib/x86_64-linux-gnu/NetworkManager/1.22.10/libnm-device-plugin-wifi.so)
// NetworkManager[1088]: <info>  [1610812037.8048] Loaded device plugin: NMTeamFactory (/usr/lib/x86_64-linux-gnu/NetworkManager/1.22.10/libnm-device-plugin-team.so)
// NetworkManager[1088]: <info>  [1610812037.8079] Loaded device plugin: NMWwanFactory (/usr/lib/x86_64-linux-gnu/NetworkManager/1.22.10/libnm-device-plugin-wwan.so)
// NetworkManager[1088]: <info>  [1610812037.8086] Loaded device plugin: NMAtmManager (/usr/lib/x86_64-linux-gnu/NetworkManager/1.22.10/libnm-device-plugin-adsl.so)
// NetworkManager[1088]: <info>  [1610812037.8103] Loaded device plugin: NMBluezManager (/usr/lib/x86_64-linux-gnu/NetworkManager/1.22.10/libnm-device-plugin-bluetooth.so)
// NetworkManager[1088]: <info>  [1610812037.8106] manager: rfkill: Wi-Fi enabled by radio killswitch; enabled by state file
// NetworkManager[1088]: <info>  [1610812037.8107] manager: rfkill: WWAN enabled by radio killswitch; enabled by state file
// NetworkManager[1088]: <info>  [1610812037.8107] manager: Networking is enabled by state file
// NetworkManager[1088]: <info>  [1610812037.8108] dhcp-init: Using DHCP client 'internal'
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.nm_dispatcher' unit='dbus-org.freedesktop.nm-dispatcher.service' requested by ':1.10' (uid=0 pid=1088 comm="/usr/sbin/NetworkManager --no-daemon ")
// NetworkManager[1088]: <info>  [1610812037.8118] settings: Loaded settings plugin: ifupdown ("/usr/lib/x86_64-linux-gnu/NetworkManager/1.22.10/libnm-settings-plugin-ifupdown.so")
// NetworkManager[1088]: <info>  [1610812037.8118] settings: Loaded settings plugin: keyfile (internal)
// NetworkManager[1088]: <info>  [1610812037.8119] ifupdown: management mode: unmanaged
// NetworkManager[1088]: <info>  [1610812037.8119] ifupdown:       interface-parser: parsing file /etc/network/interfaces
// NetworkManager[1088]: <info>  [1610812037.8119] ifupdown:       interface-parser: source line includes interfaces file(s) /etc/network/interfaces.d
// NetworkManager[1088]: <info>  [1610812037.8119] ifupdown:       interface-parser: finished parsing file /etc/network/interfaces
// systemd[1]: Starting Network Manager Script Dispatcher Service...
// NetworkManager[1088]: <info>  [1610812037.8165] device (lo): carrier: link connected
// NetworkManager[1088]: <info>  [1610812037.8168] manager: (lo): new Generic device (/org/freedesktop/NetworkManager/Devices/1)
// NetworkManager[1088]: <info>  [1610812037.8172] device (wlp0s20f3): driver supports Access Point (AP) mode
// NetworkManager[1088]: <info>  [1610812037.8176] manager: (wlp0s20f3): new 802.11 Wi-Fi device (/org/freedesktop/NetworkManager/Devices/2)
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.nm_dispatcher'
// systemd[1]: Started Network Manager Script Dispatcher Service.
// NetworkManager[1088]: <info>  [1610812037.8186] device (wlp0s20f3): state change: unmanaged -> unavailable (reason 'managed', sys-iface-state: 'external')
// networkd-dispatcher[1242]: WARNING: systemd-networkd is not running, output will be incomplete.
// acpid: starting up with netlink and the input layer
// acpid: 8 rules loaded
// acpid: waiting for events: event logging is off
// systemd[1]: Started Dispatcher daemon for systemd-networkd.
// NetworkManager[1088]: <info>  [1610812038.0130] modem-manager: ModemManager available
// NetworkManager[1088]: <info>  [1610812038.0141] supplicant: wpa_supplicant running
// NetworkManager[1088]: <info>  [1610812038.0142] device (wlp0s20f3): supplicant interface state: init -> starting
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.login1'
// systemd[1]: Started Login Service.
// lightdm[1201]: Seat type 'xlocal' is deprecated, use 'type=local' instead
// systemd[1]: Started Unattended Upgrades Shutdown.
// systemd[1]: Received SIGRTMIN+21 from PID 317 (plymouthd).
// wpa_supplicant[1127]: nl80211: kernel reports: Attribute failed policy validation
// wpa_supplicant[1127]: Failed to create interface p2p-dev-wlp0s20f3: -22 (Invalid argument)
// wpa_supplicant[1127]: nl80211: Failed to create a P2P Device interface p2p-dev-wlp0s20f3
// wpa_supplicant[1127]: P2P: Failed to enable P2P Device interface
// wpa_supplicant[1127]: dbus: fill_dict_with_properties dbus_interface=fi.w1.wpa_supplicant1.Interface.P2PDevice dbus_property=P2PDeviceConfig getter failed
// NetworkManager[1088]: <info>  [1610812038.0709] sup-iface[0x556e15958120,wlp0s20f3]: supports 5 scan SSIDs
// NetworkManager[1088]: <info>  [1610812038.0714] device (wlp0s20f3): supplicant interface state: starting -> ready
// NetworkManager[1088]: <info>  [1610812038.0715] Wi-Fi P2P device controlled by interface wlp0s20f3 created
// NetworkManager[1088]: <info>  [1610812038.0717] manager: (p2p-dev-wlp0s20f3): new 802.11 Wi-Fi P2P device (/org/freedesktop/NetworkManager/Devices/3)
// NetworkManager[1088]: <info>  [1610812038.0720] device (p2p-dev-wlp0s20f3): state change: unmanaged -> unavailable (reason 'managed', sys-iface-state: 'external')
// NetworkManager[1088]: <info>  [1610812038.0724] device (p2p-dev-wlp0s20f3): state change: unavailable -> disconnected (reason 'none', sys-iface-state: 'managed')
// NetworkManager[1088]: <info>  [1610812038.0727] device (wlp0s20f3): state change: unavailable -> disconnected (reason 'supplicant-available', sys-iface-state: 'managed')
// NetworkManager[1088]: <warn>  [1610812038.0742] sup-iface: failed to cancel p2p connect: P2P cancel failed
// systemd[1]: Received SIGRTMIN+21 from PID 317 (plymouthd).
// systemd[1]: plymouth-quit-wait.service: Succeeded.
// systemd[1]: Finished Hold until boot process finishes up.
// systemd[1]: Starting Set console scheme...
// systemd[1]: Started Light Display Manager.
// systemd[1]: Finished Set console scheme.
// systemd[1]: Created slice system-getty.slice.
// systemd[1]: Started Getty on tty1.
// systemd[1]: Reached target Login Prompts.
// snapd[1117]: AppArmor status: apparmor is enabled but some kernel features are missing: dbus, network
// snapd[1117]: daemon.go:347: started snapd/2.48.2 (series 16; classic; devmode) ubuntu/20.04 (amd64) linux/5.10.5-surface.
// snapd[1117]: daemon.go:440: adjusting startup timeout by 1m15s (pessimistic estimate of 30s plus 5s per snap)
// systemd[1]: tmp-sanity\x2dmountpoint\x2d073154967.mount: Succeeded.
// avahi-daemon[1082]: Server startup complete. Host name is surface.local. Local service cookie is 1732423582.
// systemd[1]: Created slice User Slice of UID 114.
// systemd[1]: Starting User Runtime Directory /run/user/114...
// systemd[1]: Finished User Runtime Directory /run/user/114.
// systemd[1]: Starting User Manager for UID 114...
// systemd[1]: Started Snap Daemon.
// systemd[1]: Starting Wait until snapd is fully seeded...
// systemd[1879]: Started Pending report trigger for Ubuntu Report.
// systemd[1879]: Reached target Paths.
// systemd[1879]: Reached target Timers.
// systemd[1879]: Starting D-Bus User Message Bus Socket.
// systemd[1879]: Listening on GnuPG network certificate management daemon.
// systemd[1879]: Listening on GnuPG cryptographic agent and passphrase cache (access for web browsers).
// systemd[1879]: Listening on GnuPG cryptographic agent and passphrase cache (restricted).
// systemd[1879]: Listening on GnuPG cryptographic agent (ssh-agent emulation).
// systemd[1879]: Listening on GnuPG cryptographic agent and passphrase cache.
// systemd[1879]: Listening on debconf communication socket.
// systemd[1879]: Listening on Sound System.
// systemd[1879]: Listening on REST API socket for snapd user session agent.
// systemd[1879]: Listening on D-Bus User Message Bus Socket.
// systemd[1879]: Reached target Sockets.
// systemd[1879]: Reached target Basic System.
// systemd[1879]: Starting Dunst notification daemon...
// systemd[1879]: Starting Sound Service...
// systemd[1]: Started User Manager for UID 114.
// systemd[1879]: Starting Tracker metadata extractor...
// systemd[1]: Started Session c1 of user lightdm.
// systemd[1879]: Starting Tracker file system data miner...
// systemd[1879]: Started D-Bus User Message Bus.
// tracker-miner-f[1933]: Set scheduler policy to SCHED_IDLE
// tracker-extract[1932]: Set scheduler policy to SCHED_IDLE
// dunst[1930]: CRITICAL: Cannot open X11 display.
// tracker-extract[1932]: Setting priority nice level to 19
// tracker-miner-f[1933]: Setting priority nice level to 19
// systemd[1879]: dunst.service: Main process exited, code=exited, status=1/FAILURE
// systemd[1879]: dunst.service: Failed with result 'exit-code'.
// systemd[1879]: Failed to start Dunst notification daemon.
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.RealtimeKit1' unit='rtkit-daemon.service' requested by ':1.27' (uid=114 pid=1931 comm="/usr/bin/pulseaudio --daemonize=no --log-target=jo")
// systemd[1]: Starting RealtimeKit Scheduling Policy Service...
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.RealtimeKit1'
// systemd[1]: Started RealtimeKit Scheduling Policy Service.
// rtkit-daemon[1949]: Successfully called chroot.
// rtkit-daemon[1949]: Successfully dropped privileges.
// rtkit-daemon[1949]: Successfully limited resources.
// rtkit-daemon[1949]: Running.
// rtkit-daemon[1949]: Canary thread running.
// rtkit-daemon[1949]: Watchdog thread running.
// rtkit-daemon[1949]: Successfully made thread 1931 of process 1931 owned by '114' high priority at nice level -11.
// rtkit-daemon[1949]: Supervising 1 threads of 1 processes of 1 users.
// dbus-daemon[1937]: [session uid=114 pid=1937] Activating via systemd: service name='org.gtk.vfs.Daemon' unit='gvfs-daemon.service' requested by ':1.3' (uid=114 pid=1947 comm="/usr/sbin/slick-greeter ")
// systemd[1879]: Starting Virtual filesystem service...
// dbus-daemon[1937]: [session uid=114 pid=1937] Successfully activated service 'org.gtk.vfs.Daemon'
// systemd[1879]: Started Virtual filesystem service.
// dbus-daemon[1937]: [session uid=114 pid=1937] Activating service name='ca.desrt.dconf' requested by ':1.3' (uid=114 pid=1947 comm="/usr/sbin/slick-greeter ")
// tracker-miner-f[1933]: Unable to get XDG user directory path for special directory &DOCUMENTS. Ignoring this location.
// dbus-daemon[1937]: [session uid=114 pid=1937] Activating via systemd: service name='org.gtk.vfs.UDisks2VolumeMonitor' unit='gvfs-udisks2-volume-monitor.service' requested by ':1.1' (uid=114 pid=1933 comm="/usr/libexec/tracker-miner-fs ")
// tracker-miner-f[1933]: Unable to get XDG user directory path for special directory &MUSIC. Ignoring this location.
// tracker-miner-f[1933]: Unable to get XDG user directory path for special directory &PICTURES. Ignoring this location.
// tracker-miner-f[1933]: Unable to get XDG user directory path for special directory &VIDEOS. Ignoring this location.
// tracker-miner-f[1933]: Unable to get XDG user directory path for special directory &DOWNLOAD. Ignoring this location.
// tracker-miner-f[1933]: Unable to get XDG user directory path for special directory &DOCUMENTS. Ignoring this location.
// tracker-miner-f[1933]: Unable to get XDG user directory path for special directory &MUSIC. Ignoring this location.
// tracker-miner-f[1933]: Unable to get XDG user directory path for special directory &PICTURES. Ignoring this location.
// tracker-miner-f[1933]: Unable to get XDG user directory path for special directory &VIDEOS. Ignoring this location.
// systemd[1879]: Starting Virtual filesystem service - disk device monitor...
// dbus-daemon[1937]: [session uid=114 pid=1937] Successfully activated service 'ca.desrt.dconf'
// systemd[1]: Started PostgreSQL Cluster 12-main.
// systemd[1]: Starting PostgreSQL RDBMS...
// systemd[1]: Finished PostgreSQL RDBMS.
// dbus-daemon[1937]: [session uid=114 pid=1937] Successfully activated service 'org.gtk.vfs.UDisks2VolumeMonitor'
// systemd[1879]: Started Virtual filesystem service - disk device monitor.
// dbus-daemon[1937]: [session uid=114 pid=1937] Activating via systemd: service name='org.gtk.vfs.GPhoto2VolumeMonitor' unit='gvfs-gphoto2-volume-monitor.service' requested by ':1.1' (uid=114 pid=1933 comm="/usr/libexec/tracker-miner-fs ")
// systemd[1879]: Starting Virtual filesystem service - digital camera monitor...
// dbus-daemon[1937]: [session uid=114 pid=1937] Successfully activated service 'org.gtk.vfs.GPhoto2VolumeMonitor'
// systemd[1879]: Started Virtual filesystem service - digital camera monitor.
// dbus-daemon[1937]: [session uid=114 pid=1937] Activating via systemd: service name='org.gtk.vfs.GoaVolumeMonitor' unit='gvfs-goa-volume-monitor.service' requested by ':1.1' (uid=114 pid=1933 comm="/usr/libexec/tracker-miner-fs ")
// systemd[1879]: Starting Virtual filesystem service - GNOME Online Accounts monitor...
// dbus-daemon[1937]: [session uid=114 pid=1937] Successfully activated service 'org.gtk.vfs.GoaVolumeMonitor'
// systemd[1879]: Started Virtual filesystem service - GNOME Online Accounts monitor.
// dbus-daemon[1937]: [session uid=114 pid=1937] Activating via systemd: service name='org.gtk.vfs.MTPVolumeMonitor' unit='gvfs-mtp-volume-monitor.service' requested by ':1.1' (uid=114 pid=1933 comm="/usr/libexec/tracker-miner-fs ")
// systemd[1879]: Starting Virtual filesystem service - Media Transfer Protocol monitor...
// dbus-daemon[1937]: [session uid=114 pid=1937] Successfully activated service 'org.gtk.vfs.MTPVolumeMonitor'
// systemd[1879]: Started Virtual filesystem service - Media Transfer Protocol monitor.
// dbus-daemon[1937]: [session uid=114 pid=1937] Activating via systemd: service name='org.gtk.vfs.AfcVolumeMonitor' unit='gvfs-afc-volume-monitor.service' requested by ':1.1' (uid=114 pid=1933 comm="/usr/libexec/tracker-miner-fs ")
// systemd[1879]: Starting Virtual filesystem service - Apple File Conduit monitor...
// dbus-daemon[1937]: [session uid=114 pid=1937] Successfully activated service 'org.gtk.vfs.AfcVolumeMonitor'
// systemd[1879]: Started Virtual filesystem service - Apple File Conduit monitor.
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.UPower' unit='upower.service' requested by ':1.30' (uid=114 pid=1933 comm="/usr/libexec/tracker-miner-fs ")
// systemd[1]: Starting Daemon for power management...
// /slick-greeter-check-hidpi: Window scale: 2
// /slick-greeter-set-keyboard-layout: Current keyboard configuration: rules:      evdev#012model:      pc105#012layout:     us
// /slick-greeter-set-keyboard-layout: Applying keyboard configuration: ['setxkbmap', '-model', 'pc105', '-layout', 'us', '-variant', '', '-option', '', '-v']
// /slick-greeter-set-keyboard-layout: Result: Warning! Multiple definitions of keyboard model#012         Using command line, ignoring X server#012Warning! Multiple definitions of keyboard layout#012         Using command line, ignoring X server#012Trying to build keymap using the following components:#012keycodes:   evdev+aliases(qwerty)#012types:      complete#012compat:     complete#012symbols:    pc+us+inet(evdev)#012geometry:   pc(pc105)
// /slick-greeter-set-keyboard-layout: New keyboard configuration: rules:      evdev#012model:      pc105#012layout:     us
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.UPower'
// systemd[1]: Started Daemon for power management.
// ModemManager[1169]: <info>  Couldn't check support for device '/sys/devices/pci0000:00/0000:00:14.3': not supported by any plugin
// systemd[1]: Finished Wait until snapd is fully seeded.
// systemd[1]: Condition check resulted in Auto import assertions from block devices being skipped.
// dbus-daemon[1937]: [session uid=114 pid=1937] Activating via systemd: service name='org.freedesktop.Tracker1' unit='tracker-store.service' requested by ':1.1' (uid=114 pid=1933 comm="/usr/libexec/tracker-miner-fs ")
// systemd[1879]: Starting Tracker metadata database store and lookup manager...
// systemd[1879]: Started Tracker file system data miner.
// dbus-daemon[1937]: [session uid=114 pid=1937] Successfully activated service 'org.freedesktop.Tracker1'
// systemd[1879]: Started Tracker metadata database store and lookup manager.
// pulseaudio[1931]: Disabling timer-based scheduling because running inside a VM.
// rtkit-daemon[1949]: Supervising 1 threads of 1 processes of 1 users.
// rtkit-daemon[1949]: Successfully made thread 2140 of process 1931 owned by '114' RT at priority 5.
// rtkit-daemon[1949]: Supervising 2 threads of 1 processes of 1 users.
// pulseaudio[1931]: Disabling timer-based scheduling because running inside a VM.
// rtkit-daemon[1949]: Supervising 2 threads of 1 processes of 1 users.
// rtkit-daemon[1949]: Successfully made thread 2141 of process 1931 owned by '114' RT at priority 5.
// rtkit-daemon[1949]: Supervising 3 threads of 1 processes of 1 users.
// systemd[1879]: Started Sound Service.
// systemd[1879]: Started Tracker metadata extractor.
// systemd[1879]: Reached target Main User Target.
// systemd[1879]: Startup finished in 849ms.
// vboxdrv.sh[1126]: vboxdrv.sh: failed: Look at /var/log/vbox-setup.log to find out what went wrong.
// vboxdrv.sh: failed: Look at /var/log/vbox-setup.log to find out what went wrong.
// systemd[1]: vboxdrv.service: Control process exited, code=exited, status=1/FAILURE
// systemd[1]: vboxdrv.service: Failed with result 'exit-code'.
// systemd[1]: Failed to start VirtualBox Linux kernel module.
// systemd[1]: Starting vboxautostart-service.service...
// systemd[1]: Starting vboxballoonctrl-service.service...
// systemd[1]: Started vboxautostart-service.service.
// systemd[1]: Started vboxballoonctrl-service.service.
// NetworkManager[1088]: <info>  [1610812041.1404] policy: auto-activating connection 'KWENCH' (6bfbb81c-1faf-436c-bc8f-44c5ba25bb89)
// NetworkManager[1088]: <info>  [1610812041.1411] device (wlp0s20f3): Activation: starting connection 'KWENCH' (6bfbb81c-1faf-436c-bc8f-44c5ba25bb89)
// NetworkManager[1088]: <info>  [1610812041.1412] device (wlp0s20f3): state change: disconnected -> prepare (reason 'none', sys-iface-state: 'managed')
// NetworkManager[1088]: <info>  [1610812041.1415] manager: NetworkManager state is now CONNECTING
// NetworkManager[1088]: <info>  [1610812041.1418] device (wlp0s20f3): state change: prepare -> config (reason 'none', sys-iface-state: 'managed')
// NetworkManager[1088]: <info>  [1610812041.1421] device (wlp0s20f3): Activation: (wifi) access point 'KWENCH' has security, but secrets are required.
// NetworkManager[1088]: <info>  [1610812041.1421] device (wlp0s20f3): state change: config -> need-auth (reason 'none', sys-iface-state: 'managed')
// NetworkManager[1088]: <info>  [1610812041.1447] device (wlp0s20f3): state change: need-auth -> prepare (reason 'none', sys-iface-state: 'managed')
// NetworkManager[1088]: <info>  [1610812041.1450] device (wlp0s20f3): state change: prepare -> config (reason 'none', sys-iface-state: 'managed')
// NetworkManager[1088]: <info>  [1610812041.1452] device (wlp0s20f3): Activation: (wifi) connection 'KWENCH' has security, and secrets exist.  No new secrets needed.
// NetworkManager[1088]: <info>  [1610812041.1453] Config: added 'ssid' value 'KWENCH'
// NetworkManager[1088]: <info>  [1610812041.1453] Config: added 'scan_ssid' value '1'
// NetworkManager[1088]: <info>  [1610812041.1453] Config: added 'bgscan' value 'simple:30:-70:86400'
// NetworkManager[1088]: <info>  [1610812041.1453] Config: added 'key_mgmt' value 'WPA-PSK WPA-PSK-SHA256 FT-PSK'
// NetworkManager[1088]: <info>  [1610812041.1453] Config: added 'auth_alg' value 'OPEN'
// NetworkManager[1088]: <info>  [1610812041.1453] Config: added 'psk' value '<hidden>'
// wpa_supplicant[1127]: wlp0s20f3: SME: Trying to authenticate with 0e:ec:da:15:98:4a (SSID='KWENCH' freq=5785 MHz)
// kernel: [    9.576088] wlp0s20f3: authenticate with 0e:ec:da:15:98:4a
// NetworkManager[1088]: <info>  [1610812041.1536] device (wlp0s20f3): supplicant interface state: ready -> authenticating
// NetworkManager[1088]: <info>  [1610812041.1536] device (p2p-dev-wlp0s20f3): supplicant management interface state: ready -> authenticating
// kernel: [    9.579798] wlp0s20f3: send auth to 0e:ec:da:15:98:4a (try 1/3)
// wpa_supplicant[1127]: wlp0s20f3: Trying to associate with 0e:ec:da:15:98:4a (SSID='KWENCH' freq=5785 MHz)
// NetworkManager[1088]: <info>  [1610812041.1811] device (wlp0s20f3): supplicant interface state: authenticating -> associating
// NetworkManager[1088]: <info>  [1610812041.1811] device (p2p-dev-wlp0s20f3): supplicant management interface state: authenticating -> associating
// kernel: [    9.608043] wlp0s20f3: authenticated
// kernel: [    9.610729] wlp0s20f3: associate with 0e:ec:da:15:98:4a (try 1/3)
// wpa_supplicant[1127]: wlp0s20f3: Associated with 0e:ec:da:15:98:4a
// kernel: [    9.614982] wlp0s20f3: RX AssocResp from 0e:ec:da:15:98:4a (capab=0x411 status=0 aid=1)
// kernel: [    9.617888] wlp0s20f3: associated
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
// wpa_supplicant[1127]: wlp0s20f3: WPA: Key negotiation completed with 0e:ec:da:15:98:4a [PTK=CCMP GTK=CCMP]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-CONNECTED - Connection to 0e:ec:da:15:98:4a completed [id=0 id_str=]
// kernel: [    9.643571] IPv6: ADDRCONF(NETDEV_CHANGE): wlp0s20f3: link becomes ready
// NetworkManager[1088]: <info>  [1610812041.2190] device (wlp0s20f3): supplicant interface state: associating -> completed
// NetworkManager[1088]: <info>  [1610812041.2190] device (wlp0s20f3): Activation: (wifi) Stage 2 of 5 (Device Configure) successful. Connected to wireless network "KWENCH"
// NetworkManager[1088]: <info>  [1610812041.2190] device (p2p-dev-wlp0s20f3): supplicant management interface state: associating -> completed
// NetworkManager[1088]: <info>  [1610812041.2191] device (wlp0s20f3): state change: config -> ip-config (reason 'none', sys-iface-state: 'managed')
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-54 noise=9999 txrate=108000
// NetworkManager[1088]: <info>  [1610812041.2197] dhcp4 (wlp0s20f3): activation: beginning transaction (timeout in 45 seconds)
// avahi-daemon[1082]: Joining mDNS multicast group on interface wlp0s20f3.IPv6 with address fe80::35a:46e0:cf7a:54af.
// avahi-daemon[1082]: New relevant interface wlp0s20f3.IPv6 for mDNS.
// avahi-daemon[1082]: Registering new address record for fe80::35a:46e0:cf7a:54af on wlp0s20f3.*.
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=1 signal=-55 noise=9999 txrate=108000
// NetworkManager[1088]: <info>  [1610812041.4728] dhcp4 (wlp0s20f3): option dhcp_lease_time      => '86400'
// NetworkManager[1088]: <info>  [1610812041.4728] dhcp4 (wlp0s20f3): option domain_name_servers  => '10.4.0.1'
// NetworkManager[1088]: <info>  [1610812041.4728] dhcp4 (wlp0s20f3): option expiry               => '1610898441'
// NetworkManager[1088]: <info>  [1610812041.4729] dhcp4 (wlp0s20f3): option ip_address           => '10.4.0.255'
// NetworkManager[1088]: <info>  [1610812041.4729] dhcp4 (wlp0s20f3): option requested_broadcast_address => '1'
// NetworkManager[1088]: <info>  [1610812041.4729] dhcp4 (wlp0s20f3): option requested_domain_name => '1'
// NetworkManager[1088]: <info>  [1610812041.4729] dhcp4 (wlp0s20f3): option requested_domain_name_servers => '1'
// NetworkManager[1088]: <info>  [1610812041.4729] dhcp4 (wlp0s20f3): option requested_domain_search => '1'
// NetworkManager[1088]: <info>  [1610812041.4729] dhcp4 (wlp0s20f3): option requested_host_name  => '1'
// NetworkManager[1088]: <info>  [1610812041.4729] dhcp4 (wlp0s20f3): option requested_interface_mtu => '1'
// NetworkManager[1088]: <info>  [1610812041.4729] dhcp4 (wlp0s20f3): option requested_ms_classless_static_routes => '1'
// avahi-daemon[1082]: Joining mDNS multicast group on interface wlp0s20f3.IPv4 with address 10.4.0.255.
// NetworkManager[1088]: <info>  [1610812041.4730] dhcp4 (wlp0s20f3): option requested_nis_domain => '1'
// NetworkManager[1088]: <info>  [1610812041.4730] dhcp4 (wlp0s20f3): option requested_nis_servers => '1'
// avahi-daemon[1082]: New relevant interface wlp0s20f3.IPv4 for mDNS.
// NetworkManager[1088]: <info>  [1610812041.4730] dhcp4 (wlp0s20f3): option requested_ntp_servers => '1'
// avahi-daemon[1082]: Registering new address record for 10.4.0.255 on wlp0s20f3.IPv4.
// NetworkManager[1088]: <info>  [1610812041.4730] dhcp4 (wlp0s20f3): option requested_rfc3442_classless_static_routes => '1'
// NetworkManager[1088]: <info>  [1610812041.4730] dhcp4 (wlp0s20f3): option requested_root_path  => '1'
// NetworkManager[1088]: <info>  [1610812041.4730] dhcp4 (wlp0s20f3): option requested_routers    => '1'
// NetworkManager[1088]: <info>  [1610812041.4730] dhcp4 (wlp0s20f3): option requested_static_routes => '1'
// NetworkManager[1088]: <info>  [1610812041.4730] dhcp4 (wlp0s20f3): option requested_subnet_mask => '1'
// NetworkManager[1088]: <info>  [1610812041.4730] dhcp4 (wlp0s20f3): option requested_time_offset => '1'
// NetworkManager[1088]: <info>  [1610812041.4731] dhcp4 (wlp0s20f3): option requested_wpad       => '1'
// NetworkManager[1088]: <info>  [1610812041.4731] dhcp4 (wlp0s20f3): option routers              => '10.4.0.1'
// NetworkManager[1088]: <info>  [1610812041.4731] dhcp4 (wlp0s20f3): option subnet_mask          => '255.255.252.0'
// NetworkManager[1088]: <info>  [1610812041.4731] dhcp4 (wlp0s20f3): state changed unknown -> bound
// NetworkManager[1088]: <info>  [1610812041.4757] device (wlp0s20f3): state change: ip-config -> ip-check (reason 'none', sys-iface-state: 'managed')
// NetworkManager[1088]: <info>  [1610812041.4789] device (wlp0s20f3): state change: ip-check -> secondaries (reason 'none', sys-iface-state: 'managed')
// NetworkManager[1088]: <info>  [1610812041.4794] device (wlp0s20f3): state change: secondaries -> activated (reason 'none', sys-iface-state: 'managed')
// NetworkManager[1088]: <info>  [1610812041.4802] manager: NetworkManager state is now CONNECTED_LOCAL
// NetworkManager[1088]: <info>  [1610812041.4833] manager: NetworkManager state is now CONNECTED_SITE
// NetworkManager[1088]: <info>  [1610812041.4835] policy: set 'KWENCH' (wlp0s20f3) as default for IPv4 routing and DNS
// NetworkManager[1088]: <info>  [1610812041.4845] device (wlp0s20f3): Activation: successful, device activated.
// NetworkManager[1088]: <info>  [1610812041.4858] manager: NetworkManager state is now CONNECTED_GLOBAL
// NetworkManager[1088]: <info>  [1610812041.4867] manager: startup complete
// systemd[1]: Finished Network Manager Wait Online.
// systemd[1]: Reached target Network is Online.
// systemd[1]: Starting LSB: disk temperature monitoring daemon...
// systemd[1]: Starting Tool to automatically collect and submit kernel crash signatures...
// systemd[1]: Starting vboxweb-service.service...
// systemd[1]: Started crash report submission daemon.
// systemd[1]: Started vboxweb-service.service.
// systemd[1]: Started LSB: disk temperature monitoring daemon.
// systemd[1]: kerneloops.service: Found left-over process 2217 (kerneloops) in control group while starting unit. Ignoring.
// systemd[1]: This usually indicates unclean termination of a previous run, or service implementation deficiencies.
// systemd[1]: Started Tool to automatically collect and submit kernel crash signatures.
// systemd[1]: Reached target Multi-User System.
// systemd[1]: Reached target Graphical Interface.
// systemd[1]: Starting Update UTMP about System Runlevel Changes...
// systemd[1]: Starting TLP system startup/shutdown...
// whoopsie[2202]: [07:47:21] Using lock path: /var/lock/whoopsie/lock
// systemd[1]: systemd-update-utmp-runlevel.service: Succeeded.
// systemd[1]: Finished Update UTMP about System Runlevel Changes.
// whoopsie[2202]: [07:47:21] The default IPv4 route is: /org/freedesktop/NetworkManager/ActiveConnection/1
// whoopsie[2202]: [07:47:21] Not a paid data plan: /org/freedesktop/NetworkManager/ActiveConnection/1
// whoopsie[2202]: [07:47:21] Found usable connection: /org/freedesktop/NetworkManager/ActiveConnection/1
// tlp[2238]: Applying power save settings...done.
// tlp[2238]: Setting battery charge thresholds...done.
// systemd[1]: Finished TLP system startup/shutdown.
// systemd[1]: Startup finished in 2.599s (firmware) + 19.529s (loader) + 4.055s (kernel) + 5.965s (userspace) = 32.149s.
// set-cpufreq[1113]: Setting powersave scheduler for all CPUs
// systemd[1]: ondemand.service: Succeeded.
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-54 noise=9999 txrate=108000
// systemd[1]: dmesg.service: Succeeded.
// systemd[1]: Stopping Session c1 of user lightdm.
// systemd[1]: Created slice User Slice of UID 1000.
// systemd[1]: Starting User Runtime Directory /run/user/1000...
// systemd[1]: session-c1.scope: Succeeded.
// systemd[1879]: pulseaudio.service: Succeeded.
// systemd[1]: Stopped Session c1 of user lightdm.
// systemd[1]: Finished User Runtime Directory /run/user/1000.
// systemd[1]: Starting User Manager for UID 1000...
// systemd[2441]: Started Pending report trigger for Ubuntu Report.
// systemd[2441]: Reached target Paths.
// systemd[2441]: Reached target Timers.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating via systemd: service name='org.gtk.vfs.Daemon' unit='gvfs-daemon.service' requested by ':1.1' (uid=1000 pid=2450 comm="/usr/libexec/tracker-miner-fs ")
// systemd[2441]: Starting D-Bus User Message Bus Socket.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.gtk.vfs.Daemon'
// dunst[2447]: CRITICAL: Cannot open X11 display.
// systemd[2441]: Listening on GnuPG network certificate management daemon.
// systemd[2441]: Listening on GnuPG cryptographic agent and passphrase cache (access for web browsers).
// systemd[2441]: Listening on GnuPG cryptographic agent and passphrase cache (restricted).
// systemd[2441]: Listening on GnuPG cryptographic agent (ssh-agent emulation).
// systemd[2441]: Listening on GnuPG cryptographic agent and passphrase cache.
// systemd[2441]: Listening on debconf communication socket.
// systemd[2441]: Listening on Sound System.
// systemd[2441]: Listening on REST API socket for snapd user session agent.
// systemd[2441]: Listening on D-Bus User Message Bus Socket.
// systemd[2441]: Reached target Sockets.
// systemd[2441]: Reached target Basic System.
// systemd[1]: Started User Manager for UID 1000.
// systemd[2441]: Starting Dunst notification daemon...
// systemd[1]: Started Session c2 of user marcel.
// systemd[2441]: Starting Sound Service...
// systemd[2441]: Starting Tracker metadata extractor...
// systemd[2441]: Starting Tracker file system data miner...
// systemd[2441]: dunst.service: Main process exited, code=exited, status=1/FAILURE
// systemd[2441]: dunst.service: Failed with result 'exit-code'.
// systemd[2441]: Failed to start Dunst notification daemon.
// tracker-extract[2449]: Set scheduler policy to SCHED_IDLE
// tracker-extract[2449]: Setting priority nice level to 19
// systemd[2441]: Started D-Bus User Message Bus.
// tracker-miner-f[2450]: Set scheduler policy to SCHED_IDLE
// tracker-miner-f[2450]: Setting priority nice level to 19
// systemd[2441]: Starting Virtual filesystem service...
// systemd[2441]: Started Virtual filesystem service.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating via systemd: service name='org.gtk.vfs.UDisks2VolumeMonitor' unit='gvfs-udisks2-volume-monitor.service' requested by ':1.1' (uid=1000 pid=2450 comm="/usr/libexec/tracker-miner-fs ")
// systemd[2441]: Starting Virtual filesystem service - disk device monitor...
// rtkit-daemon[1949]: Successfully made thread 2448 of process 2448 owned by '1000' high priority at nice level -11.
// rtkit-daemon[1949]: Supervising 1 threads of 1 processes of 2 users.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.gtk.vfs.UDisks2VolumeMonitor'
// systemd[2441]: Started Virtual filesystem service - disk device monitor.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating via systemd: service name='org.gtk.vfs.GPhoto2VolumeMonitor' unit='gvfs-gphoto2-volume-monitor.service' requested by ':1.1' (uid=1000 pid=2450 comm="/usr/libexec/tracker-miner-fs ")
// systemd[2441]: Starting Virtual filesystem service - digital camera monitor...
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.gtk.vfs.GPhoto2VolumeMonitor'
// systemd[2441]: Started Virtual filesystem service - digital camera monitor.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating via systemd: service name='org.gtk.vfs.GoaVolumeMonitor' unit='gvfs-goa-volume-monitor.service' requested by ':1.1' (uid=1000 pid=2450 comm="/usr/libexec/tracker-miner-fs ")
// systemd[2441]: Starting Virtual filesystem service - GNOME Online Accounts monitor...
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.gtk.vfs.GoaVolumeMonitor'
// systemd[2441]: Started Virtual filesystem service - GNOME Online Accounts monitor.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating via systemd: service name='org.gtk.vfs.MTPVolumeMonitor' unit='gvfs-mtp-volume-monitor.service' requested by ':1.1' (uid=1000 pid=2450 comm="/usr/libexec/tracker-miner-fs ")
// systemd[2441]: Starting Virtual filesystem service - Media Transfer Protocol monitor...
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.gtk.vfs.MTPVolumeMonitor'
// systemd[2441]: Started Virtual filesystem service - Media Transfer Protocol monitor.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating via systemd: service name='org.gtk.vfs.AfcVolumeMonitor' unit='gvfs-afc-volume-monitor.service' requested by ':1.1' (uid=1000 pid=2450 comm="/usr/libexec/tracker-miner-fs ")
// systemd[2441]: Starting Virtual filesystem service - Apple File Conduit monitor...
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.gtk.vfs.AfcVolumeMonitor'
// systemd[2441]: Started Virtual filesystem service - Apple File Conduit monitor.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating via systemd: service name='org.freedesktop.Tracker1' unit='tracker-store.service' requested by ':1.1' (uid=1000 pid=2450 comm="/usr/libexec/tracker-miner-fs ")
// systemd[2441]: Starting Tracker metadata database store and lookup manager...
// systemd[2441]: Started Tracker file system data miner.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Tracker1'
// systemd[2441]: Started Tracker metadata database store and lookup manager.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.portal.IBus' requested by ':1.16' (uid=1000 pid=2598 comm="/usr/bin/ibus-daemon --daemonize --xim ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.portal.IBus'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating via systemd: service name='org.a11y.Bus' unit='at-spi-dbus-bus.service' requested by ':1.31' (uid=1000 pid=2463 comm="mate-session ")
// systemd[2441]: Starting Accessibility services bus...
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.a11y.Bus'
// systemd[2441]: Started Accessibility services bus.
// at-spi-bus-launcher[2642]: dbus-daemon[2642]: Activating service name='org.a11y.atspi.Registry' requested by ':1.1' (uid=1000 pid=2609 comm="/usr/libexec/ibus-ui-gtk3 ")
// at-spi-bus-launcher[2642]: dbus-daemon[2642]: Successfully activated service 'org.a11y.atspi.Registry'
// at-spi-bus-launcher[2646]: SpiRegistry daemon is running with well-known name - org.a11y.atspi.Registry
// systemd[2441]: Started Tracker metadata extractor.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='ca.desrt.dconf' requested by ':1.24' (uid=1000 pid=2463 comm="mate-session ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'ca.desrt.dconf'
// pulseaudio[2448]: Disabling timer-based scheduling because running inside a VM.
// mate-session[2463]: WARNING: Unable to find provider 'caja' of required component 'filemanager'
// mate-session[2463]: WARNING: Unable to find provider '' of required component 'dock'
// rtkit-daemon[1949]: Supervising 1 threads of 1 processes of 2 users.
// rtkit-daemon[1949]: Successfully made thread 2683 of process 2448 owned by '1000' RT at priority 5.
// rtkit-daemon[1949]: Supervising 2 threads of 1 processes of 2 users.
// pulseaudio[2448]: Disabling timer-based scheduling because running inside a VM.
// rtkit-daemon[1949]: Supervising 2 threads of 1 processes of 2 users.
// rtkit-daemon[1949]: Successfully made thread 2684 of process 2448 owned by '1000' RT at priority 5.
// rtkit-daemon[1949]: Supervising 3 threads of 1 processes of 2 users.
// systemd[2441]: Started Sound Service.
// systemd[2441]: Reached target Main User Target.
// systemd[2441]: Startup finished in 428ms.
// mate-session[2463]: WARNING: Could not launch application 'blueman.desktop': Unable to start application: Failed to execute child process “blueman-applet” (No such file or directory)
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.timedate1' unit='dbus-org.freedesktop.timedate1.service' requested by ':1.57' (uid=1000 pid=2739 comm="/usr/lib/x86_64-linux-gnu/indicator-datetime/indic")
// systemd[1]: Starting Time & Date Service...
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating via systemd: service name='org.gnome.evolution.dataserver.Sources5' unit='evolution-source-registry.service' requested by ':1.58' (uid=1000 pid=2739 comm="/usr/lib/x86_64-linux-gnu/indicator-datetime/indic")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activation via systemd failed for unit 'evolution-source-registry.service': Unit evolution-source-registry.service not found.
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.timedate1'
// systemd[1]: Started Time & Date Service.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.mate.panel.applet.BriskMenuFactory' requested by ':1.46' (uid=1000 pid=2687 comm="mate-panel ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.mate.panel.applet.CPUFreqAppletFactory' requested by ':1.46' (uid=1000 pid=2687 comm="mate-panel ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.mate.panel.applet.IndicatorAppletCompleteFactory' requested by ':1.46' (uid=1000 pid=2687 comm="mate-panel ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.mate.panel.applet.NotificationAreaAppletFactory' requested by ':1.46' (uid=1000 pid=2687 comm="mate-panel ")
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.GeoClue2' unit='geoclue.service' requested by ':1.65' (uid=1000 pid=2949 comm="/usr/bin/redshift -v ")
// systemd[1]: Starting Location Lookup Service...
// NetworkManager[1088]: <info>  [1610812044.2999] agent-manager: agent[060fa5544f5d3d6e,:1.64/org.freedesktop.nm-applet/1000]: agent registered
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.mate.panel.applet.CPUFreqAppletFactory'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.mate.panel.applet.IndicatorAppletCompleteFactory'
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.GeoClue2'
// systemd[1]: Started Location Lookup Service.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.mate.panel.applet.BriskMenuFactory'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating via systemd: service name='org.gtk.vfs.Metadata' unit='gvfs-metadata.service' requested by ':1.76' (uid=1000 pid=2932 comm="/usr/lib/mate-indicator-applet/mate-indicator-appl")
// systemd[2441]: Starting Virtual filesystem metadata service...
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.gtk.vfs.Metadata'
// systemd[2441]: Started Virtual filesystem metadata service.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.mate.panel.applet.NotificationAreaAppletFactory'
// notification-ar[2935]: GDBus.Error:org.freedesktop.DBus.GLib.ErrorError: Method invoked for RegisterStatusNotifierHost returned FALSE but did not set error
// brisk-menu[2927]: gdk_window_get_origin: assertion 'GDK_IS_WINDOW (window)' failed
// brisk-menu[2927]: gdk_window_get_origin: assertion 'GDK_IS_WINDOW (window)' failed
// brisk-menu[2927]: Negative content width -11 (allocation 1, extents 6x6) while allocating gadget (node button, owner GtkToggleButton)
// brisk-menu[2927]: Negative content width -11 (allocation 1, extents 6x6) while allocating gadget (node button, owner GtkToggleButton)
// brisk-menu[2927]: gdk_window_get_origin: assertion 'GDK_IS_WINDOW (window)' failed
// brisk-menu[2927]: gdk_window_get_origin: assertion 'GDK_IS_WINDOW (window)' failed
// org.mate.panel.applet.BriskMenuFactory[3114]: localuser:root being added to access control list
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.96' (uid=1000 pid=3159 comm="/home/marcel/.dropbox-dist/dropbox-lnx.x86_64-112.")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// systemd[1879]: tracker-extract.service: Succeeded.
// systemd[1]: NetworkManager-dispatcher.service: Succeeded.
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// systemd[1]: Started Daemon for generating UUIDs.
// systemd[1]: Stopping User Manager for UID 114...
// systemd[1879]: Stopped target Main User Target.
// gvfsd[1954]: A connection to the bus can't be made
// systemd[1879]: Stopping D-Bus User Message Bus...
// systemd[1879]: Stopping Virtual filesystem service - Apple File Conduit monitor...
// systemd[1879]: Stopping Virtual filesystem service...
// systemd[1879]: Stopping Virtual filesystem service - GNOME Online Accounts monitor...
// systemd[1879]: Stopping Virtual filesystem service - digital camera monitor...
// systemd[1879]: Stopping Virtual filesystem service - Media Transfer Protocol monitor...
// systemd[1879]: Stopping Virtual filesystem service - disk device monitor...
// systemd[1879]: Stopping Tracker file system data miner...
// systemd[1879]: Stopping Tracker metadata database store and lookup manager...
// systemd[1879]: gvfs-goa-volume-monitor.service: Succeeded.
// systemd[1879]: Stopped Virtual filesystem service - GNOME Online Accounts monitor.
// tracker-miner-fs[1933]: Received signal:15->'Terminated'
// tracker-miner-f[1933]: Error while sending AddMatch() message: The connection is closed
// tracker-miner-f[1933]: message repeated 2 times: [ Error while sending AddMatch() message: The connection is closed]
// systemd[1879]: dbus.service: Succeeded.
// systemd[1879]: Stopped D-Bus User Message Bus.
// systemd[1879]: gvfs-gphoto2-volume-monitor.service: Succeeded.
// systemd[1879]: Stopped Virtual filesystem service - digital camera monitor.
// systemd[1879]: gvfs-mtp-volume-monitor.service: Succeeded.
// systemd[1879]: Stopped Virtual filesystem service - Media Transfer Protocol monitor.
// tracker-miner-fs[1933]: OK
// tracker-store[2133]: Received signal:15->'Terminated'
// tracker-store[2133]: OK
// systemd[1]: run-user-114-gvfs.mount: Succeeded.
// systemd[1879]: run-user-114-gvfs.mount: Succeeded.
// systemd[2441]: run-user-114-gvfs.mount: Succeeded.
// systemd[1879]: gvfs-daemon.service: Succeeded.
// systemd[1879]: Stopped Virtual filesystem service.
// systemd[1879]: tracker-store.service: Succeeded.
// systemd[1879]: Stopped Tracker metadata database store and lookup manager.
// systemd[1879]: gvfs-udisks2-volume-monitor.service: Succeeded.
// systemd[1879]: Stopped Virtual filesystem service - disk device monitor.
// systemd[1879]: gvfs-afc-volume-monitor.service: Succeeded.
// systemd[1879]: Stopped Virtual filesystem service - Apple File Conduit monitor.
// systemd[1879]: tracker-miner-fs.service: Succeeded.
// systemd[1879]: Stopped Tracker file system data miner.
// systemd[1879]: Stopped target Basic System.
// systemd[1879]: Stopped target Paths.
// systemd[1879]: ubuntu-report.path: Succeeded.
// systemd[1879]: Stopped Pending report trigger for Ubuntu Report.
// systemd[1879]: Stopped target Sockets.
// systemd[1879]: Stopped target Timers.
// systemd[1879]: dbus.socket: Succeeded.
// systemd[1879]: Closed D-Bus User Message Bus Socket.
// systemd[1879]: dirmngr.socket: Succeeded.
// systemd[1879]: Closed GnuPG network certificate management daemon.
// systemd[1879]: gpg-agent-browser.socket: Succeeded.
// systemd[1879]: Closed GnuPG cryptographic agent and passphrase cache (access for web browsers).
// systemd[1879]: gpg-agent-extra.socket: Succeeded.
// systemd[1879]: Closed GnuPG cryptographic agent and passphrase cache (restricted).
// systemd[1879]: gpg-agent-ssh.socket: Succeeded.
// systemd[1879]: Closed GnuPG cryptographic agent (ssh-agent emulation).
// systemd[1879]: gpg-agent.socket: Succeeded.
// systemd[1879]: Closed GnuPG cryptographic agent and passphrase cache.
// systemd[1879]: pk-debconf-helper.socket: Succeeded.
// systemd[1879]: Closed debconf communication socket.
// systemd[1879]: pulseaudio.socket: Succeeded.
// systemd[1879]: Closed Sound System.
// systemd[1879]: snapd.session-agent.socket: Succeeded.
// systemd[1879]: Closed REST API socket for snapd user session agent.
// systemd[1879]: Reached target Shutdown.
// systemd[1879]: systemd-exit.service: Succeeded.
// systemd[1879]: Finished Exit the Session.
// systemd[1879]: Reached target Exit the Session.
// systemd[1]: user@114.service: Succeeded.
// systemd[1]: Stopped User Manager for UID 114.
// systemd[1]: Stopping User Runtime Directory /run/user/114...
// systemd[2441]: run-user-114.mount: Succeeded.
// systemd[1]: run-user-114.mount: Succeeded.
// systemd[1]: user-runtime-dir@114.service: Succeeded.
// systemd[1]: Stopped User Runtime Directory /run/user/114.
// systemd[1]: Removed slice User Slice of UID 114.
// systemd[2441]: tracker-extract.service: Succeeded.
// systemd[1]: systemd-fsckd.service: Succeeded.
// systemd-timesyncd[949]: Initial synchronization to time server 91.189.89.199:123 (ntp.ubuntu.com).
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=1 signal=-55 noise=9999 txrate=400000
// systemd[1]: systemd-hostnamed.service: Succeeded.
// tracker-store[2600]: OK
// systemd[2441]: tracker-store.service: Succeeded.
// systemd[1]: systemd-timedated.service: Succeeded.
// org.mate.panel.applet.BriskMenuFactory[3115]:  *** initializing (w/o specified bootloader type)…
// org.mate.panel.applet.BriskMenuFactory[3115]:    * reading partition info…
// org.mate.panel.applet.BriskMenuFactory[3115]:    * Loading Framebuffer resolutions (background process)
// org.mate.panel.applet.BriskMenuFactory[3115]:    * Finding out if this is a live CD
// org.mate.panel.applet.BriskMenuFactory[3115]:  *** initializing (w/ specified bootloader type)…
// org.mate.panel.applet.BriskMenuFactory[3115]:    * Checking if the config directory is clean
// org.mate.panel.applet.BriskMenuFactory[3115]:  *** loading configuration
// org.mate.panel.applet.BriskMenuFactory[3115]:  *** loading - preserveConfig: no
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.hostname1' unit='dbus-org.freedesktop.hostname1.service' requested by ':1.74' (uid=0 pid=3115 comm="/usr/bin/grub-customizer no-fork ")
// org.mate.panel.applet.BriskMenuFactory[3115]:    * unsetting saved config
// org.mate.panel.applet.BriskMenuFactory[3115]:  *** loading settings
// org.mate.panel.applet.BriskMenuFactory[3115]:  *** loading grub list
// org.mate.panel.applet.BriskMenuFactory[3115]:    * loading scripts…
// org.mate.panel.applet.BriskMenuFactory[3115]:    * loading proxies…
// org.mate.panel.applet.BriskMenuFactory[3115]:    * cleaning up proxy configuration…
// org.mate.panel.applet.BriskMenuFactory[3115]:    * creating proxifiedScript links & chmodding other files…
// org.mate.panel.applet.BriskMenuFactory[3115]:    * running grub-mkconfig
// systemd[1]: Starting Hostname Service...
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.hostname1'
// systemd[1]: Started Hostname Service.
// kernel: [   43.237176] SGI XFS with ACLs, security attributes, realtime, quota, no debug enabled
// kernel: [   43.242691] JFS: nTxBlock = 8192, nTxLock = 65536
// kernel: [   43.252835] ntfs: driver 2.1.32 [Flags: R/O MODULE].
// kernel: [   43.265234] QNX4 filesystem 0.2.3 registered.
// os-prober: debug: running /usr/lib/os-probes/mounted/05efi on mounted /dev/nvme0n1p1
// 05efi: debug: /dev/nvme0n1p1 is a FAT32 partition
// 05efi: debug: /dev/nvme0n1p1 partition scheme is gpt
// 05efi: debug: /dev/nvme0n1p1 partition type is c12a7328-f81f-11d2-ba4b-00a0c93ec93b
// 05efi: debug: running subtest /usr/lib/os-probes/mounted/efi/10elilo
// 05efi: debug: running subtest /usr/lib/os-probes/mounted/efi/20microsoft
// os-prober: debug: running /usr/lib/os-probes/mounted/10freedos on mounted /dev/nvme0n1p1
// 10freedos: debug: /dev/nvme0n1p1 is a FAT32 partition
// os-prober: debug: running /usr/lib/os-probes/mounted/10qnx on mounted /dev/nvme0n1p1
// 10qnx: debug: /dev/nvme0n1p1 is not a QNX4 partition: exiting
// os-prober: debug: running /usr/lib/os-probes/mounted/20macosx on mounted /dev/nvme0n1p1
// macosx-prober: debug: /dev/nvme0n1p1 is not an HFS+ partition: exiting
// os-prober: debug: running /usr/lib/os-probes/mounted/20microsoft on mounted /dev/nvme0n1p1
// 20microsoft: debug: Skipping legacy bootloaders on UEFI system
// os-prober: debug: running /usr/lib/os-probes/mounted/30utility on mounted /dev/nvme0n1p1
// 30utility: debug: /dev/nvme0n1p1 is a FAT32 partition
// os-prober: debug: running /usr/lib/os-probes/mounted/40lsb on mounted /dev/nvme0n1p1
// os-prober: debug: running /usr/lib/os-probes/mounted/70hurd on mounted /dev/nvme0n1p1
// os-prober: debug: running /usr/lib/os-probes/mounted/80minix on mounted /dev/nvme0n1p1
// os-prober: debug: running /usr/lib/os-probes/mounted/83haiku on mounted /dev/nvme0n1p1
// 83haiku: debug: /dev/nvme0n1p1 is not a BeFS partition: exiting
// os-prober: debug: running /usr/lib/os-probes/mounted/90linux-distro on mounted /dev/nvme0n1p1
// os-prober: debug: running /usr/lib/os-probes/mounted/90solaris on mounted /dev/nvme0n1p1
// org.mate.panel.applet.BriskMenuFactory[3115]:    * restoring grub configuration
// org.mate.panel.applet.BriskMenuFactory[3115]:    * removing invalid proxies from list
// org.mate.panel.applet.BriskMenuFactory[3115]:    * loading completed
// org.mate.panel.applet.BriskMenuFactory[3115]:  *** grub list completely loaded
// org.mate.panel.applet.BriskMenuFactory[3115]:  *** loading saved grub list
// systemd[1]: systemd-hostnamed.service: Succeeded.
// org.mate.panel.applet.BriskMenuFactory[3115]:  *** writing settings file
// org.mate.panel.applet.BriskMenuFactory[3115]:  *** writing grub list configuration
// os-prober: debug: running /usr/lib/os-probes/mounted/05efi on mounted /dev/nvme0n1p1
// 05efi: debug: /dev/nvme0n1p1 is a FAT32 partition
// 05efi: debug: /dev/nvme0n1p1 partition scheme is gpt
// 05efi: debug: /dev/nvme0n1p1 partition type is c12a7328-f81f-11d2-ba4b-00a0c93ec93b
// 05efi: debug: running subtest /usr/lib/os-probes/mounted/efi/10elilo
// 05efi: debug: running subtest /usr/lib/os-probes/mounted/efi/20microsoft
// os-prober: debug: running /usr/lib/os-probes/mounted/10freedos on mounted /dev/nvme0n1p1
// 10freedos: debug: /dev/nvme0n1p1 is a FAT32 partition
// os-prober: debug: running /usr/lib/os-probes/mounted/10qnx on mounted /dev/nvme0n1p1
// 10qnx: debug: /dev/nvme0n1p1 is not a QNX4 partition: exiting
// os-prober: debug: running /usr/lib/os-probes/mounted/20macosx on mounted /dev/nvme0n1p1
// macosx-prober: debug: /dev/nvme0n1p1 is not an HFS+ partition: exiting
// os-prober: debug: running /usr/lib/os-probes/mounted/20microsoft on mounted /dev/nvme0n1p1
// 20microsoft: debug: Skipping legacy bootloaders on UEFI system
// os-prober: debug: running /usr/lib/os-probes/mounted/30utility on mounted /dev/nvme0n1p1
// 30utility: debug: /dev/nvme0n1p1 is a FAT32 partition
// os-prober: debug: running /usr/lib/os-probes/mounted/40lsb on mounted /dev/nvme0n1p1
// os-prober: debug: running /usr/lib/os-probes/mounted/70hurd on mounted /dev/nvme0n1p1
// os-prober: debug: running /usr/lib/os-probes/mounted/80minix on mounted /dev/nvme0n1p1
// os-prober: debug: running /usr/lib/os-probes/mounted/83haiku on mounted /dev/nvme0n1p1
// 83haiku: debug: /dev/nvme0n1p1 is not a BeFS partition: exiting
// os-prober: debug: running /usr/lib/os-probes/mounted/90linux-distro on mounted /dev/nvme0n1p1
// os-prober: debug: running /usr/lib/os-probes/mounted/90solaris on mounted /dev/nvme0n1p1
// org.mate.panel.applet.BriskMenuFactory[5674]: localuser:root being removed from access control list
// kernel: [  123.315927] dptf_power INT3407:00: Unsupported event [0x82]
// upowerd[2055]: energy 44.450000 bigger than full 43.640000
// rtkit-daemon[1949]: Supervising 3 threads of 1 processes of 1 users.
// rtkit-daemon[1949]: message repeated 5 times: [ Supervising 3 threads of 1 processes of 1 users.]
// rtkit-daemon[1949]: Successfully made thread 6043 of process 5947 owned by '1000' RT at priority 10.
// rtkit-daemon[1949]: Supervising 4 threads of 2 processes of 1 users.
// rtkit-daemon[1949]: message repeated 10 times: [ Supervising 4 threads of 2 processes of 1 users.]
// rtkit-daemon[1949]: Supervising 4 threads of 2 processes of 1 users.
// rtkit-daemon[1949]: message repeated 2 times: [ Supervising 4 threads of 2 processes of 1 users.]
// rtkit-daemon[1949]: Successfully made thread 7248 of process 7174 owned by '1000' high priority at nice level -10.
// rtkit-daemon[1949]: Supervising 5 threads of 3 processes of 1 users.
// rtkit-daemon[1949]: Successfully made thread 7249 of process 7174 owned by '1000' high priority at nice level -10.
// rtkit-daemon[1949]: Supervising 6 threads of 3 processes of 1 users.
// kernel: [  301.441200] x86/split lock detection: #AC: CHTTPClientThre/7258 took a split_lock trap at address: 0xebe9f373
// rtkit-daemon[1949]: message repeated 3 times: [ Supervising 6 threads of 3 processes of 1 users.]
// rtkit-daemon[1949]: Successfully made thread 7304 of process 7304 owned by '1000' high priority at nice level -10.
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// kernel: [  304.151222] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// rtkit-daemon[1949]: message repeated 3 times: [ Supervising 7 threads of 4 processes of 1 users.]
// rtkit-daemon[1949]: Successfully made thread 7358 of process 7358 owned by '1000' high priority at nice level -10.
// rtkit-daemon[1949]: Supervising 8 threads of 5 processes of 1 users.
// kernel: [  304.765667] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// kernel: [  304.980256] x86/split lock detection: #AC: CHTTPClientThre/7258 took a split_lock trap at address: 0xebe9f373
// kernel: [  305.014971] x86/split lock detection: #AC: CHTTPClientThre/7258 took a split_lock trap at address: 0xebe9f373
// kernel: [  305.017533] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// kernel: [  305.858430] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// anacron[1080]: Job `cron.daily' started
// anacron[7416]: Updated timestamp for job `cron.daily' to 2021-01-16
// cracklib: no dictionary update necessary.
// anacron[1080]: Job `cron.daily' terminated
// anacron[1080]: Normal exit (1 job run)
// systemd[1]: anacron.service: Succeeded.
// kernel: [  307.289995] x86/split lock detection: #AC: CHTTPClientThre/7258 took a split_lock trap at address: 0xebe9f373
// kernel: [  318.643721] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// CRON[10560]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 5 times: [ Supervising 7 threads of 4 processes of 1 users.]
// systemd[1]: Starting Daily apt upgrade and clean activities...
// systemd[1]: apt-daily-upgrade.service: Succeeded.
// systemd[1]: Finished Daily apt upgrade and clean activities.
// kernel: [  624.515901] dptf_power INT3407:00: Unsupported event [0x82]
// upowerd[2055]: energy 44.900000 bigger than full 44.450000
// pulseaudio[2448]: ALSA woke us up to write new data to the device, but there was actually nothing to write.
// pulseaudio[2448]: Most likely this is a bug in the ALSA driver 'snd_hda_intel'. Please report this issue to the ALSA developers.
// pulseaudio[2448]: We were woken up with POLLOUT set -- however a subsequent snd_pcm_avail() returned 0 or another value < min_avail.
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 3 times: [ Supervising 7 threads of 4 processes of 1 users.]
// systemd[1]: Starting Cleanup of Temporary Directories...
// systemd[1]: systemd-tmpfiles-clean.service: Succeeded.
// systemd[1]: Finished Cleanup of Temporary Directories.
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 5 times: [ Supervising 7 threads of 4 processes of 1 users.]
// rtkit-daemon[1949]: Successfully made thread 12858 of process 11608 owned by '1000' RT at priority 10.
// rtkit-daemon[1949]: Supervising 8 threads of 5 processes of 1 users.
// CRON[13269]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating via systemd: service name='org.freedesktop.Tracker1' unit='tracker-store.service' requested by ':1.1' (uid=1000 pid=2450 comm="/usr/libexec/tracker-miner-fs ")
// systemd[2441]: Starting Tracker metadata database store and lookup manager...
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Tracker1'
// systemd[2441]: Started Tracker metadata database store and lookup manager.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating via systemd: service name='org.freedesktop.Tracker1.Miner.Extract' unit='tracker-extract.service' requested by ':1.1' (uid=1000 pid=2450 comm="/usr/libexec/tracker-miner-fs ")
// systemd[2441]: Starting Tracker metadata extractor...
// tracker-extract[14585]: Set scheduler policy to SCHED_IDLE
// tracker-extract[14585]: Setting priority nice level to 19
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Tracker1.Miner.Extract'
// systemd[2441]: Started Tracker metadata extractor.
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.hostname1' unit='dbus-org.freedesktop.hostname1.service' requested by ':1.115' (uid=1000 pid=14662 comm="nautilus --new-window ")
// systemd[1]: Starting Hostname Service...
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.hostname1'
// systemd[1]: Started Hostname Service.
// systemd[2441]: tracker-extract.service: Succeeded.
// tracker-store[14576]: OK
// systemd[2441]: tracker-store.service: Succeeded.
// systemd[1]: systemd-hostnamed.service: Succeeded.
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// kernel: [ 1619.190287] dptf_power INT3407:00: Unsupported event [0x82]
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// upowerd[2055]: energy 45.110000 bigger than full 44.900000
// CRON[15810]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// CRON[16163]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)
// CRON[17832]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.hostname1' unit='dbus-org.freedesktop.hostname1.service' requested by ':1.118' (uid=1000 pid=18152 comm="eom /tmp/mozilla_marcel0/x-circle.svg ")
// systemd[1]: Starting Hostname Service...
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.hostname1'
// systemd[1]: Started Hostname Service.
// systemd[1]: systemd-hostnamed.service: Succeeded.
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// kernel: [ 2560.058425] dptf_power INT3407:00: Unsupported event [0x82]
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// upowerd[2055]: energy 45.170000 bigger than full 45.110000
// wpa_supplicant[1127]: wlp0s20f3: WPA: Group rekeying completed with 0e:ec:da:15:98:4a [GTK=CCMP]
// CRON[19049]: (root) CMD ([ -x /etc/init.d/anacron ] && if [ ! -d /run/systemd/system ]; then /usr/sbin/invoke-rc.d anacron start >/dev/null; fi)
// systemd[1]: Started Run anacron jobs.
// anacron[19339]: Anacron 2.3 started on 2021-01-16
// anacron[19339]: Normal exit (0 jobs run)
// systemd[1]: anacron.service: Succeeded.
// CRON[20069]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// CRON[22169]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// CRON[23834]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// CRON[25720]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// CRON[27566]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// CRON[27805]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)
// CRON[29683]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// wpa_supplicant[1127]: wlp0s20f3: WPA: Group rekeying completed with 0e:ec:da:15:98:4a [GTK=CCMP]
// CRON[30527]: (root) CMD ([ -x /etc/init.d/anacron ] && if [ ! -d /run/systemd/system ]; then /usr/sbin/invoke-rc.d anacron start >/dev/null; fi)
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// systemd[1]: Started Run anacron jobs.
// anacron[31383]: Anacron 2.3 started on 2021-01-16
// anacron[31383]: Normal exit (0 jobs run)
// systemd[1]: anacron.service: Succeeded.
// CRON[31799]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// CRON[34311]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// systemd[1]: Starting Message of the Day...
// systemd[1]: motd-news.service: Succeeded.
// systemd[1]: Finished Message of the Day.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// CRON[36563]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// CRON[39172]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// CRON[42023]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// CRON[42551]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// CRON[44747]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.84' (uid=1000 pid=2736 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// wpa_supplicant[1127]: wlp0s20f3: WPA: Group rekeying completed with 0e:ec:da:15:98:4a [GTK=CCMP]
// CRON[46108]: (root) CMD ([ -x /etc/init.d/anacron ] && if [ ! -d /run/systemd/system ]; then /usr/sbin/invoke-rc.d anacron start >/dev/null; fi)
// systemd[1]: Started Run anacron jobs.
// anacron[46441]: Anacron 2.3 started on 2021-01-16
// anacron[46441]: Normal exit (0 jobs run)
// systemd[1]: anacron.service: Succeeded.
// CRON[47275]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// CRON[49896]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// kernel: [11106.564318] x86/split lock detection: #AC: CHTTPClientThre/52207 took a split_lock trap at address: 0xebe9f373
// kernel: [11106.687845] x86/split lock detection: #AC: CHTTPClientThre/7258 took a split_lock trap at address: 0xebe9f373
// kernel: [11106.899186] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// kernel: [11106.948343] x86/split lock detection: #AC: CHTTPClientThre/7258 took a split_lock trap at address: 0xebe9f373
// rtkit-daemon[1949]: message repeated 5 times: [ Supervising 7 threads of 4 processes of 1 users.]
// CRON[52532]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// CRON[55120]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// CRON[57780]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// CRON[58326]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// CRON[60458]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// wpa_supplicant[1127]: wlp0s20f3: WPA: Group rekeying completed with 0e:ec:da:15:98:4a [GTK=CCMP]
// CRON[61861]: (root) CMD ([ -x /etc/init.d/anacron ] && if [ ! -d /run/systemd/system ]; then /usr/sbin/invoke-rc.d anacron start >/dev/null; fi)
// systemd[1]: Started Run anacron jobs.
// anacron[62335]: Anacron 2.3 started on 2021-01-16
// anacron[62335]: Normal exit (0 jobs run)
// systemd[1]: anacron.service: Succeeded.
// CRON[62343]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 3 times: [ Supervising 7 threads of 4 processes of 1 users.]
// CRON[64758]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// kernel: [14707.513543] x86/split lock detection: #AC: CHTTPClientThre/52207 took a split_lock trap at address: 0xebe9f373
// kernel: [14707.662739] x86/split lock detection: #AC: CHTTPClientThre/7258 took a split_lock trap at address: 0xebe9f373
// kernel: [14707.697087] x86/split lock detection: #AC: CHTTPClientThre/7258 took a split_lock trap at address: 0xebe9f373
// kernel: [14707.712722] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// kernel: [14707.811429] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// CRON[67706]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// CRON[70400]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 3 times: [ Supervising 7 threads of 4 processes of 1 users.]
// rtkit-daemon[1949]: Successfully made thread 72426 of process 51812 owned by '1000' RT at priority 10.
// rtkit-daemon[1949]: Supervising 8 threads of 5 processes of 1 users.
// CRON[73192]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 8 threads of 5 processes of 1 users.
// rtkit-daemon[1949]: Supervising 8 threads of 5 processes of 1 users.
// CRON[74523]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)
// CRON[75977]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// wpa_supplicant[1127]: wlp0s20f3: WPA: Group rekeying completed with 0e:ec:da:15:98:4a [GTK=CCMP]
// CRON[77462]: (root) CMD ([ -x /etc/init.d/anacron ] && if [ ! -d /run/systemd/system ]; then /usr/sbin/invoke-rc.d anacron start >/dev/null; fi)
// systemd[1]: Started Run anacron jobs.
// anacron[77640]: Anacron 2.3 started on 2021-01-16
// anacron[77640]: Normal exit (0 jobs run)
// systemd[1]: anacron.service: Succeeded.
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 3 times: [ Supervising 7 threads of 4 processes of 1 users.]
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.69' (uid=1000 pid=2912 comm="/usr/lib/x86_64-linux-gnu/indicator-sound/indicato")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// CRON[79091]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// CRON[82041]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// kernel: [18308.641901] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// kernel: [18308.665247] x86/split lock detection: #AC: CHTTPClientThre/52207 took a split_lock trap at address: 0xebe9f373
// kernel: [18308.665688] x86/split lock detection: #AC: CHTTPClientThre/52207 took a split_lock trap at address: 0xebe9f373
// kernel: [18308.690802] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// kernel: [18308.742169] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// kernel: [18308.840226] x86/split lock detection: #AC: CHTTPClientThre/7258 took a split_lock trap at address: 0xebe9f373
// kernel: [18308.939289] x86/split lock detection: #AC: CHTTPClientThre/7258 took a split_lock trap at address: 0xebe9f373
// kernel: [18308.989318] x86/split lock detection: #AC: CHTTPClientThre/52207 took a split_lock trap at address: 0xebe9f373
// rtkit-daemon[1949]: message repeated 5 times: [ Supervising 7 threads of 4 processes of 1 users.]
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.1806' (uid=1000 pid=68165 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// CRON[83579]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-58 noise=9999 txrate=360000
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=1 signal=-58 noise=9999 txrate=360000
// wpa_supplicant[1127]: wlp0s20f3: SME: Trying to authenticate with e2:63:da:aa:ca:9f (SSID='KWENCH' freq=5220 MHz)
// kernel: [18749.266290] wlp0s20f3: disconnect from AP 0e:ec:da:15:98:4a for new auth to e2:63:da:aa:ca:9f
// kernel: [18749.268674] iwlwifi 0000:00:14.3: expected hw-decrypted unicast frame for station
// kernel: [18749.271087] wlp0s20f3: authenticate with e2:63:da:aa:ca:9f
// kernel: [18749.274026] wlp0s20f3: send auth to e2:63:da:aa:ca:9f (try 1/3)
// NetworkManager[1088]: <info>  [1610830777.7797] device (wlp0s20f3): supplicant interface state: completed -> authenticating
// NetworkManager[1088]: <info>  [1610830777.7800] device (p2p-dev-wlp0s20f3): supplicant management interface state: completed -> authenticating
// geoclue[2960]: Failed to query location: Error resolving “location.services.mozilla.com”: Temporary failure in name resolution
// wpa_supplicant[1127]: wlp0s20f3: Trying to associate with e2:63:da:aa:ca:9f (SSID='KWENCH' freq=5220 MHz)
// kernel: [18749.304517] wlp0s20f3: authenticated
// NetworkManager[1088]: <info>  [1610830777.8110] device (wlp0s20f3): supplicant interface state: authenticating -> associating
// NetworkManager[1088]: <info>  [1610830777.8111] device (p2p-dev-wlp0s20f3): supplicant management interface state: authenticating -> associating
// kernel: [18749.310775] wlp0s20f3: associate with e2:63:da:aa:ca:9f (try 1/3)
// kernel: [18749.313578] wlp0s20f3: RX ReassocResp from e2:63:da:aa:ca:9f (capab=0x11 status=0 aid=2)
// wpa_supplicant[1127]: wlp0s20f3: Associated with e2:63:da:aa:ca:9f
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
// kernel: [18749.316548] wlp0s20f3: associated
// wpa_supplicant[1127]: wlp0s20f3: WPA: Key negotiation completed with e2:63:da:aa:ca:9f [PTK=CCMP GTK=CCMP]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-CONNECTED - Connection to e2:63:da:aa:ca:9f completed [id=0 id_str=]
// NetworkManager[1088]: <info>  [1610830777.8385] device (wlp0s20f3): supplicant interface state: associating -> completed
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-74 noise=9999 txrate=26000
// NetworkManager[1088]: <info>  [1610830777.8398] device (p2p-dev-wlp0s20f3): supplicant management interface state: associating -> completed
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=1 signal=-67 noise=9999 txrate=26000
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-69 noise=9999 txrate=26000
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-81 noise=9999 txrate=26000
// kernel: [18792.395006] usb 3-2: new full-speed USB device number 3 using xhci_hcd
// kernel: [18792.553627] usb 3-2: New USB device found, idVendor=0909, idProduct=001b, bcdDevice= 1.00
// kernel: [18792.553631] usb 3-2: New USB device strings: Mfr=1, Product=2, SerialNumber=0
// kernel: [18792.553634] usb 3-2: Product: ATR USB microphone
// kernel: [18792.553635] usb 3-2: Manufacturer: Audio-Technica
// mtp-probe: checking bus 3, device 3: "/sys/devices/pci0000:00/0000:00:14.0/usb3/3-2"
// mtp-probe: bus: 3, device: 3 was not an MTP device
// kernel: [18793.151334] input: Audio-Technica ATR USB microphone Consumer Control as /devices/pci0000:00/0000:00:14.0/usb3/3-2/3-2:1.3/0003:0909:001B.0004/input/input28
// kernel: [18793.211245] hid-generic 0003:0909:001B.0004: input,hiddev0,hidraw3: USB HID v1.00 Device [Audio-Technica ATR USB microphone] on usb-0000:00:14.0-2/input3
// kernel: [18793.211287] usbcore: registered new interface driver usbhid
// kernel: [18793.211288] usbhid: USB HID core driver
// kernel: [18793.218921] usbcore: registered new interface driver snd-usb-audio
// mtp-probe: checking bus 3, device 3: "/sys/devices/pci0000:00/0000:00:14.0/usb3/3-2"
// mtp-probe: bus: 3, device: 3 was not an MTP device
// systemd[2441]: Reached target Sound Card.
// pulseaudio[2448]: Disabling timer-based scheduling because running inside a VM.
// rtkit-daemon[1949]: Supervising 7 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Successfully made thread 84421 of process 2448 owned by '1000' RT at priority 5.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 6 times: [ Supervising 8 threads of 4 processes of 1 users.]
// rtkit-daemon[1949]: Successfully made thread 84478 of process 83475 owned by '1000' RT at priority 10.
// rtkit-daemon[1949]: Supervising 9 threads of 5 processes of 1 users.
// rtkit-daemon[1949]: Supervising 9 threads of 5 processes of 1 users.
// rtkit-daemon[1949]: message repeated 3 times: [ Supervising 9 threads of 5 processes of 1 users.]
// rtkit-daemon[1949]: Successfully made thread 85031 of process 5947 owned by '1000' RT at priority 10.
// rtkit-daemon[1949]: Supervising 10 threads of 5 processes of 1 users.
// pulseaudio[2448]: ALSA woke us up to read new data from the device, but there was actually nothing to read.
// pulseaudio[2448]: Most likely this is a bug in the ALSA driver 'snd_usb_audio'. Please report this issue to the ALSA developers.
// pulseaudio[2448]: We were woken up with POLLIN set -- however a subsequent snd_pcm_avail() returned 0 or another value < min_avail.
// wpa_supplicant[1127]: wlp0s20f3: SME: Trying to authenticate with 0e:ec:da:15:98:4a (SSID='KWENCH' freq=5785 MHz)
// kernel: [19049.295046] wlp0s20f3: disconnect from AP e2:63:da:aa:ca:9f for new auth to 0e:ec:da:15:98:4a
// kernel: [19049.299499] wlp0s20f3: authenticate with 0e:ec:da:15:98:4a
// geoclue[2960]: Failed to query location: Error resolving “location.services.mozilla.com”: Temporary failure in name resolution
// NetworkManager[1088]: <info>  [1610831077.8018] device (wlp0s20f3): supplicant interface state: completed -> authenticating
// NetworkManager[1088]: <info>  [1610831077.8018] device (p2p-dev-wlp0s20f3): supplicant management interface state: completed -> authenticating
// kernel: [19049.301538] wlp0s20f3: send auth to 0e:ec:da:15:98:4a (try 1/3)
// wpa_supplicant[1127]: wlp0s20f3: Trying to associate with 0e:ec:da:15:98:4a (SSID='KWENCH' freq=5785 MHz)
// NetworkManager[1088]: <info>  [1610831077.8300] device (wlp0s20f3): supplicant interface state: authenticating -> associating
// NetworkManager[1088]: <info>  [1610831077.8300] device (p2p-dev-wlp0s20f3): supplicant management interface state: authenticating -> associating
// kernel: [19049.330014] wlp0s20f3: authenticated
// kernel: [19049.332569] wlp0s20f3: associate with 0e:ec:da:15:98:4a (try 1/3)
// kernel: [19049.337718] wlp0s20f3: RX ReassocResp from 0e:ec:da:15:98:4a (capab=0x411 status=0 aid=1)
// kernel: [19049.340209] wlp0s20f3: associated
// wpa_supplicant[1127]: wlp0s20f3: Associated with 0e:ec:da:15:98:4a
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
// wpa_supplicant[1127]: wlp0s20f3: WPA: Key negotiation completed with 0e:ec:da:15:98:4a [PTK=CCMP GTK=CCMP]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-CONNECTED - Connection to 0e:ec:da:15:98:4a completed [id=0 id_str=]
// NetworkManager[1088]: <info>  [1610831077.8515] device (wlp0s20f3): supplicant interface state: associating -> completed
// NetworkManager[1088]: <info>  [1610831077.8522] device (p2p-dev-wlp0s20f3): supplicant management interface state: associating -> completed
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=1 signal=-61 noise=9999 txrate=26000
// CRON[85624]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// wpa_supplicant[1127]: wlp0s20f3: SME: Trying to authenticate with e2:63:da:aa:ca:9f (SSID='KWENCH' freq=5220 MHz)
// kernel: [19209.059634] wlp0s20f3: disconnect from AP 0e:ec:da:15:98:4a for new auth to e2:63:da:aa:ca:9f
// kernel: [19209.064779] wlp0s20f3: authenticate with e2:63:da:aa:ca:9f
// kernel: [19209.068468] wlp0s20f3: send auth to e2:63:da:aa:ca:9f (try 1/3)
// NetworkManager[1088]: <info>  [1610831237.5678] device (wlp0s20f3): supplicant interface state: completed -> authenticating
// NetworkManager[1088]: <info>  [1610831237.5678] device (p2p-dev-wlp0s20f3): supplicant management interface state: completed -> authenticating
// geoclue[2960]: Failed to query location: Error resolving “location.services.mozilla.com”: Temporary failure in name resolution
// wpa_supplicant[1127]: wlp0s20f3: Trying to associate with e2:63:da:aa:ca:9f (SSID='KWENCH' freq=5220 MHz)
// kernel: [19209.097136] wlp0s20f3: authenticated
// NetworkManager[1088]: <info>  [1610831237.6001] device (wlp0s20f3): supplicant interface state: authenticating -> associating
// NetworkManager[1088]: <info>  [1610831237.6002] device (p2p-dev-wlp0s20f3): supplicant management interface state: authenticating -> associating
// kernel: [19209.105507] wlp0s20f3: associate with e2:63:da:aa:ca:9f (try 1/3)
// kernel: [19209.108581] wlp0s20f3: RX ReassocResp from e2:63:da:aa:ca:9f (capab=0x11 status=0 aid=2)
// kernel: [19209.112427] wlp0s20f3: associated
// wpa_supplicant[1127]: wlp0s20f3: Associated with e2:63:da:aa:ca:9f
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
// wpa_supplicant[1127]: wlp0s20f3: WPA: Key negotiation completed with e2:63:da:aa:ca:9f [PTK=CCMP GTK=CCMP]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-CONNECTED - Connection to e2:63:da:aa:ca:9f completed [id=0 id_str=]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-72 noise=9999 txrate=26000
// NetworkManager[1088]: <info>  [1610831237.6367] device (wlp0s20f3): supplicant interface state: associating -> completed
// NetworkManager[1088]: <info>  [1610831237.6377] device (p2p-dev-wlp0s20f3): supplicant management interface state: associating -> completed
// wpa_supplicant[1127]: wlp0s20f3: Reject scan trigger since one is already pending
// wpa_supplicant[1127]: message repeated 2 times: [ wlp0s20f3: Reject scan trigger since one is already pending]
// CRON[87495]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// wpa_supplicant[1127]: wlp0s20f3: SME: Trying to authenticate with 0e:ec:da:15:98:4a (SSID='KWENCH' freq=5785 MHz)
// kernel: [19681.755633] wlp0s20f3: disconnect from AP e2:63:da:aa:ca:9f for new auth to 0e:ec:da:15:98:4a
// kernel: [19681.760286] wlp0s20f3: authenticate with 0e:ec:da:15:98:4a
// kernel: [19681.763285] wlp0s20f3: send auth to 0e:ec:da:15:98:4a (try 1/3)
// NetworkManager[1088]: <info>  [1610831710.2606] device (wlp0s20f3): supplicant interface state: completed -> authenticating
// NetworkManager[1088]: <info>  [1610831710.2619] device (p2p-dev-wlp0s20f3): supplicant management interface state: completed -> authenticating
// wpa_supplicant[1127]: wlp0s20f3: Trying to associate with 0e:ec:da:15:98:4a (SSID='KWENCH' freq=5785 MHz)
// kernel: [19681.792327] wlp0s20f3: authenticated
// kernel: [19681.796185] wlp0s20f3: associate with 0e:ec:da:15:98:4a (try 1/3)
// NetworkManager[1088]: <info>  [1610831710.2957] device (wlp0s20f3): supplicant interface state: authenticating -> associating
// NetworkManager[1088]: <info>  [1610831710.2957] device (p2p-dev-wlp0s20f3): supplicant management interface state: authenticating -> associating
// kernel: [19681.800859] wlp0s20f3: RX ReassocResp from 0e:ec:da:15:98:4a (capab=0x411 status=0 aid=1)
// wpa_supplicant[1127]: wlp0s20f3: Associated with 0e:ec:da:15:98:4a
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
// kernel: [19681.805273] wlp0s20f3: associated
// wpa_supplicant[1127]: wlp0s20f3: WPA: Key negotiation completed with 0e:ec:da:15:98:4a [PTK=CCMP GTK=CCMP]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-CONNECTED - Connection to 0e:ec:da:15:98:4a completed [id=0 id_str=]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-63 noise=9999 txrate=26000
// NetworkManager[1088]: <info>  [1610831710.3175] device (wlp0s20f3): supplicant interface state: associating -> completed
// NetworkManager[1088]: <info>  [1610831710.3220] device (p2p-dev-wlp0s20f3): supplicant management interface state: associating -> completed
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=1 signal=-64 noise=9999 txrate=26000
// wpa_supplicant[1127]: wlp0s20f3: SME: Trying to authenticate with e2:63:da:aa:ca:9f (SSID='KWENCH' freq=5220 MHz)
// kernel: [19690.023905] wlp0s20f3: disconnect from AP 0e:ec:da:15:98:4a for new auth to e2:63:da:aa:ca:9f
// kernel: [19690.027580] wlp0s20f3: authenticate with e2:63:da:aa:ca:9f
// geoclue[2960]: Failed to query location: Error resolving “location.services.mozilla.com”: Temporary failure in name resolution
// kernel: [19690.030203] wlp0s20f3: send auth to e2:63:da:aa:ca:9f (try 1/3)
// NetworkManager[1088]: <info>  [1610831718.5273] device (wlp0s20f3): supplicant interface state: completed -> authenticating
// NetworkManager[1088]: <info>  [1610831718.5273] device (p2p-dev-wlp0s20f3): supplicant management interface state: completed -> authenticating
// wpa_supplicant[1127]: wlp0s20f3: Trying to associate with e2:63:da:aa:ca:9f (SSID='KWENCH' freq=5220 MHz)
// kernel: [19690.057288] wlp0s20f3: authenticated
// kernel: [19690.060181] wlp0s20f3: associate with e2:63:da:aa:ca:9f (try 1/3)
// NetworkManager[1088]: <info>  [1610831718.5565] device (wlp0s20f3): supplicant interface state: authenticating -> associating
// NetworkManager[1088]: <info>  [1610831718.5566] device (p2p-dev-wlp0s20f3): supplicant management interface state: authenticating -> associating
// kernel: [19690.062857] wlp0s20f3: RX ReassocResp from e2:63:da:aa:ca:9f (capab=0x11 status=0 aid=2)
// kernel: [19690.067097] wlp0s20f3: associated
// wpa_supplicant[1127]: wlp0s20f3: Associated with e2:63:da:aa:ca:9f
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
// wpa_supplicant[1127]: wlp0s20f3: WPA: Key negotiation completed with e2:63:da:aa:ca:9f [PTK=CCMP GTK=CCMP]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-CONNECTED - Connection to e2:63:da:aa:ca:9f completed [id=0 id_str=]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-73 noise=9999 txrate=26000
// NetworkManager[1088]: <info>  [1610831718.5911] device (wlp0s20f3): supplicant interface state: associating -> completed
// NetworkManager[1088]: <info>  [1610831718.5924] device (p2p-dev-wlp0s20f3): supplicant management interface state: associating -> completed
// CRON[88039]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)
// wpa_supplicant[1127]: wlp0s20f3: SME: Trying to authenticate with 0e:ec:da:15:98:4a (SSID='KWENCH' freq=5785 MHz)
// kernel: [19811.803506] wlp0s20f3: disconnect from AP e2:63:da:aa:ca:9f for new auth to 0e:ec:da:15:98:4a
// kernel: [19811.807771] wlp0s20f3: authenticate with 0e:ec:da:15:98:4a
// kernel: [19811.810594] wlp0s20f3: send auth to 0e:ec:da:15:98:4a (try 1/3)
// geoclue[2960]: Failed to query location: Error resolving “location.services.mozilla.com”: Temporary failure in name resolution
// NetworkManager[1088]: <info>  [1610831840.3083] device (wlp0s20f3): supplicant interface state: completed -> authenticating
// NetworkManager[1088]: <info>  [1610831840.3083] device (p2p-dev-wlp0s20f3): supplicant management interface state: completed -> authenticating
// kernel: [19811.840344] wlp0s20f3: authenticated
// wpa_supplicant[1127]: wlp0s20f3: Trying to associate with 0e:ec:da:15:98:4a (SSID='KWENCH' freq=5785 MHz)
// NetworkManager[1088]: <info>  [1610831840.3363] device (wlp0s20f3): supplicant interface state: authenticating -> associating
// NetworkManager[1088]: <info>  [1610831840.3364] device (p2p-dev-wlp0s20f3): supplicant management interface state: authenticating -> associating
// kernel: [19811.840869] wlp0s20f3: associate with 0e:ec:da:15:98:4a (try 1/3)
// kernel: [19811.845299] wlp0s20f3: RX ReassocResp from 0e:ec:da:15:98:4a (capab=0x411 status=0 aid=1)
// kernel: [19811.848864] wlp0s20f3: associated
// wpa_supplicant[1127]: wlp0s20f3: Associated with 0e:ec:da:15:98:4a
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
// wpa_supplicant[1127]: wlp0s20f3: WPA: Key negotiation completed with 0e:ec:da:15:98:4a [PTK=CCMP GTK=CCMP]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-CONNECTED - Connection to 0e:ec:da:15:98:4a completed [id=0 id_str=]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-64 noise=9999 txrate=26000
// NetworkManager[1088]: <info>  [1610831840.3582] device (wlp0s20f3): supplicant interface state: associating -> completed
// NetworkManager[1088]: <info>  [1610831840.3592] device (p2p-dev-wlp0s20f3): supplicant management interface state: associating -> completed
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=1 signal=-63 noise=9999 txrate=26000
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-65 noise=9999 txrate=26000
// wpa_supplicant[1127]: wlp0s20f3: SME: Trying to authenticate with e2:63:da:aa:ca:9f (SSID='KWENCH' freq=5220 MHz)
// kernel: [19839.140572] wlp0s20f3: disconnect from AP 0e:ec:da:15:98:4a for new auth to e2:63:da:aa:ca:9f
// kernel: [19839.146247] wlp0s20f3: authenticate with e2:63:da:aa:ca:9f
// geoclue[2960]: Failed to query location: Error resolving “location.services.mozilla.com”: Temporary failure in name resolution
// kernel: [19839.149769] wlp0s20f3: send auth to e2:63:da:aa:ca:9f (try 1/3)
// NetworkManager[1088]: <info>  [1610831867.6470] device (wlp0s20f3): supplicant interface state: completed -> authenticating
// NetworkManager[1088]: <info>  [1610831867.6471] device (p2p-dev-wlp0s20f3): supplicant management interface state: completed -> authenticating
// wpa_supplicant[1127]: wlp0s20f3: Trying to associate with e2:63:da:aa:ca:9f (SSID='KWENCH' freq=5220 MHz)
// NetworkManager[1088]: <info>  [1610831867.6749] device (wlp0s20f3): supplicant interface state: authenticating -> associating
// NetworkManager[1088]: <info>  [1610831867.6750] device (p2p-dev-wlp0s20f3): supplicant management interface state: authenticating -> associating
// kernel: [19839.178903] wlp0s20f3: authenticated
// kernel: [19839.181204] wlp0s20f3: associate with e2:63:da:aa:ca:9f (try 1/3)
// kernel: [19839.184231] wlp0s20f3: RX ReassocResp from e2:63:da:aa:ca:9f (capab=0x11 status=0 aid=2)
// kernel: [19839.188245] wlp0s20f3: associated
// wpa_supplicant[1127]: wlp0s20f3: Associated with e2:63:da:aa:ca:9f
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
// wpa_supplicant[1127]: wlp0s20f3: WPA: Key negotiation completed with e2:63:da:aa:ca:9f [PTK=CCMP GTK=CCMP]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-CONNECTED - Connection to e2:63:da:aa:ca:9f completed [id=0 id_str=]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=1 signal=-67 noise=9999 txrate=26000
// NetworkManager[1088]: <info>  [1610831867.7027] device (wlp0s20f3): supplicant interface state: associating -> completed
// NetworkManager[1088]: <info>  [1610831867.7037] device (p2p-dev-wlp0s20f3): supplicant management interface state: associating -> completed
// kernel: [19851.170458] usb 3-2: USB disconnect, device number 3
// acpid: input device has been disconnected, fd 21
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-75 noise=9999 txrate=26000
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-83 noise=9999 txrate=26000
// wpa_supplicant[1127]: wlp0s20f3: Reject scan trigger since one is already pending
// wpa_supplicant[1127]: wlp0s20f3: Reject scan trigger since one is already pending
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// wpa_supplicant[1127]: wlp0s20f3: Reject scan trigger since one is already pending
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// CRON[90440]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// wpa_supplicant[1127]: wlp0s20f3: Reject scan trigger since one is already pending
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// wpa_supplicant[1127]: wlp0s20f3: Reject scan trigger since one is already pending
// kernel: [20466.804398] usb 3-2: new full-speed USB device number 4 using xhci_hcd
// kernel: [20466.955544] usb 3-2: New USB device found, idVendor=0909, idProduct=001b, bcdDevice= 1.00
// kernel: [20466.955549] usb 3-2: New USB device strings: Mfr=1, Product=2, SerialNumber=0
// kernel: [20466.955552] usb 3-2: Product: ATR USB microphone
// kernel: [20466.955554] usb 3-2: Manufacturer: Audio-Technica
// kernel: [20466.969646] input: Audio-Technica ATR USB microphone Consumer Control as /devices/pci0000:00/0000:00:14.0/usb3/3-2/3-2:1.3/0003:0909:001B.0005/input/input30
// kernel: [20467.028879] hid-generic 0003:0909:001B.0005: input,hiddev0,hidraw3: USB HID v1.00 Device [Audio-Technica ATR USB microphone] on usb-0000:00:14.0-2/input3
// wpa_supplicant[1127]: wlp0s20f3: Reject scan trigger since one is already pending
// mtp-probe: checking bus 3, device 4: "/sys/devices/pci0000:00/0000:00:14.0/usb3/3-2"
// mtp-probe: bus: 3, device: 4 was not an MTP device
// mtp-probe: checking bus 3, device 4: "/sys/devices/pci0000:00/0000:00:14.0/usb3/3-2"
// mtp-probe: bus: 3, device: 4 was not an MTP device
// pulseaudio[2448]: Disabling timer-based scheduling because running inside a VM.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Successfully made thread 91498 of process 2448 owned by '1000' RT at priority 5.
// rtkit-daemon[1949]: Supervising 9 threads of 4 processes of 1 users.
// wpa_supplicant[1127]: wlp0s20f3: Reject scan trigger since one is already pending
// wpa_supplicant[1127]: wlp0s20f3: SME: Trying to authenticate with 0e:ec:da:15:98:4a (SSID='KWENCH' freq=5785 MHz)
// kernel: [20512.608518] wlp0s20f3: disconnect from AP e2:63:da:aa:ca:9f for new auth to 0e:ec:da:15:98:4a
// kernel: [20512.614417] wlp0s20f3: authenticate with 0e:ec:da:15:98:4a
// NetworkManager[1088]: <info>  [1610832541.1105] device (wlp0s20f3): supplicant interface state: completed -> authenticating
// NetworkManager[1088]: <info>  [1610832541.1105] device (p2p-dev-wlp0s20f3): supplicant management interface state: completed -> authenticating
// kernel: [20512.618422] wlp0s20f3: send auth to 0e:ec:da:15:98:4a (try 1/3)
// geoclue[2960]: Failed to query location: Error resolving “location.services.mozilla.com”: Temporary failure in name resolution
// wpa_supplicant[1127]: wlp0s20f3: Trying to associate with 0e:ec:da:15:98:4a (SSID='KWENCH' freq=5785 MHz)
// NetworkManager[1088]: <info>  [1610832541.1412] device (wlp0s20f3): supplicant interface state: authenticating -> associating
// NetworkManager[1088]: <info>  [1610832541.1413] device (p2p-dev-wlp0s20f3): supplicant management interface state: authenticating -> associating
// kernel: [20512.649751] wlp0s20f3: authenticated
// kernel: [20512.656577] wlp0s20f3: associate with 0e:ec:da:15:98:4a (try 1/3)
// kernel: [20512.660760] wlp0s20f3: RX ReassocResp from 0e:ec:da:15:98:4a (capab=0x411 status=0 aid=1)
// wpa_supplicant[1127]: wlp0s20f3: Associated with 0e:ec:da:15:98:4a
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
// kernel: [20512.665035] wlp0s20f3: associated
// wpa_supplicant[1127]: wlp0s20f3: WPA: Key negotiation completed with 0e:ec:da:15:98:4a [PTK=CCMP GTK=CCMP]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-CONNECTED - Connection to 0e:ec:da:15:98:4a completed [id=0 id_str=]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-57 noise=9999 txrate=0
// NetworkManager[1088]: <info>  [1610832541.1674] device (wlp0s20f3): supplicant interface state: associating -> completed
// NetworkManager[1088]: <info>  [1610832541.1681] device (p2p-dev-wlp0s20f3): supplicant management interface state: associating -> completed
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=1 signal=-57 noise=9999 txrate=26000
// wpa_supplicant[1127]: wlp0s20f3: WPA: Group rekeying completed with 0e:ec:da:15:98:4a [GTK=CCMP]
// CRON[91973]: (root) CMD ([ -x /etc/init.d/anacron ] && if [ ! -d /run/systemd/system ]; then /usr/sbin/invoke-rc.d anacron start >/dev/null; fi)
// rtkit-daemon[1949]: Supervising 9 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 9 threads of 4 processes of 1 users.
// systemd[1]: Started Run anacron jobs.
// anacron[92906]: Anacron 2.3 started on 2021-01-16
// anacron[92906]: Normal exit (0 jobs run)
// systemd[1]: anacron.service: Succeeded.
// CRON[93380]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 9 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 9 threads of 4 processes of 1 users.
// CRON[96380]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 9 threads of 4 processes of 1 users.
// kernel: [21909.538152] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// kernel: [21909.545607] x86/split lock detection: #AC: CHTTPClientThre/7258 took a split_lock trap at address: 0xebe9f373
// kernel: [21909.594423] x86/split lock detection: #AC: CHTTPClientThre/7258 took a split_lock trap at address: 0xebe9f373
// kernel: [21909.644316] x86/split lock detection: #AC: CHTTPClientThre/52207 took a split_lock trap at address: 0xebe9f373
// kernel: [21909.672141] x86/split lock detection: #AC: CHTTPClientThre/7258 took a split_lock trap at address: 0xebe9f373
// kernel: [21909.672243] x86/split lock detection: #AC: CHTTPClientThre/52207 took a split_lock trap at address: 0xebe9f373
// kernel: [21909.843828] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// kernel: [21909.874997] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// rtkit-daemon[1949]: message repeated 5 times: [ Supervising 9 threads of 4 processes of 1 users.]
// CRON[99059]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 9 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 3 times: [ Supervising 9 threads of 4 processes of 1 users.]
// CRON[101668]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 9 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 7 times: [ Supervising 9 threads of 4 processes of 1 users.]
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// rtkit-daemon[1949]: Supervising 9 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 5 times: [ Supervising 9 threads of 4 processes of 1 users.]
// CRON[104907]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// kernel: [23289.286279] usb 3-2: USB disconnect, device number 4
// acpid: input device has been disconnected, fd 21
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 3 times: [ Supervising 8 threads of 4 processes of 1 users.]
// CRON[105609]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 5 times: [ Supervising 8 threads of 4 processes of 1 users.]
// CRON[107885]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 5 times: [ Supervising 8 threads of 4 processes of 1 users.]
// rtkit-daemon[1949]: Successfully made thread 109120 of process 105550 owned by '1000' RT at priority 10.
// rtkit-daemon[1949]: Supervising 9 threads of 5 processes of 1 users.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 3 times: [ Supervising 8 threads of 4 processes of 1 users.]
// wpa_supplicant[1127]: wlp0s20f3: WPA: Group rekeying completed with 0e:ec:da:15:98:4a [GTK=CCMP]
// CRON[109422]: (root) CMD ([ -x /etc/init.d/anacron ] && if [ ! -d /run/systemd/system ]; then /usr/sbin/invoke-rc.d anacron start >/dev/null; fi)
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// systemd[1]: Started Run anacron jobs.
// anacron[110698]: Anacron 2.3 started on 2021-01-16
// anacron[110698]: Normal exit (0 jobs run)
// systemd[1]: anacron.service: Succeeded.
// CRON[110895]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 5 times: [ Supervising 8 threads of 4 processes of 1 users.]
// CRON[113877]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 7 times: [ Supervising 8 threads of 4 processes of 1 users.]
// rtkit-daemon[1949]: Successfully made thread 114503 of process 113925 owned by '1000' RT at priority 10.
// rtkit-daemon[1949]: Supervising 9 threads of 5 processes of 1 users.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// CRON[116721]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 5 times: [ Supervising 8 threads of 4 processes of 1 users.]
// CRON[120807]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 11 times: [ Supervising 8 threads of 4 processes of 1 users.]
// CRON[124152]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// CRON[124726]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)
// geoclue[2960]: Failed to query location: Forbidden
// kernel: [27303.760006] x86/split lock detection: #AC: CHTTPClientThre/52207 took a split_lock trap at address: 0xebe9f373
// geoclue[2960]: message repeated 21 times: [ Failed to query location: Forbidden]
// CRON[127321]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// geoclue[2960]: Failed to query location: Forbidden
// geoclue[2960]: message repeated 4 times: [ Failed to query location: Forbidden]
// snapd[1117]: storehelpers.go:551: cannot refresh: snap has no updates available: "chromium", "core", "core18", "core20", "gnome-3-28-1804", "gtk-common-themes", "heroku", "ngrok", "snapd"
// snapd[1117]: autorefresh.go:479: auto-refresh: all snaps are up-to-date
// geoclue[2960]: Failed to query location: Forbidden
// geoclue[2960]: message repeated 8 times: [ Failed to query location: Forbidden]
// wpa_supplicant[1127]: wlp0s20f3: WPA: Group rekeying completed with 0e:ec:da:15:98:4a [GTK=CCMP]
// CRON[128680]: (root) CMD ([ -x /etc/init.d/anacron ] && if [ ! -d /run/systemd/system ]; then /usr/sbin/invoke-rc.d anacron start >/dev/null; fi)
// geoclue[2960]: Failed to query location: Forbidden
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 3 times: [ Supervising 8 threads of 4 processes of 1 users.]
// geoclue[2960]: Failed to query location: Forbidden
// geoclue[2960]: message repeated 6 times: [ Failed to query location: Forbidden]
// systemd[1]: Started Run anacron jobs.
// anacron[129674]: Anacron 2.3 started on 2021-01-16
// anacron[129674]: Normal exit (0 jobs run)
// systemd[1]: anacron.service: Succeeded.
// geoclue[2960]: Failed to query location: Forbidden
// geoclue[2960]: message repeated 6 times: [ Failed to query location: Forbidden]
// CRON[130203]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// geoclue[2960]: Failed to query location: Forbidden
// kernel: [28203.770113] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// geoclue[2960]: message repeated 5 times: [ Failed to query location: Forbidden]
// systemd[1]: Starting Refresh fwupd metadata and update motd...
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.fwupd' unit='fwupd.service' requested by ':1.230' (uid=62803 pid=130789 comm="/usr/bin/fwupdmgr refresh --no-metadata-check ")
// systemd[1]: Starting Firmware update daemon...
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.bolt' unit='bolt.service' requested by ':1.231' (uid=0 pid=130792 comm="/usr/libexec/fwupd/fwupd ")
// systemd[1]: Starting Thunderbolt system service...
// boltd[130797]: bolt 0.8 starting up.
// boltd[130797]: store: located at: /var/lib/boltd
// boltd[130797]: config: loading user config
// boltd[130797]: bouncer: initializing polkit
// boltd[130797]: udev: initializing udev
// boltd[130797]: store: loading domains
// boltd[130797]: store: loading devices
// boltd[130797]: power: state located at: /run/boltd/power
// boltd[130797]: power: force power support: yes
// boltd[130797]: power: setting force_power to ON
// boltd[130797]: power: could not force power: write error: No such device
// boltd[130797]: udev: enumerating devices
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.bolt'
// systemd[1]: Started Thunderbolt system service.
// kernel: [28210.857675] ACPI BIOS Error (bug): AE_AML_PACKAGE_LIMIT, Index (0x0000000FF) is beyond end of object (length 0x10) (20200925/exoparg2-393)
// kernel: [28210.857693]
// kernel: [28210.857694] No Local Variables are initialized for Method [GINF]
// kernel: [28210.857694]
// kernel: [28210.857695] Initialized Arguments for Method [GINF]:  (2 arguments defined for method invocation)
// kernel: [28210.857696]   Arg0:   000000002ded576b <Obj>           Integer 00000000000000FF
// kernel: [28210.857700]   Arg1:   000000000c041260 <Obj>           Integer 0000000000000000
// kernel: [28210.857703]
// kernel: [28210.857705] ACPI Error: Aborting method \_SB.GINF due to previous error (AE_AML_PACKAGE_LIMIT) (20200925/psparse-529)
// kernel: [28210.857709] ACPI Error: Aborting method \_SB.GADR due to previous error (AE_AML_PACKAGE_LIMIT) (20200925/psparse-529)
// kernel: [28210.857713] ACPI Error: Aborting method \_SB.SGOV due to previous error (AE_AML_PACKAGE_LIMIT) (20200925/psparse-529)
// kernel: [28210.857717] ACPI Error: Aborting method \_SB.CGWR due to previous error (AE_AML_PACKAGE_LIMIT) (20200925/psparse-529)
// kernel: [28210.857720] ACPI Error: Aborting method \_SB.TBFP due to previous error (AE_AML_PACKAGE_LIMIT) (20200925/psparse-529)
// kernel: [28210.857724] ACPI Error: Aborting method \_SB.WMTF.WMTF due to previous error (AE_AML_PACKAGE_LIMIT) (20200925/psparse-529)
// boltd[130797]: power: setting force_power to ON
// kernel: [28210.861593] ACPI BIOS Error (bug): AE_AML_PACKAGE_LIMIT, Index (0x0000000FF) is beyond end of object (length 0x10) (20200925/exoparg2-393)
// kernel: [28210.861610]
// kernel: [28210.861611] No Local Variables are initialized for Method [GINF]
// kernel: [28210.861611]
// kernel: [28210.861612] Initialized Arguments for Method [GINF]:  (2 arguments defined for method invocation)
// kernel: [28210.861613]   Arg0:   000000000c041260 <Obj>           Integer 00000000000000FF
// kernel: [28210.861617]   Arg1:   00000000fd905538 <Obj>           Integer 0000000000000000
// kernel: [28210.861619]
// kernel: [28210.861621] ACPI Error: Aborting method \_SB.GINF due to previous error (AE_AML_PACKAGE_LIMIT) (20200925/psparse-529)
// kernel: [28210.861625] ACPI Error: Aborting method \_SB.GADR due to previous error (AE_AML_PACKAGE_LIMIT) (20200925/psparse-529)
// kernel: [28210.861629] ACPI Error: Aborting method \_SB.SGOV due to previous error (AE_AML_PACKAGE_LIMIT) (20200925/psparse-529)
// kernel: [28210.861632] ACPI Error: Aborting method \_SB.CGWR due to previous error (AE_AML_PACKAGE_LIMIT) (20200925/psparse-529)
// kernel: [28210.861636] ACPI Error: Aborting method \_SB.TBFP due to previous error (AE_AML_PACKAGE_LIMIT) (20200925/psparse-529)
// kernel: [28210.861640] ACPI Error: Aborting method \_SB.WMTF.WMTF due to previous error (AE_AML_PACKAGE_LIMIT) (20200925/psparse-529)
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.fwupd'
// systemd[1]: Started Firmware update daemon.
// fwupdmgr[130789]: Fetching metadata https://cdn.fwupd.org/downloads/firmware.xml.gz
// fwupdmgr[130789]: Fetching signature https://cdn.fwupd.org/downloads/firmware.xml.gz.asc
// fwupdmgr[130789]: Successfully downloaded new metadata: 0 local devices supported
// systemd[1]: fwupd-refresh.service: Succeeded.
// systemd[1]: Finished Refresh fwupd metadata and update motd.
// geoclue[2960]: Failed to query location: Forbidden
// geoclue[2960]: message repeated 9 times: [ Failed to query location: Forbidden]
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// geoclue[2960]: Failed to query location: Forbidden
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// geoclue[2960]: Failed to query location: Forbidden
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.hostname1' unit='dbus-org.freedesktop.hostname1.service' requested by ':1.236' (uid=1000 pid=5947 comm="/usr/lib/firefox/firefox ")
// systemd[1]: Starting Hostname Service...
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.hostname1'
// systemd[1]: Started Hostname Service.
// geoclue[2960]: Failed to query location: Forbidden
// systemd[1]: systemd-hostnamed.service: Succeeded.
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.hostname1' unit='dbus-org.freedesktop.hostname1.service' requested by ':1.238' (uid=1000 pid=5947 comm="/usr/lib/firefox/firefox ")
// systemd[1]: Starting Hostname Service...
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.hostname1'
// systemd[1]: Started Hostname Service.
// geoclue[2960]: Failed to query location: Forbidden
// geoclue[2960]: Failed to query location: Forbidden
// systemd[1]: systemd-hostnamed.service: Succeeded.
// geoclue[2960]: Failed to query location: Forbidden
// geoclue[2960]: message repeated 5 times: [ Failed to query location: Forbidden]
// CRON[133665]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// geoclue[2960]: Failed to query location: Forbidden
// geoclue[2960]: message repeated 12 times: [ Failed to query location: Forbidden]
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// geoclue[2960]: Failed to query location: Forbidden
// geoclue[2960]: message repeated 4 times: [ Failed to query location: Forbidden]
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.hostname1' unit='dbus-org.freedesktop.hostname1.service' requested by ':1.241' (uid=1000 pid=136028 comm="nautilus --new-window ")
// systemd[1]: Starting Hostname Service...
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.hostname1'
// systemd[1]: Started Hostname Service.
// geoclue[2960]: Failed to query location: Forbidden
// systemd[1]: systemd-hostnamed.service: Succeeded.
// geoclue[2960]: Failed to query location: Forbidden
// kernel: [29111.579184] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// kernel: [29111.603516] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// kernel: [29111.668217] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// kernel: [29111.668829] x86/split lock detection: #AC: CHTTPClientThre/7258 took a split_lock trap at address: 0xebe9f373
// geoclue[2960]: message repeated 5 times: [ Failed to query location: Forbidden]
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// geoclue[2960]: Failed to query location: Forbidden
// geoclue[2960]: message repeated 5 times: [ Failed to query location: Forbidden]
// CRON[138644]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// geoclue[2960]: Failed to query location: Forbidden
// geoclue[2960]: message repeated 15 times: [ Failed to query location: Forbidden]
// wpa_supplicant[1127]: wlp0s20f3: SME: Trying to authenticate with e2:63:da:aa:ca:9f (SSID='KWENCH' freq=5220 MHz)
// kernel: [29741.180964] wlp0s20f3: disconnect from AP 0e:ec:da:15:98:4a for new auth to e2:63:da:aa:ca:9f
// kernel: [29741.185229] wlp0s20f3: authenticate with e2:63:da:aa:ca:9f
// kernel: [29741.187685] wlp0s20f3: send auth to e2:63:da:aa:ca:9f (try 1/3)
// NetworkManager[1088]: <info>  [1610841769.6275] device (wlp0s20f3): supplicant interface state: completed -> authenticating
// NetworkManager[1088]: <info>  [1610841769.6278] device (p2p-dev-wlp0s20f3): supplicant management interface state: completed -> authenticating
// geoclue[2960]: Failed to query location: Error resolving “location.services.mozilla.com”: Temporary failure in name resolution
// wpa_supplicant[1127]: wlp0s20f3: Trying to associate with e2:63:da:aa:ca:9f (SSID='KWENCH' freq=5220 MHz)
// NetworkManager[1088]: <info>  [1610841769.6545] device (wlp0s20f3): supplicant interface state: authenticating -> associating
// NetworkManager[1088]: <info>  [1610841769.6545] device (p2p-dev-wlp0s20f3): supplicant management interface state: authenticating -> associating
// kernel: [29741.215555] wlp0s20f3: authenticated
// kernel: [29741.221027] wlp0s20f3: associate with e2:63:da:aa:ca:9f (try 1/3)
// kernel: [29741.223960] wlp0s20f3: RX ReassocResp from e2:63:da:aa:ca:9f (capab=0x11 status=0 aid=2)
// wpa_supplicant[1127]: wlp0s20f3: Associated with e2:63:da:aa:ca:9f
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
// kernel: [29741.226999] wlp0s20f3: associated
// wpa_supplicant[1127]: wlp0s20f3: WPA: Key negotiation completed with e2:63:da:aa:ca:9f [PTK=CCMP GTK=CCMP]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-CONNECTED - Connection to e2:63:da:aa:ca:9f completed [id=0 id_str=]
// NetworkManager[1088]: <info>  [1610841769.6752] device (wlp0s20f3): supplicant interface state: associating -> completed
// NetworkManager[1088]: <info>  [1610841769.6758] device (p2p-dev-wlp0s20f3): supplicant management interface state: associating -> completed
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-82 noise=9999 txrate=26000
// kernel: [29792.371297] x86/split lock detection: #AC: CHTTPClientThre/52207 took a split_lock trap at address: 0xebe9f373
// kernel: [29792.372720] x86/split lock detection: #AC: CHTTPClientThre/52207 took a split_lock trap at address: 0xebe9f373
// kernel: [29792.465079] x86/split lock detection: #AC: CHTTPClientThre/52207 took a split_lock trap at address: 0xebe9f373
// kernel: [29793.013658] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// kernel: [29793.057400] x86/split lock detection: #AC: CHTTPClientThre/52207 took a split_lock trap at address: 0xebe9f373
// kernel: [29795.904870] x86/split lock detection: #AC: CHTTPClientThre/7258 took a split_lock trap at address: 0xebe9f373
// wpa_supplicant[1127]: wlp0s20f3: SME: Trying to authenticate with 0e:ec:da:15:98:4a (SSID='KWENCH' freq=5785 MHz)
// kernel: [29836.997055] wlp0s20f3: disconnect from AP e2:63:da:aa:ca:9f for new auth to 0e:ec:da:15:98:4a
// kernel: [29837.002481] wlp0s20f3: authenticate with 0e:ec:da:15:98:4a
// kernel: [29837.006226] wlp0s20f3: send auth to 0e:ec:da:15:98:4a (try 1/3)
// NetworkManager[1088]: <info>  [1610841865.4479] device (wlp0s20f3): supplicant interface state: completed -> authenticating
// NetworkManager[1088]: <info>  [1610841865.4479] device (p2p-dev-wlp0s20f3): supplicant management interface state: completed -> authenticating
// wpa_supplicant[1127]: wlp0s20f3: Trying to associate with 0e:ec:da:15:98:4a (SSID='KWENCH' freq=5785 MHz)
// NetworkManager[1088]: <info>  [1610841865.4752] device (wlp0s20f3): supplicant interface state: authenticating -> associating
// NetworkManager[1088]: <info>  [1610841865.4752] device (p2p-dev-wlp0s20f3): supplicant management interface state: authenticating -> associating
// kernel: [29837.036966] wlp0s20f3: authenticated
// kernel: [29837.037631] wlp0s20f3: associate with 0e:ec:da:15:98:4a (try 1/3)
// kernel: [29837.041963] wlp0s20f3: RX ReassocResp from 0e:ec:da:15:98:4a (capab=0x411 status=0 aid=1)
// wpa_supplicant[1127]: wlp0s20f3: Associated with 0e:ec:da:15:98:4a
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
// kernel: [29837.046740] wlp0s20f3: associated
// wpa_supplicant[1127]: wlp0s20f3: WPA: Key negotiation completed with 0e:ec:da:15:98:4a [PTK=CCMP GTK=CCMP]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-CONNECTED - Connection to 0e:ec:da:15:98:4a completed [id=0 id_str=]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-62 noise=9999 txrate=0
// NetworkManager[1088]: <info>  [1610841865.4950] device (wlp0s20f3): supplicant interface state: associating -> completed
// NetworkManager[1088]: <info>  [1610841865.4955] device (p2p-dev-wlp0s20f3): supplicant management interface state: associating -> completed
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=1 signal=-62 noise=9999 txrate=26000
// CRON[141739]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=1 signal=-59 noise=9999 txrate=243000
// wpa_supplicant[1127]: wlp0s20f3: SME: Trying to authenticate with e2:63:da:aa:ca:9f (SSID='KWENCH' freq=5220 MHz)
// kernel: [29943.010896] wlp0s20f3: disconnect from AP 0e:ec:da:15:98:4a for new auth to e2:63:da:aa:ca:9f
// kernel: [29943.016140] wlp0s20f3: authenticate with e2:63:da:aa:ca:9f
// kernel: [29943.019422] wlp0s20f3: send auth to e2:63:da:aa:ca:9f (try 1/3)
// NetworkManager[1088]: <info>  [1610841971.4583] device (wlp0s20f3): supplicant interface state: completed -> authenticating
// NetworkManager[1088]: <info>  [1610841971.4584] device (p2p-dev-wlp0s20f3): supplicant management interface state: completed -> authenticating
// geoclue[2960]: Failed to query location: Error resolving “location.services.mozilla.com”: Temporary failure in name resolution
// wpa_supplicant[1127]: wlp0s20f3: Trying to associate with e2:63:da:aa:ca:9f (SSID='KWENCH' freq=5220 MHz)
// NetworkManager[1088]: <info>  [1610841971.4860] device (wlp0s20f3): supplicant interface state: authenticating -> associating
// NetworkManager[1088]: <info>  [1610841971.4860] device (p2p-dev-wlp0s20f3): supplicant management interface state: authenticating -> associating
// kernel: [29943.048253] wlp0s20f3: authenticated
// kernel: [29943.050313] wlp0s20f3: associate with e2:63:da:aa:ca:9f (try 1/3)
// kernel: [29943.052841] wlp0s20f3: RX ReassocResp from e2:63:da:aa:ca:9f (capab=0x11 status=0 aid=2)
// wpa_supplicant[1127]: wlp0s20f3: Associated with e2:63:da:aa:ca:9f
// kernel: [29943.057667] wlp0s20f3: associated
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
// wpa_supplicant[1127]: wlp0s20f3: WPA: Key negotiation completed with e2:63:da:aa:ca:9f [PTK=CCMP GTK=CCMP]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-CONNECTED - Connection to e2:63:da:aa:ca:9f completed [id=0 id_str=]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-75 noise=9999 txrate=0
// NetworkManager[1088]: <info>  [1610841971.5057] device (wlp0s20f3): supplicant interface state: associating -> completed
// NetworkManager[1088]: <info>  [1610841971.5063] device (p2p-dev-wlp0s20f3): supplicant management interface state: associating -> completed
// wpa_supplicant[1127]: wlp0s20f3: Reject scan trigger since one is already pending
// wpa_supplicant[1127]: wlp0s20f3: SME: Trying to authenticate with 0e:ec:da:15:98:4a (SSID='KWENCH' freq=5785 MHz)
// kernel: [30042.114292] wlp0s20f3: disconnect from AP e2:63:da:aa:ca:9f for new auth to 0e:ec:da:15:98:4a
// kernel: [30042.118837] wlp0s20f3: authenticate with 0e:ec:da:15:98:4a
// geoclue[2960]: Failed to query location: Error resolving “location.services.mozilla.com”: Temporary failure in name resolution
// kernel: [30042.121838] wlp0s20f3: send auth to 0e:ec:da:15:98:4a (try 1/3)
// NetworkManager[1088]: <info>  [1610842070.5594] device (wlp0s20f3): supplicant interface state: completed -> authenticating
// NetworkManager[1088]: <info>  [1610842070.5594] device (p2p-dev-wlp0s20f3): supplicant management interface state: completed -> authenticating
// wpa_supplicant[1127]: wlp0s20f3: Trying to associate with 0e:ec:da:15:98:4a (SSID='KWENCH' freq=5785 MHz)
// NetworkManager[1088]: <info>  [1610842070.5884] device (wlp0s20f3): supplicant interface state: authenticating -> associating
// NetworkManager[1088]: <info>  [1610842070.5884] device (p2p-dev-wlp0s20f3): supplicant management interface state: authenticating -> associating
// kernel: [30042.151353] wlp0s20f3: authenticated
// kernel: [30042.154991] wlp0s20f3: associate with 0e:ec:da:15:98:4a (try 1/3)
// kernel: [30042.159108] wlp0s20f3: RX ReassocResp from 0e:ec:da:15:98:4a (capab=0x411 status=0 aid=1)
// kernel: [30042.162880] wlp0s20f3: associated
// wpa_supplicant[1127]: wlp0s20f3: Associated with 0e:ec:da:15:98:4a
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
// wpa_supplicant[1127]: wlp0s20f3: WPA: Key negotiation completed with 0e:ec:da:15:98:4a [PTK=CCMP GTK=CCMP]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-CONNECTED - Connection to 0e:ec:da:15:98:4a completed [id=0 id_str=]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-60 noise=9999 txrate=0
// NetworkManager[1088]: <info>  [1610842070.6100] device (wlp0s20f3): supplicant interface state: associating -> completed
// NetworkManager[1088]: <info>  [1610842070.6107] device (p2p-dev-wlp0s20f3): supplicant management interface state: associating -> completed
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=1 signal=-60 noise=9999 txrate=26000
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=1 signal=-54 noise=9999 txrate=173300
// CRON[144646]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 3 times: [ Supervising 8 threads of 4 processes of 1 users.]
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.hostname1' unit='dbus-org.freedesktop.hostname1.service' requested by ':1.246' (uid=1000 pid=145121 comm="eom /tmp/mozilla_marcel0/x-circle-1.svg ")
// systemd[1]: Starting Hostname Service...
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.hostname1'
// systemd[1]: Started Hostname Service.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating via systemd: service name='org.freedesktop.Tracker1' unit='tracker-store.service' requested by ':1.4256' (uid=1000 pid=145121 comm="eom /tmp/mozilla_marcel0/x-circle-1.svg ")
// systemd[2441]: Starting Tracker metadata database store and lookup manager...
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Tracker1'
// systemd[2441]: Started Tracker metadata database store and lookup manager.
// CRON[145335]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)
// systemd[1]: systemd-hostnamed.service: Succeeded.
// tracker-store[145286]: OK
// systemd[2441]: tracker-store.service: Succeeded.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// CRON[147708]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// wpa_supplicant[1127]: wlp0s20f3: WPA: Group rekeying completed with 0e:ec:da:15:98:4a [GTK=CCMP]
// CRON[149274]: (root) CMD ([ -x /etc/init.d/anacron ] && if [ ! -d /run/systemd/system ]; then /usr/sbin/invoke-rc.d anacron start >/dev/null; fi)
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// systemd[1]: Started Run anacron jobs.
// anacron[150389]: Anacron 2.3 started on 2021-01-16
// anacron[150389]: Normal exit (0 jobs run)
// systemd[1]: anacron.service: Succeeded.
// kernel: [31592.871892] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating service name='org.freedesktop.Notifications' requested by ':1.3388' (uid=1000 pid=113064 comm="/usr/lib/slack/slack ")
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Notifications'
// CRON[150898]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// CRON[154065]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// CRON[156951]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// kernel: [33393.633202] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// kernel: [33393.783197] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// kernel: [33393.931483] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// CRON[159889]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// kernel: [33925.320584] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// wpa_supplicant[1127]: wlp0s20f3: SME: Trying to authenticate with e2:63:da:aa:ca:9f (SSID='KWENCH' freq=5220 MHz)
// kernel: [33929.237937] wlp0s20f3: disconnect from AP 0e:ec:da:15:98:4a for new auth to e2:63:da:aa:ca:9f
// geoclue[2960]: Failed to query location: Error resolving “location.services.mozilla.com”: Temporary failure in name resolution
// kernel: [33929.243092] wlp0s20f3: authenticate with e2:63:da:aa:ca:9f
// kernel: [33929.245885] wlp0s20f3: send auth to e2:63:da:aa:ca:9f (try 1/3)
// NetworkManager[1088]: <info>  [1610845957.6606] device (wlp0s20f3): supplicant interface state: completed -> authenticating
// NetworkManager[1088]: <info>  [1610845957.6607] device (p2p-dev-wlp0s20f3): supplicant management interface state: completed -> authenticating
// wpa_supplicant[1127]: wlp0s20f3: Trying to associate with e2:63:da:aa:ca:9f (SSID='KWENCH' freq=5220 MHz)
// NetworkManager[1088]: <info>  [1610845957.6862] device (wlp0s20f3): supplicant interface state: authenticating -> associating
// NetworkManager[1088]: <info>  [1610845957.6862] device (p2p-dev-wlp0s20f3): supplicant management interface state: authenticating -> associating
// kernel: [33929.273040] wlp0s20f3: authenticated
// kernel: [33929.274731] wlp0s20f3: associate with e2:63:da:aa:ca:9f (try 1/3)
// kernel: [33929.278144] wlp0s20f3: RX ReassocResp from e2:63:da:aa:ca:9f (capab=0x11 status=0 aid=2)
// wpa_supplicant[1127]: wlp0s20f3: Associated with e2:63:da:aa:ca:9f
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
// kernel: [33929.281347] wlp0s20f3: associated
// wpa_supplicant[1127]: wlp0s20f3: WPA: Key negotiation completed with e2:63:da:aa:ca:9f [PTK=CCMP GTK=CCMP]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-CONNECTED - Connection to e2:63:da:aa:ca:9f completed [id=0 id_str=]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-73 noise=9999 txrate=0
// NetworkManager[1088]: <info>  [1610845957.7091] device (wlp0s20f3): supplicant interface state: associating -> completed
// NetworkManager[1088]: <info>  [1610845957.7151] device (p2p-dev-wlp0s20f3): supplicant management interface state: associating -> completed
// CRON[162773]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// wpa_supplicant[1127]: wlp0s20f3: Reject scan trigger since one is already pending
// CRON[163406]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)
// wpa_supplicant[1127]: wlp0s20f3: Reject scan trigger since one is already pending
// wpa_supplicant[1127]: wlp0s20f3: Reject scan trigger since one is already pending
// CRON[165781]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// wpa_supplicant[1127]: wlp0s20f3: Reject scan trigger since one is already pending
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.hostname1' unit='dbus-org.freedesktop.hostname1.service' requested by ':1.252' (uid=1000 pid=166468 comm="eom /tmp/mozilla_marcel0/log-out.svg ")
// systemd[1]: Starting Hostname Service...
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.hostname1'
// systemd[1]: Started Hostname Service.
// systemd[1]: systemd-hostnamed.service: Succeeded.
// CRON[167319]: (root) CMD ([ -x /etc/init.d/anacron ] && if [ ! -d /run/systemd/system ]; then /usr/sbin/invoke-rc.d anacron start >/dev/null; fi)
// wpa_supplicant[1127]: wlp0s20f3: WPA: Group rekeying completed with e2:63:da:aa:ca:9f [GTK=CCMP]
// wpa_supplicant[1127]: wlp0s20f3: Reject scan trigger since one is already pending
// systemd[1]: Started Run anacron jobs.
// anacron[168024]: Anacron 2.3 started on 2021-01-16
// anacron[168024]: Normal exit (0 jobs run)
// systemd[1]: anacron.service: Succeeded.
// CRON[168927]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// systemd[1]: fwupd.service: Succeeded.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 3 times: [ Supervising 8 threads of 4 processes of 1 users.]
// CRON[172166]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// wpa_supplicant[1127]: wlp0s20f3: Reject scan trigger since one is already pending
// wpa_supplicant[1127]: wlp0s20f3: Reject scan trigger since one is already pending
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.hostname1' unit='dbus-org.freedesktop.hostname1.service' requested by ':1.256' (uid=1000 pid=5947 comm="/usr/lib/firefox/firefox ")
// systemd[1]: Starting Hostname Service...
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.hostname1'
// systemd[1]: Started Hostname Service.
// systemd[1]: systemd-hostnamed.service: Succeeded.
// CRON[175345]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// kernel: [36994.622175] x86/split lock detection: #AC: CHTTPClientThre/7258 took a split_lock trap at address: 0xebe9f373
// kernel: [36994.658695] x86/split lock detection: #AC: CHTTPClientThre/7258 took a split_lock trap at address: 0xebe9f373
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating via systemd: service name='org.freedesktop.Tracker1' unit='tracker-store.service' requested by ':1.1' (uid=1000 pid=2450 comm="/usr/libexec/tracker-miner-fs ")
// systemd[2441]: Starting Tracker metadata database store and lookup manager...
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Tracker1'
// systemd[2441]: Started Tracker metadata database store and lookup manager.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating via systemd: service name='org.freedesktop.Tracker1.Miner.Extract' unit='tracker-extract.service' requested by ':1.1' (uid=1000 pid=2450 comm="/usr/libexec/tracker-miner-fs ")
// systemd[2441]: Starting Tracker metadata extractor...
// tracker-extract[178255]: Set scheduler policy to SCHED_IDLE
// tracker-extract[178255]: Setting priority nice level to 19
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Tracker1.Miner.Extract'
// systemd[2441]: Started Tracker metadata extractor.
// systemd[2441]: tracker-extract.service: Succeeded.
// tracker-store[178246]: OK
// systemd[2441]: tracker-store.service: Succeeded.
// CRON[178519]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating via systemd: service name='org.freedesktop.Tracker1' unit='tracker-store.service' requested by ':1.1' (uid=1000 pid=2450 comm="/usr/libexec/tracker-miner-fs ")
// systemd[2441]: Starting Tracker metadata database store and lookup manager...
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Tracker1'
// systemd[2441]: Started Tracker metadata database store and lookup manager.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating via systemd: service name='org.freedesktop.Tracker1.Miner.Extract' unit='tracker-extract.service' requested by ':1.1' (uid=1000 pid=2450 comm="/usr/libexec/tracker-miner-fs ")
// systemd[2441]: Starting Tracker metadata extractor...
// tracker-extract[179377]: Set scheduler policy to SCHED_IDLE
// tracker-extract[179377]: Setting priority nice level to 19
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Tracker1.Miner.Extract'
// systemd[2441]: Started Tracker metadata extractor.
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.hostname1' unit='dbus-org.freedesktop.hostname1.service' requested by ':1.258' (uid=1000 pid=179401 comm="nautilus --new-window ")
// systemd[1]: Starting Hostname Service...
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.hostname1'
// systemd[1]: Started Hostname Service.
// systemd[2441]: tracker-extract.service: Succeeded.
// tracker-store[179368]: OK
// systemd[2441]: tracker-store.service: Succeeded.
// systemd[1]: systemd-hostnamed.service: Succeeded.
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// CRON[181195]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// wpa_supplicant[1127]: wlp0s20f3: Reject scan trigger since one is already pending
// wpa_supplicant[1127]: wlp0s20f3: Reject scan trigger since one is already pending
// CRON[181718]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)
// mate-control-ce[181721]: #012error raised: [load_xbel_store: couldn't load bookmark file [NULL]#012]
// CRON[184345]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// wpa_supplicant[1127]: wlp0s20f3: SME: Trying to authenticate with 0e:ec:da:15:98:4a (SSID='KWENCH' freq=5785 MHz)
// kernel: [38318.045600] wlp0s20f3: disconnect from AP e2:63:da:aa:ca:9f for new auth to 0e:ec:da:15:98:4a
// kernel: [38318.051149] wlp0s20f3: authenticate with 0e:ec:da:15:98:4a
// NetworkManager[1088]: <info>  [1610850346.4486] device (wlp0s20f3): supplicant interface state: completed -> authenticating
// NetworkManager[1088]: <info>  [1610850346.4486] device (p2p-dev-wlp0s20f3): supplicant management interface state: completed -> authenticating
// kernel: [38318.054520] wlp0s20f3: send auth to 0e:ec:da:15:98:4a (try 1/3)
// wpa_supplicant[1127]: wlp0s20f3: Trying to associate with 0e:ec:da:15:98:4a (SSID='KWENCH' freq=5785 MHz)
// NetworkManager[1088]: <info>  [1610850346.4780] device (wlp0s20f3): supplicant interface state: authenticating -> associating
// NetworkManager[1088]: <info>  [1610850346.4780] device (p2p-dev-wlp0s20f3): supplicant management interface state: authenticating -> associating
// kernel: [38318.083924] wlp0s20f3: authenticated
// kernel: [38318.085979] wlp0s20f3: associate with 0e:ec:da:15:98:4a (try 1/3)
// kernel: [38318.090247] wlp0s20f3: RX ReassocResp from 0e:ec:da:15:98:4a (capab=0x411 status=0 aid=2)
// kernel: [38318.093809] wlp0s20f3: associated
// wpa_supplicant[1127]: wlp0s20f3: Associated with 0e:ec:da:15:98:4a
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
// wpa_supplicant[1127]: wlp0s20f3: WPA: Key negotiation completed with 0e:ec:da:15:98:4a [PTK=CCMP GTK=CCMP]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-CONNECTED - Connection to 0e:ec:da:15:98:4a completed [id=0 id_str=]
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=0 signal=-58 noise=9999 txrate=0
// NetworkManager[1088]: <info>  [1610850346.4986] device (wlp0s20f3): supplicant interface state: associating -> completed
// NetworkManager[1088]: <info>  [1610850346.4991] device (p2p-dev-wlp0s20f3): supplicant management interface state: associating -> completed
// wpa_supplicant[1127]: wlp0s20f3: CTRL-EVENT-SIGNAL-CHANGE above=1 signal=-57 noise=9999 txrate=108000
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 3 times: [ Supervising 8 threads of 4 processes of 1 users.]
// wpa_supplicant[1127]: wlp0s20f3: WPA: Group rekeying completed with 0e:ec:da:15:98:4a [GTK=CCMP]
// CRON[185909]: (root) CMD ([ -x /etc/init.d/anacron ] && if [ ! -d /run/systemd/system ]; then /usr/sbin/invoke-rc.d anacron start >/dev/null; fi)
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// systemd[1]: Started Run anacron jobs.
// anacron[186925]: Anacron 2.3 started on 2021-01-16
// systemd[1]: Starting Daily apt download activities...
// anacron[186925]: Normal exit (0 jobs run)
// systemd[1]: anacron.service: Succeeded.
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// systemd-resolved[948]: message repeated 7 times: [ Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.]
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.PackageKit' unit='packagekit.service' requested by ':1.264' (uid=0 pid=187661 comm="/usr/bin/gdbus call --system --dest org.freedeskto")
// systemd[1]: Starting PackageKit Daemon...
// PackageKit: daemon start
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.PackageKit'
// systemd[1]: Started PackageKit Daemon.
// systemd[1]: apt-daily.service: Succeeded.
// systemd[1]: Finished Daily apt download activities.
// CRON[188510]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// PackageKit: daemon quit
// systemd[1]: packagekit.service: Succeeded.
// CRON[191753]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// CRON[194704]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// CRON[197955]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// CRON[200484]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// CRON[201015]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 3 times: [ Supervising 8 threads of 4 processes of 1 users.]
// CRON[203324]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// systemd-resolved[948]: Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.
// wpa_supplicant[1127]: wlp0s20f3: WPA: Group rekeying completed with 0e:ec:da:15:98:4a [GTK=CCMP]
// CRON[204718]: (root) CMD ([ -x /etc/init.d/anacron ] && if [ ! -d /run/systemd/system ]; then /usr/sbin/invoke-rc.d anacron start >/dev/null; fi)
// systemd[1]: Started Run anacron jobs.
// anacron[204785]: Anacron 2.3 started on 2021-01-16
// anacron[204785]: Normal exit (0 jobs run)
// systemd[1]: anacron.service: Succeeded.
// CRON[206119]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 3 times: [ Supervising 8 threads of 4 processes of 1 users.]
// rtkit-daemon[1949]: Successfully made thread 207083 of process 202335 owned by '1000' RT at priority 10.
// rtkit-daemon[1949]: Supervising 9 threads of 5 processes of 1 users.
// rtkit-daemon[1949]: message repeated 2 times: [ Supervising 9 threads of 5 processes of 1 users.]
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.hostname1' unit='dbus-org.freedesktop.hostname1.service' requested by ':1.275' (uid=1000 pid=5947 comm="/usr/lib/firefox/firefox ")
// systemd[1]: Starting Hostname Service...
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.hostname1'
// systemd[1]: Started Hostname Service.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating via systemd: service name='org.freedesktop.Tracker1' unit='tracker-store.service' requested by ':1.1' (uid=1000 pid=2450 comm="/usr/libexec/tracker-miner-fs ")
// systemd[2441]: Starting Tracker metadata database store and lookup manager...
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Tracker1'
// systemd[2441]: Started Tracker metadata database store and lookup manager.
// dbus-daemon[2459]: [session uid=1000 pid=2459] Activating via systemd: service name='org.freedesktop.Tracker1.Miner.Extract' unit='tracker-extract.service' requested by ':1.1' (uid=1000 pid=2450 comm="/usr/libexec/tracker-miner-fs ")
// systemd[2441]: Starting Tracker metadata extractor...
// tracker-extract[207745]: Set scheduler policy to SCHED_IDLE
// tracker-extract[207745]: Setting priority nice level to 19
// dbus-daemon[2459]: [session uid=1000 pid=2459] Successfully activated service 'org.freedesktop.Tracker1.Miner.Extract'
// systemd[2441]: Started Tracker metadata extractor.
// systemd[2441]: tracker-extract.service: Succeeded.
// tracker-store[207736]: OK
// systemd[2441]: tracker-store.service: Succeeded.
// systemd[1]: systemd-hostnamed.service: Succeeded.
// CRON[209272]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// NetworkManager[1088]: <info>  [1610855238.5826] dhcp4 (wlp0s20f3): option dhcp_lease_time      => '86400'
// NetworkManager[1088]: <info>  [1610855238.5828] dhcp4 (wlp0s20f3): option domain_name_servers  => '10.4.0.1'
// NetworkManager[1088]: <info>  [1610855238.5828] dhcp4 (wlp0s20f3): option expiry               => '1610941638'
// NetworkManager[1088]: <info>  [1610855238.5828] dhcp4 (wlp0s20f3): option ip_address           => '10.4.0.255'
// dbus-daemon[1086]: [system] Activating via systemd: service name='org.freedesktop.nm_dispatcher' unit='dbus-org.freedesktop.nm-dispatcher.service' requested by ':1.10' (uid=0 pid=1088 comm="/usr/sbin/NetworkManager --no-daemon ")
// NetworkManager[1088]: <info>  [1610855238.5828] dhcp4 (wlp0s20f3): option requested_broadcast_address => '1'
// NetworkManager[1088]: <info>  [1610855238.5829] dhcp4 (wlp0s20f3): option requested_domain_name => '1'
// NetworkManager[1088]: <info>  [1610855238.5829] dhcp4 (wlp0s20f3): option requested_domain_name_servers => '1'
// NetworkManager[1088]: <info>  [1610855238.5829] dhcp4 (wlp0s20f3): option requested_domain_search => '1'
// NetworkManager[1088]: <info>  [1610855238.5829] dhcp4 (wlp0s20f3): option requested_host_name  => '1'
// NetworkManager[1088]: <info>  [1610855238.5829] dhcp4 (wlp0s20f3): option requested_interface_mtu => '1'
// NetworkManager[1088]: <info>  [1610855238.5829] dhcp4 (wlp0s20f3): option requested_ms_classless_static_routes => '1'
// NetworkManager[1088]: <info>  [1610855238.5829] dhcp4 (wlp0s20f3): option requested_nis_domain => '1'
// NetworkManager[1088]: <info>  [1610855238.5829] dhcp4 (wlp0s20f3): option requested_nis_servers => '1'
// NetworkManager[1088]: <info>  [1610855238.5829] dhcp4 (wlp0s20f3): option requested_ntp_servers => '1'
// NetworkManager[1088]: <info>  [1610855238.5830] dhcp4 (wlp0s20f3): option requested_rfc3442_classless_static_routes => '1'
// NetworkManager[1088]: <info>  [1610855238.5830] dhcp4 (wlp0s20f3): option requested_root_path  => '1'
// NetworkManager[1088]: <info>  [1610855238.5830] dhcp4 (wlp0s20f3): option requested_routers    => '1'
// NetworkManager[1088]: <info>  [1610855238.5830] dhcp4 (wlp0s20f3): option requested_static_routes => '1'
// NetworkManager[1088]: <info>  [1610855238.5830] dhcp4 (wlp0s20f3): option requested_subnet_mask => '1'
// NetworkManager[1088]: <info>  [1610855238.5830] dhcp4 (wlp0s20f3): option requested_time_offset => '1'
// NetworkManager[1088]: <info>  [1610855238.5830] dhcp4 (wlp0s20f3): option requested_wpad       => '1'
// NetworkManager[1088]: <info>  [1610855238.5830] dhcp4 (wlp0s20f3): option routers              => '10.4.0.1'
// NetworkManager[1088]: <info>  [1610855238.5831] dhcp4 (wlp0s20f3): option subnet_mask          => '255.255.252.0'
// NetworkManager[1088]: <info>  [1610855238.5831] dhcp4 (wlp0s20f3): state changed bound -> extended
// systemd[1]: Starting Network Manager Script Dispatcher Service...
// dbus-daemon[1086]: [system] Successfully activated service 'org.freedesktop.nm_dispatcher'
// systemd[1]: Started Network Manager Script Dispatcher Service.
// systemd[1]: NetworkManager-dispatcher.service: Succeeded.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 3 times: [ Supervising 8 threads of 4 processes of 1 users.]
// CRON[211988]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: message repeated 3 times: [ Supervising 8 threads of 4 processes of 1 users.]
// rtkit-daemon[1949]: Successfully made thread 213824 of process 210009 owned by '1000' RT at priority 10.
// rtkit-daemon[1949]: Supervising 9 threads of 5 processes of 1 users.
// kernel: [44193.382905] x86/split lock detection: #AC: CHTTPClientThre/7258 took a split_lock trap at address: 0xebe9f373
// kernel: [44193.483067] x86/split lock detection: #AC: CHTTPClientThre/7397 took a split_lock trap at address: 0xebe9f373
// kernel: [44193.497850] x86/split lock detection: #AC: CHTTPClientThre/7258 took a split_lock trap at address: 0xebe9f373
// CRON[215021]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// rtkit-daemon[1949]: Supervising 8 threads of 4 processes of 1 users.
// snapd[1117]: storehelpers.go:551: cannot refresh: snap has no updates available: "chromium", "core", "core18", "core20", "gnome-3-28-1804", "gtk-common-themes", "heroku", "ngrok", "snapd"
// snapd[1117]: autorefresh.go:479: auto-refresh: all snaps are up-to-date
