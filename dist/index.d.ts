/**
 *
 * The key descriptions are copy-pasta'd from Nathan Friend's [ts-key-enum](https://www.npmjs.com/package/ts-key-enum).
 * Below is the MIT license notice, also copy-pasta'd from ts-key-enum.
 *
 * MIT License
 *
 * Copyright (c) 2018 Nathan Friend
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
/**
 * Namespace of standard non-printable `KeyboardEvent.Key` values.
 */
export declare namespace Key {
    /**
     * The user agent wasn't able to map the event's virtual keycode to a
     * specific key value.
     * This can happen due to hardware or software constraints, or because of
     * constraints around the platform on which the user agent is running.
     */
    type Unidentified = "Unidentified";
    const Unidentified: Unidentified;
    /** The Alt (Alternative) key. */
    type Alt = "Alt";
    const Alt: Alt;
    /**
     * The AltGr or AltGraph (Alternate Graphics) key.
     * Enables the ISO Level 3 shift modifier (where Shift is the
     * level 2 modifier).
     */
    type AltGraph = "AltGraph";
    const AltGraph: AltGraph;
    /**
     * The Caps Lock key. Toggles the capital character lock on and
     * off for subsequent input.
     */
    type CapsLock = "CapsLock";
    const CapsLock: CapsLock;
    /**
     * The Control, Ctrl, or Ctl key. Allows
     * typing control characters.
     */
    type Control = "Control";
    const Control: Control;
    /**
     * The Fn (Function modifier) key. Used to allow generating
     * function key (F1–F15, for instance) characters on
     * keyboards without a dedicated function key area. Often handled in
     * hardware so that events aren't generated for this key.
     */
    type Fn = "Fn";
    const Fn: Fn;
    /**
     * The FnLock or F-Lock (Function Lock) key.Toggles
     * the function key mode described by "Fn" on and off. Often
     * handled in hardware so that events aren't generated for this key.
     */
    type FnLock = "FnLock";
    const FnLock: FnLock;
    /** The Hyper key. */
    type Hyper = "Hyper";
    const Hyper: Hyper;
    /**
     * The Meta key. Allows issuing special command inputs. This is
     * the Windows logo key, or the Command or
     * ⌘ key on Mac keyboards.
     */
    type Meta = "Meta";
    const Meta: Meta;
    /**
     * The NumLock (Number Lock) key. Toggles the numeric keypad
     * between number entry some other mode (often directional arrows).
     */
    type NumLock = "NumLock";
    const NumLock: NumLock;
    /**
     * The Scroll Lock key. Toggles between scrolling and cursor
     * movement modes.
     */
    type ScrollLock = "ScrollLock";
    const ScrollLock: ScrollLock;
    /**
     * The Shift key. Modifies keystrokes to allow typing upper (or
     * other) case letters, and to support typing punctuation and other special
     * characters.
     */
    type Shift = "Shift";
    const Shift: Shift;
    /** The Super key. */
    type Super = "Super";
    const Super: Super;
    /** The Symbol modifier key (found on certain virtual keyboards). */
    type Symbol = "Symbol";
    const Symbol: Symbol;
    /** The Symbol Lock key. */
    type SymbolLock = "SymbolLock";
    const SymbolLock: SymbolLock;
    /**
     * The Enter or ↵ key (sometimes labeled
     * Return).
     */
    type Enter = "Enter";
    const Enter: Enter;
    /** The Horizontal Tab key, Tab. */
    type Tab = "Tab";
    const Tab: Tab;
    /** The down arrow key. */
    type ArrowDown = "ArrowDown";
    const ArrowDown: ArrowDown;
    /** The left arrow key. */
    type ArrowLeft = "ArrowLeft";
    const ArrowLeft: ArrowLeft;
    /** The right arrow key. */
    type ArrowRight = "ArrowRight";
    const ArrowRight: ArrowRight;
    /** The up arrow key. */
    type ArrowUp = "ArrowUp";
    const ArrowUp: ArrowUp;
    /** The End key. Moves to the end of content. */
    type End = "End";
    const End: End;
    /** The Home key. Moves to the start of content. */
    type Home = "Home";
    const Home: Home;
    /**
     * The Page Down (or PgDn) key. Scrolls down or
     * displays the next page of content.
     */
    type PageDown = "PageDown";
    const PageDown: PageDown;
    /**
     * The Page Up (or PgUp) key. Scrolls up or displays
     * the previous page of content.
     */
    type PageUp = "PageUp";
    const PageUp: PageUp;
    /**
     * The Backspace key. This key is labeled Delete on
     * Mac keyboards.
     */
    type Backspace = "Backspace";
    const Backspace: Backspace;
    /** The Clear key. Removes the currently selected input. */
    type Clear = "Clear";
    const Clear: Clear;
    /** The Copy key (on certain extended keyboards). */
    type Copy = "Copy";
    const Copy: Copy;
    /** The Cursor Select key, CrSel. */
    type CrSel = "CrSel";
    const CrSel: CrSel;
    /** The Cut key (on certain extended keyboards). */
    type Cut = "Cut";
    const Cut: Cut;
    /** The Delete key, Del. */
    type Delete = "Delete";
    const Delete: Delete;
    /**
     * Erase to End of Field. Deletes all characters from the current cursor
     * position to the end of the current field.
     */
    type EraseEof = "EraseEof";
    const EraseEof: EraseEof;
    /** The ExSel (Extend Selection) key. */
    type ExSel = "ExSel";
    const ExSel: ExSel;
    /**
     * The Insert key, Ins. Toggles between inserting and
     * overwriting text.
     */
    type Insert = "Insert";
    const Insert: Insert;
    /** Paste from the clipboard. */
    type Paste = "Paste";
    const Paste: Paste;
    /** Redo the last action. */
    type Redo = "Redo";
    const Redo: Redo;
    /** Undo the last action. */
    type Undo = "Undo";
    const Undo: Undo;
    /**
     * The Accept, Commit, or OK key or
     * button. Accepts the currently selected option or input method sequence
     * conversion.
     */
    type Accept = "Accept";
    const Accept: Accept;
    /** The Again key. Redoes or repeats a previous action. */
    type Again = "Again";
    const Again: Again;
    /** The Attn (Attention) key. */
    type Attn = "Attn";
    const Attn: Attn;
    /** The Cancel key. */
    type Cancel = "Cancel";
    const Cancel: Cancel;
    /**
     * Shows the context menu. Typically found between the
     * Windows (or OS) key and the Control key
     * on the right side of the keyboard.
     */
    type ContextMenu = "ContextMenu";
    const ContextMenu: ContextMenu;
    /**
     * The Esc (Escape) key. Typically used as an exit, cancel, or
     * "escape this operation" button. Historically, the Escape character was
     * used to signal the start of a special control sequence of characters
     * called an "escape sequence."
     */
    type Escape = "Escape";
    const Escape: Escape;
    /** The Execute key. */
    type Execute = "Execute";
    const Execute: Execute;
    /**
     * The Find key. Opens an interface (typically a dialog box) for
     * performing a find/search operation.
     */
    type Find = "Find";
    const Find: Find;
    /** The Finish key. */
    type Finish = "Finish";
    const Finish: Finish;
    /**
     * The Help key. Opens or toggles the display of help
     * information.
     */
    type Help = "Help";
    const Help: Help;
    /**
     * The Pause key. Pauses the current application or state, if
     * applicable.
     * Note: This shouldn't be confused with the
     * "MediaPause" key value, which is used for media
     * controllers, rather than to control applications and processes.
     */
    type Pause = "Pause";
    const Pause: Pause;
    /**
     * The Play key. Resumes a previously paused application, if
     * applicable.
     * Note: This shouldn't be confused with the
     * "MediaPlay" key value, which is used for media
     * controllers, rather than to control applications and processes.
     */
    type Play = "Play";
    const Play: Play;
    /** The Props (Properties) key. */
    type Props = "Props";
    const Props: Props;
    /** The Select key. */
    type Select = "Select";
    const Select: Select;
    /** The ZoomIn key. */
    type ZoomIn = "ZoomIn";
    const ZoomIn: ZoomIn;
    /** The ZoomOut key. */
    type ZoomOut = "ZoomOut";
    const ZoomOut: ZoomOut;
    /**
     * The Brightness Down key. Typically used to reduce the brightness of the
     * display.
     */
    type BrightnessDown = "BrightnessDown";
    const BrightnessDown: BrightnessDown;
    /**
     * The Brightness Up key. Typically increases the brightness of the
     * display.
     */
    type BrightnessUp = "BrightnessUp";
    const BrightnessUp: BrightnessUp;
    /**
     * The Eject key. Ejects removable media (or toggles an optical
     * storage device tray open and closed).
     */
    type Eject = "Eject";
    const Eject: Eject;
    /** The LogOff key. */
    type LogOff = "LogOff";
    const LogOff: LogOff;
    /**
     * The Power button or key, to toggle power on and off.
     * Note: Not all systems pass this key through to the
     * user agent.
     */
    type Power = "Power";
    const Power: Power;
    /**
     * The PowerOff or PowerDown key. Shuts off the
     * system.
     */
    type PowerOff = "PowerOff";
    const PowerOff: PowerOff;
    /**
     * The PrintScreen or PrtScr key. Sometimes
     * SnapShot. Captures the screen and prints it or saves it to
     * disk.
     */
    type PrintScreen = "PrintScreen";
    const PrintScreen: PrintScreen;
    /**
     * The Hibernate key. This saves the state of the computer to
     * disk and then shuts down; the computer can be returned to its previous
     * state by restoring the saved state information.
     */
    type Hibernate = "Hibernate";
    const Hibernate: Hibernate;
    /**
     * The Standby key. (Also known as Suspend or
     * Sleep.) This turns off the display and puts the computer in a
     * low power consumption mode, without completely powering off.
     */
    type Standby = "Standby";
    const Standby: Standby;
    /**
     * The WakeUp key. Used to wake the computer from the
     * hibernation or standby modes.
     */
    type WakeUp = "WakeUp";
    const WakeUp: WakeUp;
    /**
     * The All Candidates key, which starts multi-candidate mode, in
     * which multiple candidates are displayed for the ongoing input.
     */
    type AllCandidates = "AllCandidates";
    const AllCandidates: AllCandidates;
    /** The Alphanumeric key. */
    type Alphanumeric = "Alphanumeric";
    const Alphanumeric: Alphanumeric;
    /**
     * The Code Input key, which enables code input mode, which lets
     * the user enter characters by typing their code points (their Unicode
     * character numbers, typically).
     */
    type CodeInput = "CodeInput";
    const CodeInput: CodeInput;
    /** The Compose key. */
    type Compose = "Compose";
    const Compose: Compose;
    /**
     * The Convert key, which instructs the IME to convert the
     * current input method sequence into the resulting character.
     */
    type Convert = "Convert";
    const Convert: Convert;
    /**
     * A dead "combining" key; that is, a key which is used in tandem with
     * other keys to generate accented and other modified characters. If
     * pressed by itself, it doesn't generate a character.
     * If you wish to identify which specific dead key was pressed (in cases
     * where more than one exists), you can do so by examining the
     * KeyboardEvent's associated
     * compositionupdate event's
     * data property.
     */
    type Dead = "Dead";
    const Dead: Dead;
    /**
     * The Final (Final Mode) key is used on some Asian keyboards to
     * enter final mode when using IMEs.
     */
    type FinalMode = "FinalMode";
    const FinalMode: FinalMode;
    /**
     * Switches to the first character group on an
     * ISO/IEC 9995 keyboard. Each key may have multiple groups of characters, each in its own
     * column. Pressing this key instructs the device to interpret keypresses
     * as coming from the first column on subsequent keystrokes.
     */
    type GroupFirst = "GroupFirst";
    const GroupFirst: GroupFirst;
    /**
     * Switches to the last character group on an
     * ISO/IEC 9995 keyboard.
     */
    type GroupLast = "GroupLast";
    const GroupLast: GroupLast;
    /**
     * Switches to the next character group on an
     * ISO/IEC 9995 keyboard.
     */
    type GroupNext = "GroupNext";
    const GroupNext: GroupNext;
    /**
     * Switches to the previous character group on an
     * ISO/IEC 9995 keyboard.
     */
    type GroupPrevious = "GroupPrevious";
    const GroupPrevious: GroupPrevious;
    /** The Mode Change key. Toggles or cycles among input modes of IMEs. */
    type ModeChange = "ModeChange";
    const ModeChange: ModeChange;
    /**
     * The Next Candidate function key. Selects the next possible match for the
     * ongoing input.
     */
    type NextCandidate = "NextCandidate";
    const NextCandidate: NextCandidate;
    /**
     * The NonConvert ("Don't convert") key. This accepts the
     * current input method sequence without running conversion when using an
     * IME.
     */
    type NonConvert = "NonConvert";
    const NonConvert: NonConvert;
    /**
     * The Previous Candidate key. Selects the previous possible match for the
     * ongoing input.
     */
    type PreviousCandidate = "PreviousCandidate";
    const PreviousCandidate: PreviousCandidate;
    /** The Process key. Instructs the IME to process the conversion. */
    type Process = "Process";
    const Process: Process;
    /**
     * The Single Candidate key. Enables single candidate mode (as opposed to
     * multi-candidate mode); in this mode, only one candidate is displayed at
     * a time.
     */
    type SingleCandidate = "SingleCandidate";
    const SingleCandidate: SingleCandidate;
    /**
     * The Hangul (Korean character set) mode key, which toggles
     * between Hangul and English entry modes.
     */
    type HangulMode = "HangulMode";
    const HangulMode: HangulMode;
    /**
     * Selects the Hanja mode, for converting Hangul characters to the more
     * specific Hanja characters.
     */
    type HanjaMode = "HanjaMode";
    const HanjaMode: HanjaMode;
    /**
     * Selects the Junja mode, in which Korean is represented using single-byte
     * Latin characters.
     */
    type JunjaMode = "JunjaMode";
    const JunjaMode: JunjaMode;
    /**
     * The Eisu key. This key's purpose is defined by the IME, but
     * may be used to close the IME.
     */
    type Eisu = "Eisu";
    const Eisu: Eisu;
    /** The Hankaku (half-width characters) key. */
    type Hankaku = "Hankaku";
    const Hankaku: Hankaku;
    /** The Hiragana key; selects Kana characters mode. */
    type Hiragana = "Hiragana";
    const Hiragana: Hiragana;
    /** Toggles between the Hiragana and Katakana writing systems. */
    type HiraganaKatakana = "HiraganaKatakana";
    const HiraganaKatakana: HiraganaKatakana;
    /** The Kana Mode (Kana Lock) key. */
    type KanaMode = "KanaMode";
    const KanaMode: KanaMode;
    /**
     * The Kanji Mode key. Enables entering Japanese text using the
     * ideographic characters of Chinese origin.
     */
    type KanjiMode = "KanjiMode";
    const KanjiMode: KanjiMode;
    /** The Katakana key. */
    type Katakana = "Katakana";
    const Katakana: Katakana;
    /** The Romaji key; selects the Roman character set. */
    type Romaji = "Romaji";
    const Romaji: Romaji;
    /** The Zenkaku (full width) characters key. */
    type Zenkaku = "Zenkaku";
    const Zenkaku: Zenkaku;
    /** The Zenkaku/Hankaku (full width/half width) toggle key. */
    type ZenkakuHanaku = "ZenkakuHanaku";
    const ZenkakuHanaku: ZenkakuHanaku;
    /** The first general-purpose function key, F1. */
    type F1 = "F1";
    const F1: F1;
    /** The F2 key. */
    type F2 = "F2";
    const F2: F2;
    /** The F3 key. */
    type F3 = "F3";
    const F3: F3;
    /** The F4 key. */
    type F4 = "F4";
    const F4: F4;
    /** The F5 key. */
    type F5 = "F5";
    const F5: F5;
    /** The F6 key. */
    type F6 = "F6";
    const F6: F6;
    /** The F7 key. */
    type F7 = "F7";
    const F7: F7;
    /** The F8 key. */
    type F8 = "F8";
    const F8: F8;
    /** The F9 key. */
    type F9 = "F9";
    const F9: F9;
    /** The F10 key. */
    type F10 = "F10";
    const F10: F10;
    /** The F11 key. */
    type F11 = "F11";
    const F11: F11;
    /** The F12 key. */
    type F12 = "F12";
    const F12: F12;
    /** The F13 key. */
    type F13 = "F13";
    const F13: F13;
    /** The F14 key. */
    type F14 = "F14";
    const F14: F14;
    /** The F15 key. */
    type F15 = "F15";
    const F15: F15;
    /** The F16 key. */
    type F16 = "F16";
    const F16: F16;
    /** The F17 key. */
    type F17 = "F17";
    const F17: F17;
    /** The F18 key. */
    type F18 = "F18";
    const F18: F18;
    /** The F19 key. */
    type F19 = "F19";
    const F19: F19;
    /** The F20 key. */
    type F20 = "F20";
    const F20: F20;
    /** The first general-purpose virtual function key. */
    type Soft1 = "Soft1";
    const Soft1: Soft1;
    /** The second general-purpose virtual function key. */
    type Soft2 = "Soft2";
    const Soft2: Soft2;
    /** The third general-purpose virtual function key. */
    type Soft3 = "Soft3";
    const Soft3: Soft3;
    /** The fourth general-purpose virtual function key. */
    type Soft4 = "Soft4";
    const Soft4: Soft4;
    /**
     * Presents a list of recently-used applications which lets the user change
     * apps quickly.
     */
    type AppSwitch = "AppSwitch";
    const AppSwitch: AppSwitch;
    /** The Call key. Dials the number which has been entered. */
    type Call = "Call";
    const Call: Call;
    /** The Camera key. Activates the camera. */
    type Camera = "Camera";
    const Camera: Camera;
    /** The Focus key. Focuses the camera. */
    type CameraFocus = "CameraFocus";
    const CameraFocus: CameraFocus;
    /** The End Call or Hang Up button. */
    type EndCall = "EndCall";
    const EndCall: EndCall;
    /** The Back button. */
    type GoBack = "GoBack";
    const GoBack: GoBack;
    /**
     * The Home button. Returns the user to the phone's main screen
     * (usually an application launcher).
     */
    type GoHome = "GoHome";
    const GoHome: GoHome;
    /**
     * The Headset Hook key. This is typically actually a button on
     * the headset which is used to hang up calls and play or pause media.
     */
    type HeadsetHook = "HeadsetHook";
    const HeadsetHook: HeadsetHook;
    /** The Redial button. Redials the last-called number. */
    type LastNumberRedial = "LastNumberRedial";
    const LastNumberRedial: LastNumberRedial;
    /** The Notification key. */
    type Notification = "Notification";
    const Notification: Notification;
    /**
     * A button which cycles among the notification modes: silent, vibrate,
     * ring, and so forth.
     */
    type MannerMode = "MannerMode";
    const MannerMode: MannerMode;
    /** The Voice Dial key. Initiates voice dialing. */
    type VoiceDial = "VoiceDial";
    const VoiceDial: VoiceDial;
    /** Switches to the previous channel. */
    type ChannelDown = "ChannelDown";
    const ChannelDown: ChannelDown;
    /** Switches to the next channel. */
    type ChannelUp = "ChannelUp";
    const ChannelUp: ChannelUp;
    /** Starts, continues, or increases the speed of fast forwarding the media. */
    type MediaFastForward = "MediaFastForward";
    const MediaFastForward: MediaFastForward;
    /**
     * Pauses the currently playing media.
     * Note: Some older applications use
     * "Pause", but this is not correct.
     */
    type MediaPause = "MediaPause";
    const MediaPause: MediaPause;
    /**
     * Starts or continues playing media at normal speed, if not already doing
     * so. Has no effect otherwise.
     */
    type MediaPlay = "MediaPlay";
    const MediaPlay: MediaPlay;
    /** Toggles between playing and pausing the current media. */
    type MediaPlayPause = "MediaPlayPause";
    const MediaPlayPause: MediaPlayPause;
    /** Starts or resumes recording media. */
    type MediaRecord = "MediaRecord";
    const MediaRecord: MediaRecord;
    /** Starts, continues, or increases the speed of rewinding the media. */
    type MediaRewind = "MediaRewind";
    const MediaRewind: MediaRewind;
    /**
     * Stops the current media activity (such as playing, recording, pausing,
     * forwarding, or rewinding). Has no effect if the media is currently
     * stopped already.
     */
    type MediaStop = "MediaStop";
    const MediaStop: MediaStop;
    /** Seeks to the next media or program track. */
    type MediaTrackNext = "MediaTrackNext";
    const MediaTrackNext: MediaTrackNext;
    /** Seeks to the previous media or program track. */
    type MediaTrackPrevious = "MediaTrackPrevious";
    const MediaTrackPrevious: MediaTrackPrevious;
    /** Adjusts audio balance toward the left. */
    type AudioBalanceLeft = "AudioBalanceLeft";
    const AudioBalanceLeft: AudioBalanceLeft;
    /** Adjusts audio balance toward the right. */
    type AudioBalanceRight = "AudioBalanceRight";
    const AudioBalanceRight: AudioBalanceRight;
    /** Decreases the amount of bass. */
    type AudioBassDown = "AudioBassDown";
    const AudioBassDown: AudioBassDown;
    /**
     * Reduces bass boosting or cycles downward through bass boost modes or
     * states.
     */
    type AudioBassBoostDown = "AudioBassBoostDown";
    const AudioBassBoostDown: AudioBassBoostDown;
    /** Toggles bass boosting on and off. */
    type AudioBassBoostToggle = "AudioBassBoostToggle";
    const AudioBassBoostToggle: AudioBassBoostToggle;
    /**
     * Increases the amount of bass boosting, or cycles upward through a set of
     * bass boost modes or states.
     */
    type AudioBassBoostUp = "AudioBassBoostUp";
    const AudioBassBoostUp: AudioBassBoostUp;
    /** Increases the amount of bass. */
    type AudioBassUp = "AudioBassUp";
    const AudioBassUp: AudioBassUp;
    /** Adjusts the audio fader toward the front. */
    type AudioFaderFront = "AudioFaderFront";
    const AudioFaderFront: AudioFaderFront;
    /** Adjusts the audio fader toward the rear. */
    type AudioFaderRear = "AudioFaderRear";
    const AudioFaderRear: AudioFaderRear;
    /** Selects the next available surround sound mode. */
    type AudioSurroundModeNext = "AudioSurroundModeNext";
    const AudioSurroundModeNext: AudioSurroundModeNext;
    /** Decreases the amount of treble. */
    type AudioTrebleDown = "AudioTrebleDown";
    const AudioTrebleDown: AudioTrebleDown;
    /** Increases the amount of treble. */
    type AudioTrebleUp = "AudioTrebleUp";
    const AudioTrebleUp: AudioTrebleUp;
    /** Decreases the audio volume. */
    type AudioVolumeDown = "AudioVolumeDown";
    const AudioVolumeDown: AudioVolumeDown;
    /** Mutes the audio. */
    type AudioVolumeMute = "AudioVolumeMute";
    const AudioVolumeMute: AudioVolumeMute;
    /** Increases the audio volume. */
    type AudioVolumeUp = "AudioVolumeUp";
    const AudioVolumeUp: AudioVolumeUp;
    /** Toggles the microphone on and off. */
    type MicrophoneToggle = "MicrophoneToggle";
    const MicrophoneToggle: MicrophoneToggle;
    /** Decreases the microphone's input volume. */
    type MicrophoneVolumeDown = "MicrophoneVolumeDown";
    const MicrophoneVolumeDown: MicrophoneVolumeDown;
    /** Mutes the microphone input. */
    type MicrophoneVolumeMute = "MicrophoneVolumeMute";
    const MicrophoneVolumeMute: MicrophoneVolumeMute;
    /** Increases the microphone's input volume. */
    type MicrophoneVolumeUp = "MicrophoneVolumeUp";
    const MicrophoneVolumeUp: MicrophoneVolumeUp;
    /** Switches into TV viewing mode. */
    type TV = "TV";
    const TV: TV;
    /** Toggles 3D TV mode on and off. */
    type TV3DMode = "TV3DMode";
    const TV3DMode: TV3DMode;
    /** Toggles between antenna and cable inputs. */
    type TVAntennaCable = "TVAntennaCable";
    const TVAntennaCable: TVAntennaCable;
    /** Toggles audio description mode on and off. */
    type TVAudioDescription = "TVAudioDescription";
    const TVAudioDescription: TVAudioDescription;
    /**
     * Decreases the audio description's mixing volume; reduces the volume of
     * the audio descriptions relative to the program sound.
     */
    type TVAudioDescriptionMixDown = "TVAudioDescriptionMixDown";
    const TVAudioDescriptionMixDown: TVAudioDescriptionMixDown;
    /**
     * Increases the audio description's mixing volume; increases the volume of
     * the audio descriptions relative to the program sound.
     */
    type TVAudioDescriptionMixUp = "TVAudioDescriptionMixUp";
    const TVAudioDescriptionMixUp: TVAudioDescriptionMixUp;
    /**
     * Displays or hides the media contents available for playback (this may be
     * a channel guide showing the currently airing programs, or a list of
     * media files to play).
     */
    type TVContentsMenu = "TVContentsMenu";
    const TVContentsMenu: TVContentsMenu;
    /** Displays or hides the TV's data service menu. */
    type TVDataService = "TVDataService";
    const TVDataService: TVDataService;
    /** Cycles the input mode on an external TV. */
    type TVInput = "TVInput";
    const TVInput: TVInput;
    /** Switches to the input "Component 1." */
    type TVInputComponent1 = "TVInputComponent1";
    const TVInputComponent1: TVInputComponent1;
    /** Switches to the input "Component 2." */
    type TVInputComponent2 = "TVInputComponent2";
    const TVInputComponent2: TVInputComponent2;
    /** Switches to the input "Composite 1." */
    type TVInputComposite1 = "TVInputComposite1";
    const TVInputComposite1: TVInputComposite1;
    /** Switches to the input "Composite 2." */
    type TVInputComposite2 = "TVInputComposite2";
    const TVInputComposite2: TVInputComposite2;
    /** Switches to the input "HDMI 1." */
    type TVInputHDMI1 = "TVInputHDMI1";
    const TVInputHDMI1: TVInputHDMI1;
    /** Switches to the input "HDMI 2." */
    type TVInputHDMI2 = "TVInputHDMI2";
    const TVInputHDMI2: TVInputHDMI2;
    /** Switches to the input "HDMI 3." */
    type TVInputHDMI3 = "TVInputHDMI3";
    const TVInputHDMI3: TVInputHDMI3;
    /** Switches to the input "HDMI 4." */
    type TVInputHDMI4 = "TVInputHDMI4";
    const TVInputHDMI4: TVInputHDMI4;
    /** Switches to the input "VGA 1." */
    type TVInputVGA1 = "TVInputVGA1";
    const TVInputVGA1: TVInputVGA1;
    /** The Media Context menu key. */
    type TVMediaContext = "TVMediaContext";
    const TVMediaContext: TVMediaContext;
    /** Toggle the TV's network connection on and off. */
    type TVNetwork = "TVNetwork";
    const TVNetwork: TVNetwork;
    /** Put the TV into number entry mode. */
    type TVNumberEntry = "TVNumberEntry";
    const TVNumberEntry: TVNumberEntry;
    /** The device's power button. */
    type TVPower = "TVPower";
    const TVPower: TVPower;
    /** Radio button. */
    type TVRadioService = "TVRadioService";
    const TVRadioService: TVRadioService;
    /** Satellite button. */
    type TVSatellite = "TVSatellite";
    const TVSatellite: TVSatellite;
    /** Broadcast Satellite button. */
    type TVSatelliteBS = "TVSatelliteBS";
    const TVSatelliteBS: TVSatelliteBS;
    /** Communication Satellite button. */
    type TVSatelliteCS = "TVSatelliteCS";
    const TVSatelliteCS: TVSatelliteCS;
    /** Toggles among available satellites. */
    type TVSatelliteToggle = "TVSatelliteToggle";
    const TVSatelliteToggle: TVSatelliteToggle;
    /**
     * Selects analog terrestrial television service (analog cable or antenna
     * reception).
     */
    type TVTerrestrialAnalog = "TVTerrestrialAnalog";
    const TVTerrestrialAnalog: TVTerrestrialAnalog;
    /**
     * Selects digital terrestrial television service (digital cable or antenna
     * reception).
     */
    type TVTerrestrialDigital = "TVTerrestrialDigital";
    const TVTerrestrialDigital: TVTerrestrialDigital;
    /** Timer programming button. */
    type TVTimer = "TVTimer";
    const TVTimer: TVTimer;
    /** Changes the input mode on an external audio/video receiver (AVR) unit. */
    type AVRInput = "AVRInput";
    const AVRInput: AVRInput;
    /** Toggles the power on an external AVR unit. */
    type AVRPower = "AVRPower";
    const AVRPower: AVRPower;
    /**
     * General-purpose media function key, color-coded red. This has index
     * 0 among the colored keys.
     */
    type ColorF0Red = "ColorF0Red";
    const ColorF0Red: ColorF0Red;
    /**
     * General-purpose media function key, color-coded green. This has index
     * 1 among the colored keys.
     */
    type ColorF1Green = "ColorF1Green";
    const ColorF1Green: ColorF1Green;
    /**
     * General-purpose media function key, color-coded yellow. This has index
     * 2 among the colored keys.
     */
    type ColorF2Yellow = "ColorF2Yellow";
    const ColorF2Yellow: ColorF2Yellow;
    /**
     * General-purpose media function key, color-coded blue. This has index
     * 3 among the colored keys.
     */
    type ColorF3Blue = "ColorF3Blue";
    const ColorF3Blue: ColorF3Blue;
    /**
     * General-purpose media function key, color-coded grey. This has index
     * 4 among the colored keys.
     */
    type ColorF4Grey = "ColorF4Grey";
    const ColorF4Grey: ColorF4Grey;
    /**
     * General-purpose media function key, color-coded brown. This has index
     * 5 among the colored keys.
     */
    type ColorF5Brown = "ColorF5Brown";
    const ColorF5Brown: ColorF5Brown;
    /** Toggles closed captioning on and off. */
    type ClosedCaptionToggle = "ClosedCaptionToggle";
    const ClosedCaptionToggle: ClosedCaptionToggle;
    /**
     * Adjusts the brightness of the device by toggling between two brightness
     * levels or by cycling among multiple brightness levels.
     */
    type Dimmer = "Dimmer";
    const Dimmer: Dimmer;
    /** Cycles among video sources. */
    type DisplaySwap = "DisplaySwap";
    const DisplaySwap: DisplaySwap;
    /** Switches the input source to the Digital Video Recorder (DVR). */
    type DVR = "DVR";
    const DVR: DVR;
    /** The Exit button, which exits the current application or menu. */
    type Exit = "Exit";
    const Exit: Exit;
    /** Clears the program or content stored in the first favorites list slot. */
    type FavoriteClear0 = "FavoriteClear0";
    const FavoriteClear0: FavoriteClear0;
    /** Clears the program or content stored in the second favorites list slot. */
    type FavoriteClear1 = "FavoriteClear1";
    const FavoriteClear1: FavoriteClear1;
    /** Clears the program or content stored in the third favorites list slot. */
    type FavoriteClear2 = "FavoriteClear2";
    const FavoriteClear2: FavoriteClear2;
    /** Clears the program or content stored in the fourth favorites list slot. */
    type FavoriteClear3 = "FavoriteClear3";
    const FavoriteClear3: FavoriteClear3;
    /**
     * Selects (recalls) the program or content stored in the first favorites
     * list slot.
     */
    type FavoriteRecall0 = "FavoriteRecall0";
    const FavoriteRecall0: FavoriteRecall0;
    /**
     * Selects (recalls) the program or content stored in the second favorites
     * list slot.
     */
    type FavoriteRecall1 = "FavoriteRecall1";
    const FavoriteRecall1: FavoriteRecall1;
    /**
     * Selects (recalls) the program or content stored in the third favorites
     * list slot.
     */
    type FavoriteRecall2 = "FavoriteRecall2";
    const FavoriteRecall2: FavoriteRecall2;
    /**
     * Selects (recalls) the program or content stored in the fourth favorites
     * list slot.
     */
    type FavoriteRecall3 = "FavoriteRecall3";
    const FavoriteRecall3: FavoriteRecall3;
    /**
     * Stores the current program or content into the first favorites list
     * slot.
     */
    type FavoriteStore0 = "FavoriteStore0";
    const FavoriteStore0: FavoriteStore0;
    /**
     * Stores the current program or content into the second favorites list
     * slot.
     */
    type FavoriteStore1 = "FavoriteStore1";
    const FavoriteStore1: FavoriteStore1;
    /**
     * Stores the current program or content into the third favorites list
     * slot.
     */
    type FavoriteStore2 = "FavoriteStore2";
    const FavoriteStore2: FavoriteStore2;
    /**
     * Stores the current program or content into the fourth favorites list
     * slot.
     */
    type FavoriteStore3 = "FavoriteStore3";
    const FavoriteStore3: FavoriteStore3;
    /** Toggles the display of the program or content guide. */
    type Guide = "Guide";
    const Guide: Guide;
    /**
     * If the guide is currently displayed, this button tells the guide to
     * display the next day's content.
     */
    type GuideNextDay = "GuideNextDay";
    const GuideNextDay: GuideNextDay;
    /**
     * If the guide is currently displayed, this button tells the guide to
     * display the previous day's content.
     */
    type GuidePreviousDay = "GuidePreviousDay";
    const GuidePreviousDay: GuidePreviousDay;
    /**
     * Toggles the display of information about the currently selected content,
     * program, or media.
     */
    type Info = "Info";
    const Info: Info;
    /**
     * Tells the device to perform an instant replay (typically some form of
     * jumping back a short amount of time then playing it again, possibly but
     * not usually in slow motion).
     */
    type InstantReplay = "InstantReplay";
    const InstantReplay: InstantReplay;
    /** Opens content linked to the current program, if available and possible. */
    type Link = "Link";
    const Link: Link;
    /** Lists the current program. */
    type ListProgram = "ListProgram";
    const ListProgram: ListProgram;
    /** Toggles a display listing currently available live content or programs. */
    type LiveContent = "LiveContent";
    const LiveContent: LiveContent;
    /** Locks or unlocks the currently selected content or pgoram. */
    type Lock = "Lock";
    const Lock: Lock;
    /**
     * Presents a list of media applications, such as photo viewers, audio and
     * video players, and games. [1]
     */
    type MediaApps = "MediaApps";
    const MediaApps: MediaApps;
    /** The Audio Track key. */
    type MediaAudioTrack = "MediaAudioTrack";
    const MediaAudioTrack: MediaAudioTrack;
    /** Jumps back to the last-viewed content, program, or other media. */
    type MediaLast = "MediaLast";
    const MediaLast: MediaLast;
    /** Skips backward to the previous content or program. */
    type MediaSkipBackward = "MediaSkipBackward";
    const MediaSkipBackward: MediaSkipBackward;
    /** Skips forward to the next content or program. */
    type MediaSkipForward = "MediaSkipForward";
    const MediaSkipForward: MediaSkipForward;
    /** Steps backward to the previous content or program. */
    type MediaStepBackward = "MediaStepBackward";
    const MediaStepBackward: MediaStepBackward;
    /** Steps forward to the next content or program. */
    type MediaStepForward = "MediaStepForward";
    const MediaStepForward: MediaStepForward;
    /**
     * Top Menu button. Opens the media's main menu (e.g., for a DVD or Blu-Ray
     * disc).
     */
    type MediaTopMenu = "MediaTopMenu";
    const MediaTopMenu: MediaTopMenu;
    /** Navigates into a submenu or option. */
    type NavigateIn = "NavigateIn";
    const NavigateIn: NavigateIn;
    /** Navigates to the next item. */
    type NavigateNext = "NavigateNext";
    const NavigateNext: NavigateNext;
    /** Navigates out of the current screen or menu. */
    type NavigateOut = "NavigateOut";
    const NavigateOut: NavigateOut;
    /** Navigates to the previous item. */
    type NavigatePrevious = "NavigatePrevious";
    const NavigatePrevious: NavigatePrevious;
    /** Cycles to the next channel in the favorites list. */
    type NextFavoriteChannel = "NextFavoriteChannel";
    const NextFavoriteChannel: NextFavoriteChannel;
    /**
     * Cycles to the next saved user profile, if this feature is supported and
     * multiple profiles exist.
     */
    type NextUserProfile = "NextUserProfile";
    const NextUserProfile: NextUserProfile;
    /**
     * Opens the user interface for selecting on demand content or programs to
     * watch.
     */
    type OnDemand = "OnDemand";
    const OnDemand: OnDemand;
    /** Starts the process of pairing the remote with a device to be controlled. */
    type Pairing = "Pairing";
    const Pairing: Pairing;
    /** A button to move the picture-in-picture view downward. */
    type PinPDown = "PinPDown";
    const PinPDown: PinPDown;
    /** A button to control moving the picture-in-picture view. */
    type PinPMove = "PinPMove";
    const PinPMove: PinPMove;
    /** Toggles display of the picture-in-picture view on and off. */
    type PinPToggle = "PinPToggle";
    const PinPToggle: PinPToggle;
    /** A button to move the picture-in-picture view upward. */
    type PinPUp = "PinPUp";
    const PinPUp: PinPUp;
    /** Decreases the media playback rate. */
    type PlaySpeedDown = "PlaySpeedDown";
    const PlaySpeedDown: PlaySpeedDown;
    /** Returns the media playback rate to normal. */
    type PlaySpeedReset = "PlaySpeedReset";
    const PlaySpeedReset: PlaySpeedReset;
    /** Increases the media playback rate. */
    type PlaySpeedUp = "PlaySpeedUp";
    const PlaySpeedUp: PlaySpeedUp;
    /** Toggles random media (also known as "shuffle mode") on and off. */
    type RandomToggle = "RandomToggle";
    const RandomToggle: RandomToggle;
    /**
     * A code sent when the remote control's battery is low. This doesn't
     * actually correspond to a physical key at all.
     */
    type RcLowBattery = "RcLowBattery";
    const RcLowBattery: RcLowBattery;
    /** Cycles among the available media recording speeds. */
    type RecordSpeedNext = "RecordSpeedNext";
    const RecordSpeedNext: RecordSpeedNext;
    /**
     * Toggles radio frequency (RF) input bypass mode on and off. RF bypass
     * mode passes RF input directly to the RF output without any processing or
     * filtering.
     */
    type RfBypass = "RfBypass";
    const RfBypass: RfBypass;
    /**
     * Toggles the channel scan mode on and off. This is a mode which flips
     * through channels automatically until the user stops the scan.
     */
    type ScanChannelsToggle = "ScanChannelsToggle";
    const ScanChannelsToggle: ScanChannelsToggle;
    /** Cycles through the available screen display modes. */
    type ScreenModeNext = "ScreenModeNext";
    const ScreenModeNext: ScreenModeNext;
    /** Toggles display of the device's settings screen on and off. */
    type Settings = "Settings";
    const Settings: Settings;
    /** Toggles split screen display mode on and off. */
    type SplitScreenToggle = "SplitScreenToggle";
    const SplitScreenToggle: SplitScreenToggle;
    /** Cycles among input modes on an external set-top box (STB). */
    type STBInput = "STBInput";
    const STBInput: STBInput;
    /** Toggles on and off an external STB. */
    type STBPower = "STBPower";
    const STBPower: STBPower;
    /** Toggles the display of subtitles on and off if they're available. */
    type Subtitle = "Subtitle";
    const Subtitle: Subtitle;
    /**
     * Toggles display of teletext,
     * if available.
     */
    type Teletext = "Teletext";
    const Teletext: Teletext;
    /** Cycles through the available video modes. */
    type VideoModeNext = "VideoModeNext";
    const VideoModeNext: VideoModeNext;
    /**
     * Causes the device to identify itself in some fashion, such as by
     * flashing a light, briefly changing the brightness of indicator lights,
     * or emitting a tone.
     */
    type Wink = "Wink";
    const Wink: Wink;
    /**
     * Toggles between full-screen and scaled content display, or otherwise
     * change the magnification level.
     */
    type ZoomToggle = "ZoomToggle";
    const ZoomToggle: ZoomToggle;
    /**
     * Presents a list of possible corrections for a word which was incorrectly
     * identified.
     */
    type SpeechCorrectionList = "SpeechCorrectionList";
    const SpeechCorrectionList: SpeechCorrectionList;
    /**
     * Toggles between dictation mode and command/control mode. This lets the
     * speech engine know whether to interpret spoken words as input text or as
     * commands.
     */
    type SpeechInputToggle = "SpeechInputToggle";
    const SpeechInputToggle: SpeechInputToggle;
    /** Closes the current document or message. Must not exit the application. */
    type Close = "Close";
    const Close: Close;
    /** Creates a new document or message. */
    type New = "New";
    const New: New;
    /** Opens an existing document or message. */
    type Open = "Open";
    const Open: Open;
    /** Prints the current document or message. */
    type Print = "Print";
    const Print: Print;
    /** Saves the current document or message. */
    type Save = "Save";
    const Save: Save;
    /** Starts spell checking the current document. */
    type SpellCheck = "SpellCheck";
    const SpellCheck: SpellCheck;
    /** Opens the user interface to forward a message. */
    type MailForward = "MailForward";
    const MailForward: MailForward;
    /** Opens the user interface to reply to a message. */
    type MailReply = "MailReply";
    const MailReply: MailReply;
    /** Sends the current message. */
    type MailSend = "MailSend";
    const MailSend: MailSend;
    /**
     * The Calculator key, often labeled with an icon. This is often
     * used as a generic application launcher key
     * (APPCOMMAND_LAUNCH_APP2).
     */
    type LaunchCalculator = "LaunchCalculator";
    const LaunchCalculator: LaunchCalculator;
    /** The Calendar key. Often labeled with an icon. */
    type LaunchCalendar = "LaunchCalendar";
    const LaunchCalendar: LaunchCalendar;
    /** The Contacts key. */
    type LaunchContacts = "LaunchContacts";
    const LaunchContacts: LaunchContacts;
    /** The Mail key. Often labeled with an icon. */
    type LaunchMail = "LaunchMail";
    const LaunchMail: LaunchMail;
    /** The Media Player key. */
    type LaunchMediaPlayer = "LaunchMediaPlayer";
    const LaunchMediaPlayer: LaunchMediaPlayer;
    /** The Music Player key. Often labeled with an icon. */
    type LaunchMusicPlayer = "LaunchMusicPlayer";
    const LaunchMusicPlayer: LaunchMusicPlayer;
    /**
     * The My Computer key on Windows keyboards. This is often used
     * as a generic application launcher key
     * (APPCOMMAND_LAUNCH_APP1).
     */
    type LaunchMyComputer = "LaunchMyComputer";
    const LaunchMyComputer: LaunchMyComputer;
    /**
     * The Phone key. Opens the phone dialer application (if one is
     * present).
     */
    type LaunchPhone = "LaunchPhone";
    const LaunchPhone: LaunchPhone;
    /** The Screen Saver key. */
    type LaunchScreenSaver = "LaunchScreenSaver";
    const LaunchScreenSaver: LaunchScreenSaver;
    /** The Spreadsheet key. This key may be labeled with an icon. */
    type LaunchSpreadsheet = "LaunchSpreadsheet";
    const LaunchSpreadsheet: LaunchSpreadsheet;
    /**
     * The Web Browser key. This key is frequently labeled with an
     * icon.
     */
    type LaunchWebBrowser = "LaunchWebBrowser";
    const LaunchWebBrowser: LaunchWebBrowser;
    /** The WebCam key. Opens the webcam application. */
    type LaunchWebCam = "LaunchWebCam";
    const LaunchWebCam: LaunchWebCam;
    /**
     * The Word Processor key. This may be an icon of a specific
     * word processor application, or a generic document icon.
     */
    type LaunchWordProcessor = "LaunchWordProcessor";
    const LaunchWordProcessor: LaunchWordProcessor;
    /** The first generic application launcher button. */
    type LaunchApplication1 = "LaunchApplication1";
    const LaunchApplication1: LaunchApplication1;
    /** The second generic application launcher button. */
    type LaunchApplication2 = "LaunchApplication2";
    const LaunchApplication2: LaunchApplication2;
    /** The third generic application launcher button. */
    type LaunchApplication3 = "LaunchApplication3";
    const LaunchApplication3: LaunchApplication3;
    /** The fourth generic application launcher button. */
    type LaunchApplication4 = "LaunchApplication4";
    const LaunchApplication4: LaunchApplication4;
    /** The fifth generic application launcher button. */
    type LaunchApplication5 = "LaunchApplication5";
    const LaunchApplication5: LaunchApplication5;
    /** The sixth generic application launcher button. */
    type LaunchApplication6 = "LaunchApplication6";
    const LaunchApplication6: LaunchApplication6;
    /** The seventh generic application launcher button. */
    type LaunchApplication7 = "LaunchApplication7";
    const LaunchApplication7: LaunchApplication7;
    /** The eighth generic application launcher button. */
    type LaunchApplication8 = "LaunchApplication8";
    const LaunchApplication8: LaunchApplication8;
    /** The ninth generic application launcher button. */
    type LaunchApplication9 = "LaunchApplication9";
    const LaunchApplication9: LaunchApplication9;
    /** The 10th generic application launcher button. */
    type LaunchApplication10 = "LaunchApplication10";
    const LaunchApplication10: LaunchApplication10;
    /** The 11th generic application launcher button. */
    type LaunchApplication11 = "LaunchApplication11";
    const LaunchApplication11: LaunchApplication11;
    /** The 12th generic application launcher button. */
    type LaunchApplication12 = "LaunchApplication12";
    const LaunchApplication12: LaunchApplication12;
    /** The 13th generic application launcher button. */
    type LaunchApplication13 = "LaunchApplication13";
    const LaunchApplication13: LaunchApplication13;
    /** The 14th generic application launcher button. */
    type LaunchApplication14 = "LaunchApplication14";
    const LaunchApplication14: LaunchApplication14;
    /** The 15th generic application launcher button. */
    type LaunchApplication15 = "LaunchApplication15";
    const LaunchApplication15: LaunchApplication15;
    /** The 16th generic application launcher button. */
    type LaunchApplication16 = "LaunchApplication16";
    const LaunchApplication16: LaunchApplication16;
    /**
     * Navigates to the previous content or page in the current Web view's
     * history.
     */
    type BrowserBack = "BrowserBack";
    const BrowserBack: BrowserBack;
    /** Opens the user's list of bookmarks/favorites. */
    type BrowserFavorites = "BrowserFavorites";
    const BrowserFavorites: BrowserFavorites;
    /** Navigates to the next content or page in the current Web view's history. */
    type BrowserForward = "BrowserForward";
    const BrowserForward: BrowserForward;
    /** Navigates to the user's preferred home page. */
    type BrowserHome = "BrowserHome";
    const BrowserHome: BrowserHome;
    /** Refreshes the current page or content. */
    type BrowserRefresh = "BrowserRefresh";
    const BrowserRefresh: BrowserRefresh;
    /**
     * Activates the user's preferred search engine or the search interface
     * within their browser.
     */
    type BrowserSearch = "BrowserSearch";
    const BrowserSearch: BrowserSearch;
    /** Stops loading the currently displayed Web view or content. */
    type BrowserStop = "BrowserStop";
    const BrowserStop: BrowserStop;
    /**
     * The decimal point key (typically . or
     * , depending on the region).
     * In newer browsers, this value to be the character generated by the
     * decimal key (one of those two characters). [1]
     */
    type Decimal = "Decimal";
    const Decimal: Decimal;
    /** The 11 key found on certain media numeric keypads. */
    type Key11 = "Key11";
    const Key11: Key11;
    /** The 12 key found on certain media numeric keypads. */
    type Key12 = "Key12";
    const Key12: Key12;
    /** The numeric keypad's multiplication key, *. */
    type Multiply = "Multiply";
    const Multiply: Multiply;
    /** The numeric keypad's addition key, +. */
    type Add = "Add";
    const Add: Add;
    /** The numeric keypad's division key, /. */
    type Divide = "Divide";
    const Divide: Divide;
    /** The numeric keypad's subtraction key, -. */
    type Subtract = "Subtract";
    const Subtract: Subtract;
    /**
     * The numeric keypad's places separator character.
     * (In the United States this is a comma, but elsewhere it is frequently
     * a period.)
     */
    type Separator = "Separator";
    const Separator: Separator;
}
export default Key;
