<div id="wikitext">

The following is the structure of the \$server hash when you get a
message event:

<div class="vspace">

</div>

     $server = bless( {
        'usermode_away' => 0,
        'away_reason' => '',
        'real_address' => 'card.freenode.net',
        'nick' => 'nick',
        'connection_lost' => 0,
        'connect_time' => 1275375521,
        'realname' => 'Real Name',
        'password' => '',
        'chat_type' => 'IRC',
        'server_operator' => 0,
        'chatnet' => 'Freenode',
        'tag' => 'Freenode',
        'address' => 'irc.freenode.net',
        'no_autojoin_channels' => 0,
        'max_cmds_at_once' => 5,
        'port' => 6667,
        'username' => 'username',
        'isupport_sent' => 1,
        'usermode' => 'i',
        'real_connect_time' => 1275375533,
        'type' => 'SERVER',
        'unix_socket' => 0,
        '_irssi' => 143078112,
        'banned' => 0,
        'max_query_chans' => 1,
        'last_invite' => '',
        'max_modes_in_cmd' => 4,
        'connected' => 1,
        'version' => 'ircd-seven-1.0.3',
        'lag' => 23,
        'userhost' => 'user@host',
        'cmd_queue_speed' => 2200,
        'max_kicks_in_cmd' => 1,
        'use_ssl' => 0,
        'rawlog' => bless( do{\(my $o = 142906048)}, 'Irssi::Rawlog' ),
        'max_whois_in_cmd' => 4,
        'max_msgs_in_cmd' => 1,
        'no_connect' => 0,
        'reconnection' => 1,
        'wanted_nick' => 'nick'
      }, 'Irssi::Irc::Server' );

<div class="vspace">

</div>

</div>
