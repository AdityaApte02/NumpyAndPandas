??    ?      ?  ?   |	      ?     ?     ?     ?     ?     ?     ?     ?                         &     /     7  :   H     ?     ?     ?     ?     ?     ?  ?   ?          )  	   1  
   ;  %   F  >   l  0   ?     ?     ?     ?     	          >     Q     ^     k  #   |     ?     ?  4   ?     ?       ;     E   Y     ?     ?     ?  ?   ?  8   1     j  	   ?  
   ?     ?  "   ?  #   ?     ?       !   )     K      e  !   ?     ?  &   ?  "   ?       -        M     b     j  1   ?  	   ?  	   ?  	   ?     ?     ?          )     D     _     z     ?     ?     ?     ?       #     #   @  #   d  #   ?  #   ?  #   ?  #   ?  #     #   <  #   `  #   ?  #   ?     ?     ?          #     @     ]     z  /   ?  *   ?  #   ?  ,        C     Y     p     ?     ?     ?     ?     ?     ?          '     ?     Y     x  !   ?  !   ?      ?     ?          9     X  !   u      ?  "   ?     ?     ?          (     A     \     v  c   ?  !   ?  2        K  /   k     ?     ?      ?  <  ?     2     :     C     K     T     \     e     m     v     ~     ?     ?     ?  )   ?  3   ?  )   ?     (      0   !   =      _      y   H   ?      ?      ?      ?      ?   )   !  [   1!  >   ?!     ?!     ?!     ?!     ?!     "     "      "     ""     $"     @"     ^"     d"  A   v"  !   ?"  ,   ?"  O   #  j   W#  3   ?#  "   ?#  #   $  L   =$  S   ?$     ?$  
   ?$     %     %  .   ,%  /   [%     ?%     ?%  '   ?%     ?%  "   &  #   .&     R&  :   r&  ,   ?&     ?&  9   ?&     ,'     L'  0   Y'  C   ?'     ?'     ?'  	   ?'     ?'     ?'     (     (     (     (     (     !(     '(     -(     2(     8(     =(     B(     H(     N(     T(     Y(     ^(     d(     j(     p(     u(     {(     ?(     ?(     ?(     ?(     ?(     ?(     ?(  M   ?(  ?   ?(  3   *)  2   ^)  
   ?)     ?)     ?)  
   ?)     ?)     ?)     ?)     ?)     ?)     ?)     *     *     %*     3*     B*     R*     `*     q*     }*     ?*     ?*     ?*     ?*     ?*     ?*     ?*     ?*     ?*  	   ?*     +  	   +  ?   +  &   ?+  :   ?+  %   
,  :   0,      k,      ?,  #   ?,     !      u   ?   w   y   4               K   7   m       *   ?       ?       N   :      ?   n   Y   B       ?   E               '   ^       _                  	   <   x   ?       P   |       ,   l   ?   ?   ?       z       2              (   ]   #   \   r          `   j   q      %   f   c   O   Q   H                   ~           V   .   ?   8       ?   e   ?   9   b      ?   S           d   &   W      a       L       ?   )      A   D      
              o   ?   ?         1               T                 C   Z   U       ?              3       I   h                       [          =   {   g   ?   ?       t   G   X      @              -   J       5          6   ?         ?      ?          ?   s           0          k   +   $   ;   }   v       "   ?           R   p   /           i       M   F       >    %.1f EB %.1f EiB %.1f GB %.1f GiB %.1f KB %.1f KiB %.1f MB %.1f MiB %.1f PB %.1f PiB %.1f TB %.1f TiB %.1f kB %s byte %s bytes %s command requires an application id to directly follow

 %u byte %u bytes ACTION APPID APPID ACTION [PARAMETER] APPID [FILE…] Activate an action Application identifier in D-Bus format (eg: org.example.viewer) Arguments:
 COMMAND Commands: Commands:
 Default application for “%s”: %s
 Enter GApplication service mode (use from D-Bus service files) Error parsing parameter %d of type “%s”: %s
 FILE GApplication options GDateTime%H:%M:%S GDateTime%I:%M:%S %p GDateTime%a %b %e %H:%M:%S %Y GDateTime%m/%d/%y GDateTimeAM GDateTimePM Invalid hostname Invoke an action on the application LOCATION Launch an application Launch the application (with optional files to open) List applications List available actions List static actions for an application (from .desktop file) List the installed D-Bus activatable applications (by .desktop files) List writable attributes No recommended applications
 No registered applications
 Optional parameter to the action invocation, in GVariant format Optional relative or absolute filenames, or URIs to open Override the application’s ID PARAMETER Print help Print version Print version information and exit Print version information and exit. Recommended applications:
 Registered applications:
 Seek not supported on base stream Show GApplication options Show information about locations Show information about locations. The action name to invoke The command to print detailed help for Too large count value passed to %s Too many arguments Unable to find toplevel directory to trash %s Unknown command %s

 Usage:
 Use %s to get detailed help.
 Use “%s help COMMAND” to get detailed help.

 [ARGS...] [ARGS…] [COMMAND] abbreviated month nameApr abbreviated month nameAug abbreviated month nameDec abbreviated month nameFeb abbreviated month nameJan abbreviated month nameJul abbreviated month nameJun abbreviated month nameMar abbreviated month nameMay abbreviated month nameNov abbreviated month nameOct abbreviated month nameSep abbreviated month name with dayApr abbreviated month name with dayAug abbreviated month name with dayDec abbreviated month name with dayFeb abbreviated month name with dayJan abbreviated month name with dayJul abbreviated month name with dayJun abbreviated month name with dayMar abbreviated month name with dayMay abbreviated month name with dayNov abbreviated month name with dayOct abbreviated month name with daySep abbreviated weekday nameFri abbreviated weekday nameMon abbreviated weekday nameSat abbreviated weekday nameSun abbreviated weekday nameThu abbreviated weekday nameTue abbreviated weekday nameWed action name must be given after application id
 actions accept a maximum of one parameter
 error parsing action parameter: %s
 error sending %s message to application: %s
 full month nameApril full month nameAugust full month nameDecember full month nameFebruary full month nameJanuary full month nameJuly full month nameJune full month nameMarch full month nameMay full month nameNovember full month nameOctober full month nameSeptember full month name with dayApril full month name with dayAugust full month name with dayDecember full month name with dayFebruary full month name with dayJanuary full month name with dayJuly full month name with dayJune full month name with dayMarch full month name with dayMay full month name with dayNovember full month name with dayOctober full month name with daySeptember full weekday nameFriday full weekday nameMonday full weekday nameSaturday full weekday nameSunday full weekday nameThursday full weekday nameTuesday full weekday nameWednesday invalid action name: “%s”
action names must consist of only alphanumerics, “-” and “.”
 invalid application id: “%s”
 list-actions command takes only the application id unable to connect to D-Bus: %s
 unable to find desktop file for application %s
 unrecognised command: %s

 “%s” takes no arguments

 “version” takes no arguments Project-Id-Version: glib master
Report-Msgid-Bugs-To: https://bugzilla.gnome.org/enter_bug.cgi?product=glib&keywords=I18N+L10N&component=general
POT-Creation-Date: 2017-09-11 18:30+0000
PO-Revision-Date: 2018-03-01 10:36+0100
Last-Translator: GunChleoc <fios@foramnagaidhlig.net>
Language-Team: Fòram na Gàidhlig
Language: gd
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Plural-Forms: nplurals=4; plural=(n==1 || n==11) ? 0 : (n==2 || n==12) ? 1 : (n > 2 && n < 20) ? 2 : 3;
X-Generator: Virtaal 0.7.1
X-Project-Style: gnome
 %.1f EB %.1f EiB %.1f GB %.1f GiB %.1f KB %.1f KiB %.1f MB %.1f MiB %.1f PB %.1f PiB %.1f TB %.1f TiB %.1f kB %s bhaidht %s bhaidht %s baidht %s baidht feumaidh id aplacaide leantainn ris an àithne %s

 %u bhaidht %u bhaidht %u baidht %u baidht GNÌOMH ID-APLACAIDE ID-APLACAIDE GNÌOMH [PARAMADAIR] ID-APLACAIDE [FAIDHLE…] Gnìomhaich gnìomh Aithnichear na h-aplacaid ann am fòrmat D-Bus (m.e. org.example.viewer) Argamaidean:
 ÀITHNE Àitheantan: Àitheantan:
 An aplacaid thùsail airson “%s”: %s
 Rach a-steach dha mhodh frithealaidh GApplication (cleachd o fhaidhlichean seirbheis D-Bus) Mearachd le parsadh paramadair %d dhen t-seòrsa “%s”: %s
 FAIDHLE Roghainnean GApplication %H:%M:%S %I:%M:%S %p %a %b %e %H:%M:%S %Y %d/%m/%y m f Ainm òstair mì-dhligheach Dèan gnìomh air an aplacaid IONAD Tòisich aplacaid Tòisich an aplacaid (le faidhlichean roghainneil ri am fosgladh) Seall liosta dhe na h-aplacaidean Seall liosta dhe na gnìomhan ri am faighinn Seall liosta dhe na gnìomhan stadaigeach airson aplacaid (o fhaidhle .desktop) Seall liosta dhe na h-aplacaidean D-Bus air an stàladh a ghabhas gnìomhachadh (le faidhlichean .desktop) Seall liosta dhe na buaidhean a ghabhas sgrìobhadh Chan eil aplacaid a mholamaid ann
 Chan eil aplacaid chlàraichte ann
 Paramadair roghainneil airson dèanamh a' ghnìomha, ann am fòrmat GVariant Ainmean-faidhle absaloideach no dàimheach no URIean ris am fosgladh gu roghainneil Tar-àithn ID na h-aplacaid PARAMADAIR Seall a’ chobhair Seall an tionndadh Seall fiosrachadh an tionndaidh is fàg an-seo Seall fiosrachadh an tionndaidh is fàg an-seo. Aplacaidean a mholamaid:
 Na h-aplacaidean clàraichte:
 Chan eil taic ri sireadh air bun-shruth Seall roghainnean GApplication Seall fiosrachadh air na h-ionadan Seall fiosrachadh air na h-ionadan. Ainm a’ ghnìomh ri dhèanamh An t-àithne gus cobhair mhionaideach a shealltainn airson Chaidh luach cunntaidh ro mhòr a chur gu %s Tha cus argamaidean ann Cha do lorg sinn pasgan freumha gus %s a chur dhan sgudal Àithne nach aithne dhuinn %s

 Cleachdadh:
 Cleachd %s gus cobhair mhionaideach fhaighinn.

 Cleachd “%s help ÀITHNE” gus cobhair mhionaideach fhaighinn.

 [ARGAMAIDEAN…] [ARGAMAIDEAN…] [ÀITHNE] Gibl Lùna Dùbh Gearr Faoi Iuch Ògmh Màrt Cèit Samh Dàmh Sult Gibl Lùna Dùbh Gearr Faoi Iuch Ògmh Màrt Cèit Samh Dàmh Sult Dih DiL DiS DiD Dia DiM DiC feumaidh tu ainm a’ ghnìomh a thoirt seachad às dèidh id na h-aplacaide
 cha ghabh gnìomhan ach ri aon pharamadair air a char as motha
 cha deach leinn paramadair gnìomha a pharsadh: %s
 mearachd a' cur teachdaireachd %s gu aplacaid: %s
 An Giblean An Lùnastal An Dùbhlachd An Gearran Am Faoilleach An t-Iuchar An t-Ògmhios Am Màrt An Cèitean An t-Samhain An Dàmhair An t-Sultain dhen Ghiblean dhen Lùnastal dhen Dùbhlachd dhen Ghearran dhen Fhaoilleach dhen Iuchar dhen Ògmhios dhen Mhàrt dhen Chèitean dhen t-Samhain dhen Dàmhair dhen t-Sultain DihAoine DiLuain DiSathairne DiDòmhnaich DiarDaoin DiMàirt DiCiadain ainm gnìomha mì-dhligheach: “%s”
chan fhaod ach litrichean gun sràcan is àireamhan, “-” agus “.” a bhith ann an ainm gnìomha
 id aplacaide mì-dhligheach: “%s”
 cha ghabh an àithne list-actions ach ri is na h-aplacaide cha deach leinn ceangal ri D-Bus: %s
 cha deach leinn faidhle desktop a lorg airson aplacaid %s
 àithne nach aithne dhuinn: %s

 cha ghabh “%s” ri argamaid

 cha ghabh “version” ri argamaid 