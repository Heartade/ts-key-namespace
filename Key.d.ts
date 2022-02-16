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
  export type Unidentified = "Unidentified";
  export const Unidentified: Unidentified;

  /** The Alt (Alternative) key. */
  export type Alt = "Alt";
  export const Alt: Alt;

  /**
   * The AltGr or AltGraph (Alternate Graphics) key.
   * Enables the ISO Level 3 shift modifier (where Shift is the
   * level 2 modifier).
   */
  export type AltGraph = "AltGraph";
  export const AltGraph: AltGraph;

  /**
   * The Caps Lock key. Toggles the capital character lock on and
   * off for subsequent input.
   */
  export type CapsLock = "CapsLock";
  export const CapsLock: CapsLock;

  /**
   * The Control, Ctrl, or Ctl key. Allows
   * typing control characters.
   */
  export type Control = "Control";
  export const Control: Control;

  /**
   * The Fn (Function modifier) key. Used to allow generating
   * function key (F1–F15, for instance) characters on
   * keyboards without a dedicated function key area. Often handled in
   * hardware so that events aren't generated for this key.
   */
  export type Fn = "Fn";
  export const Fn: Fn;

  /**
   * The FnLock or F-Lock (Function Lock) key.Toggles
   * the function key mode described by "Fn" on and off. Often
   * handled in hardware so that events aren't generated for this key.
   */
  export type FnLock = "FnLock";
  export const FnLock: FnLock;

  /** The Hyper key. */
  export type Hyper = "Hyper";
  export const Hyper: Hyper;

  /**
   * The Meta key. Allows issuing special command inputs. This is
   * the Windows logo key, or the Command or
   * ⌘ key on Mac keyboards.
   */
  export type Meta = "Meta";
  export const Meta: Meta;

  /**
   * The NumLock (Number Lock) key. Toggles the numeric keypad
   * between number entry some other mode (often directional arrows).
   */
  export type NumLock = "NumLock";
  export const NumLock: NumLock;

  /**
   * The Scroll Lock key. Toggles between scrolling and cursor
   * movement modes.
   */
  export type ScrollLock = "ScrollLock";
  export const ScrollLock: ScrollLock;

  /**
   * The Shift key. Modifies keystrokes to allow typing upper (or
   * other) case letters, and to support typing punctuation and other special
   * characters.
   */
  export type Shift = "Shift";
  export const Shift: Shift;

  /** The Super key. */
  export type Super = "Super";
  export const Super: Super;

  /** The Symbol modifier key (found on certain virtual keyboards). */
  export type Symbol = "Symbol";
  export const Symbol: Symbol;

  /** The Symbol Lock key. */
  export type SymbolLock = "SymbolLock";
  export const SymbolLock: SymbolLock;

  /**
   * The Enter or ↵ key (sometimes labeled
   * Return).
   */
  export type Enter = "Enter";
  export const Enter: Enter;

  /** The Horizontal Tab key, Tab. */
  export type Tab = "Tab";
  export const Tab: Tab;

  /** The down arrow key. */
  export type ArrowDown = "ArrowDown";
  export const ArrowDown: ArrowDown;

  /** The left arrow key. */
  export type ArrowLeft = "ArrowLeft";
  export const ArrowLeft: ArrowLeft;

  /** The right arrow key. */
  export type ArrowRight = "ArrowRight";
  export const ArrowRight: ArrowRight;

  /** The up arrow key. */
  export type ArrowUp = "ArrowUp";
  export const ArrowUp: ArrowUp;

  /** The End key. Moves to the end of content. */
  export type End = "End";
  export const End: End;

  /** The Home key. Moves to the start of content. */
  export type Home = "Home";
  export const Home: Home;

  /**
   * The Page Down (or PgDn) key. Scrolls down or
   * displays the next page of content.
   */
  export type PageDown = "PageDown";
  export const PageDown: PageDown;

  /**
   * The Page Up (or PgUp) key. Scrolls up or displays
   * the previous page of content.
   */
  export type PageUp = "PageUp";
  export const PageUp: PageUp;

  /**
   * The Backspace key. This key is labeled Delete on
   * Mac keyboards.
   */
  export type Backspace = "Backspace";
  export const Backspace: Backspace;

  /** The Clear key. Removes the currently selected input. */
  export type Clear = "Clear";
  export const Clear: Clear;

  /** The Copy key (on certain extended keyboards). */
  export type Copy = "Copy";
  export const Copy: Copy;

  /** The Cursor Select key, CrSel. */
  export type CrSel = "CrSel";
  export const CrSel: CrSel;

  /** The Cut key (on certain extended keyboards). */
  export type Cut = "Cut";
  export const Cut: Cut;

  /** The Delete key, Del. */
  export type Delete = "Delete";
  export const Delete: Delete;

  /**
   * Erase to End of Field. Deletes all characters from the current cursor
   * position to the end of the current field.
   */
  export type EraseEof = "EraseEof";
  export const EraseEof: EraseEof;

  /** The ExSel (Extend Selection) key. */
  export type ExSel = "ExSel";
  export const ExSel: ExSel;

  /**
   * The Insert key, Ins. Toggles between inserting and
   * overwriting text.
   */
  export type Insert = "Insert";
  export const Insert: Insert;

  /** Paste from the clipboard. */
  export type Paste = "Paste";
  export const Paste: Paste;

  /** Redo the last action. */
  export type Redo = "Redo";
  export const Redo: Redo;

  /** Undo the last action. */
  export type Undo = "Undo";
  export const Undo: Undo;

  /**
   * The Accept, Commit, or OK key or
   * button. Accepts the currently selected option or input method sequence
   * conversion.
   */
  export type Accept = "Accept";
  export const Accept: Accept;

  /** The Again key. Redoes or repeats a previous action. */
  export type Again = "Again";
  export const Again: Again;

  /** The Attn (Attention) key. */
  export type Attn = "Attn";
  export const Attn: Attn;

  /** The Cancel key. */
  export type Cancel = "Cancel";
  export const Cancel: Cancel;

  /**
   * Shows the context menu. Typically found between the
   * Windows (or OS) key and the Control key
   * on the right side of the keyboard.
   */
  export type ContextMenu = "ContextMenu";
  export const ContextMenu: ContextMenu;

  /**
   * The Esc (Escape) key. Typically used as an exit, cancel, or
   * "escape this operation" button. Historically, the Escape character was
   * used to signal the start of a special control sequence of characters
   * called an "escape sequence."
   */
  export type Escape = "Escape";
  export const Escape: Escape;

  /** The Execute key. */
  export type Execute = "Execute";
  export const Execute: Execute;

  /**
   * The Find key. Opens an interface (typically a dialog box) for
   * performing a find/search operation.
   */
  export type Find = "Find";
  export const Find: Find;

  /** The Finish key. */
  export type Finish = "Finish";
  export const Finish: Finish;

  /**
   * The Help key. Opens or toggles the display of help
   * information.
   */
  export type Help = "Help";
  export const Help: Help;

  /**
   * The Pause key. Pauses the current application or state, if
   * applicable.
   * Note: This shouldn't be confused with the
   * "MediaPause" key value, which is used for media
   * controllers, rather than to control applications and processes.
   */
  export type Pause = "Pause";
  export const Pause: Pause;

  /**
   * The Play key. Resumes a previously paused application, if
   * applicable.
   * Note: This shouldn't be confused with the
   * "MediaPlay" key value, which is used for media
   * controllers, rather than to control applications and processes.
   */
  export type Play = "Play";
  export const Play: Play;

  /** The Props (Properties) key. */
  export type Props = "Props";
  export const Props: Props;

  /** The Select key. */
  export type Select = "Select";
  export const Select: Select;

  /** The ZoomIn key. */
  export type ZoomIn = "ZoomIn";
  export const ZoomIn: ZoomIn;

  /** The ZoomOut key. */
  export type ZoomOut = "ZoomOut";
  export const ZoomOut: ZoomOut;

  /**
   * The Brightness Down key. Typically used to reduce the brightness of the
   * display.
   */
  export type BrightnessDown = "BrightnessDown";
  export const BrightnessDown: BrightnessDown;

  /**
   * The Brightness Up key. Typically increases the brightness of the
   * display.
   */
  export type BrightnessUp = "BrightnessUp";
  export const BrightnessUp: BrightnessUp;

  /**
   * The Eject key. Ejects removable media (or toggles an optical
   * storage device tray open and closed).
   */
  export type Eject = "Eject";
  export const Eject: Eject;

  /** The LogOff key. */
  export type LogOff = "LogOff";
  export const LogOff: LogOff;

  /**
   * The Power button or key, to toggle power on and off.
   * Note: Not all systems pass this key through to the
   * user agent.
   */
  export type Power = "Power";
  export const Power: Power;

  /**
   * The PowerOff or PowerDown key. Shuts off the
   * system.
   */
  export type PowerOff = "PowerOff";
  export const PowerOff: PowerOff;

  /**
   * The PrintScreen or PrtScr key. Sometimes
   * SnapShot. Captures the screen and prints it or saves it to
   * disk.
   */
  export type PrintScreen = "PrintScreen";
  export const PrintScreen: PrintScreen;

  /**
   * The Hibernate key. This saves the state of the computer to
   * disk and then shuts down; the computer can be returned to its previous
   * state by restoring the saved state information.
   */
  export type Hibernate = "Hibernate";
  export const Hibernate: Hibernate;

  /**
   * The Standby key. (Also known as Suspend or
   * Sleep.) This turns off the display and puts the computer in a
   * low power consumption mode, without completely powering off.
   */
  export type Standby = "Standby";
  export const Standby: Standby;

  /**
   * The WakeUp key. Used to wake the computer from the
   * hibernation or standby modes.
   */
  export type WakeUp = "WakeUp";
  export const WakeUp: WakeUp;

  /**
   * The All Candidates key, which starts multi-candidate mode, in
   * which multiple candidates are displayed for the ongoing input.
   */
  export type AllCandidates = "AllCandidates";
  export const AllCandidates: AllCandidates;

  /** The Alphanumeric key. */
  export type Alphanumeric = "Alphanumeric";
  export const Alphanumeric: Alphanumeric;

  /**
   * The Code Input key, which enables code input mode, which lets
   * the user enter characters by typing their code points (their Unicode
   * character numbers, typically).
   */
  export type CodeInput = "CodeInput";
  export const CodeInput: CodeInput;

  /** The Compose key. */
  export type Compose = "Compose";
  export const Compose: Compose;

  /**
   * The Convert key, which instructs the IME to convert the
   * current input method sequence into the resulting character.
   */
  export type Convert = "Convert";
  export const Convert: Convert;

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
  export type Dead = "Dead";
  export const Dead: Dead;

  /**
   * The Final (Final Mode) key is used on some Asian keyboards to
   * enter final mode when using IMEs.
   */
  export type FinalMode = "FinalMode";
  export const FinalMode: FinalMode;

  /**
   * Switches to the first character group on an
   * ISO/IEC 9995 keyboard. Each key may have multiple groups of characters, each in its own
   * column. Pressing this key instructs the device to interpret keypresses
   * as coming from the first column on subsequent keystrokes.
   */
  export type GroupFirst = "GroupFirst";
  export const GroupFirst: GroupFirst;

  /**
   * Switches to the last character group on an
   * ISO/IEC 9995 keyboard.
   */
  export type GroupLast = "GroupLast";
  export const GroupLast: GroupLast;

  /**
   * Switches to the next character group on an
   * ISO/IEC 9995 keyboard.
   */
  export type GroupNext = "GroupNext";
  export const GroupNext: GroupNext;

  /**
   * Switches to the previous character group on an
   * ISO/IEC 9995 keyboard.
   */
  export type GroupPrevious = "GroupPrevious";
  export const GroupPrevious: GroupPrevious;

  /** The Mode Change key. Toggles or cycles among input modes of IMEs. */
  export type ModeChange = "ModeChange";
  export const ModeChange: ModeChange;

  /**
   * The Next Candidate function key. Selects the next possible match for the
   * ongoing input.
   */
  export type NextCandidate = "NextCandidate";
  export const NextCandidate: NextCandidate;

  /**
   * The NonConvert ("Don't convert") key. This accepts the
   * current input method sequence without running conversion when using an
   * IME.
   */
  export type NonConvert = "NonConvert";
  export const NonConvert: NonConvert;

  /**
   * The Previous Candidate key. Selects the previous possible match for the
   * ongoing input.
   */
  export type PreviousCandidate = "PreviousCandidate";
  export const PreviousCandidate: PreviousCandidate;

  /** The Process key. Instructs the IME to process the conversion. */
  export type Process = "Process";
  export const Process: Process;

  /**
   * The Single Candidate key. Enables single candidate mode (as opposed to
   * multi-candidate mode); in this mode, only one candidate is displayed at
   * a time.
   */
  export type SingleCandidate = "SingleCandidate";
  export const SingleCandidate: SingleCandidate;

  /**
   * The Hangul (Korean character set) mode key, which toggles
   * between Hangul and English entry modes.
   */
  export type HangulMode = "HangulMode";
  export const HangulMode: HangulMode;

  /**
   * Selects the Hanja mode, for converting Hangul characters to the more
   * specific Hanja characters.
   */
  export type HanjaMode = "HanjaMode";
  export const HanjaMode: HanjaMode;

  /**
   * Selects the Junja mode, in which Korean is represented using single-byte
   * Latin characters.
   */
  export type JunjaMode = "JunjaMode";
  export const JunjaMode: JunjaMode;

  /**
   * The Eisu key. This key's purpose is defined by the IME, but
   * may be used to close the IME.
   */
  export type Eisu = "Eisu";
  export const Eisu: Eisu;

  /** The Hankaku (half-width characters) key. */
  export type Hankaku = "Hankaku";
  export const Hankaku: Hankaku;

  /** The Hiragana key; selects Kana characters mode. */
  export type Hiragana = "Hiragana";
  export const Hiragana: Hiragana;

  /** Toggles between the Hiragana and Katakana writing systems. */
  export type HiraganaKatakana = "HiraganaKatakana";
  export const HiraganaKatakana: HiraganaKatakana;

  /** The Kana Mode (Kana Lock) key. */
  export type KanaMode = "KanaMode";
  export const KanaMode: KanaMode;

  /**
   * The Kanji Mode key. Enables entering Japanese text using the
   * ideographic characters of Chinese origin.
   */
  export type KanjiMode = "KanjiMode";
  export const KanjiMode: KanjiMode;

  /** The Katakana key. */
  export type Katakana = "Katakana";
  export const Katakana: Katakana;

  /** The Romaji key; selects the Roman character set. */
  export type Romaji = "Romaji";
  export const Romaji: Romaji;

  /** The Zenkaku (full width) characters key. */
  export type Zenkaku = "Zenkaku";
  export const Zenkaku: Zenkaku;

  /** The Zenkaku/Hankaku (full width/half width) toggle key. */
  export type ZenkakuHanaku = "ZenkakuHanaku";
  export const ZenkakuHanaku: ZenkakuHanaku;

  /** The first general-purpose function key, F1. */
  export type F1 = "F1";
  export const F1: F1;

  /** The F2 key. */
  export type F2 = "F2";
  export const F2: F2;

  /** The F3 key. */
  export type F3 = "F3";
  export const F3: F3;

  /** The F4 key. */
  export type F4 = "F4";
  export const F4: F4;

  /** The F5 key. */
  export type F5 = "F5";
  export const F5: F5;

  /** The F6 key. */
  export type F6 = "F6";
  export const F6: F6;

  /** The F7 key. */
  export type F7 = "F7";
  export const F7: F7;

  /** The F8 key. */
  export type F8 = "F8";
  export const F8: F8;

  /** The F9 key. */
  export type F9 = "F9";
  export const F9: F9;

  /** The F10 key. */
  export type F10 = "F10";
  export const F10: F10;

  /** The F11 key. */
  export type F11 = "F11";
  export const F11: F11;

  /** The F12 key. */
  export type F12 = "F12";
  export const F12: F12;

  /** The F13 key. */
  export type F13 = "F13";
  export const F13: F13;

  /** The F14 key. */
  export type F14 = "F14";
  export const F14: F14;

  /** The F15 key. */
  export type F15 = "F15";
  export const F15: F15;

  /** The F16 key. */
  export type F16 = "F16";
  export const F16: F16;

  /** The F17 key. */
  export type F17 = "F17";
  export const F17: F17;

  /** The F18 key. */
  export type F18 = "F18";
  export const F18: F18;

  /** The F19 key. */
  export type F19 = "F19";
  export const F19: F19;

  /** The F20 key. */
  export type F20 = "F20";
  export const F20: F20;

  /** The first general-purpose virtual function key. */
  export type Soft1 = "Soft1";
  export const Soft1: Soft1;

  /** The second general-purpose virtual function key. */
  export type Soft2 = "Soft2";
  export const Soft2: Soft2;

  /** The third general-purpose virtual function key. */
  export type Soft3 = "Soft3";
  export const Soft3: Soft3;

  /** The fourth general-purpose virtual function key. */
  export type Soft4 = "Soft4";
  export const Soft4: Soft4;

  /**
   * Presents a list of recently-used applications which lets the user change
   * apps quickly.
   */
  export type AppSwitch = "AppSwitch";
  export const AppSwitch: AppSwitch;

  /** The Call key. Dials the number which has been entered. */
  export type Call = "Call";
  export const Call: Call;

  /** The Camera key. Activates the camera. */
  export type Camera = "Camera";
  export const Camera: Camera;

  /** The Focus key. Focuses the camera. */
  export type CameraFocus = "CameraFocus";
  export const CameraFocus: CameraFocus;

  /** The End Call or Hang Up button. */
  export type EndCall = "EndCall";
  export const EndCall: EndCall;

  /** The Back button. */
  export type GoBack = "GoBack";
  export const GoBack: GoBack;

  /**
   * The Home button. Returns the user to the phone's main screen
   * (usually an application launcher).
   */
  export type GoHome = "GoHome";
  export const GoHome: GoHome;

  /**
   * The Headset Hook key. This is typically actually a button on
   * the headset which is used to hang up calls and play or pause media.
   */
  export type HeadsetHook = "HeadsetHook";
  export const HeadsetHook: HeadsetHook;

  /** The Redial button. Redials the last-called number. */
  export type LastNumberRedial = "LastNumberRedial";
  export const LastNumberRedial: LastNumberRedial;

  /** The Notification key. */
  export type Notification = "Notification";
  export const Notification: Notification;

  /**
   * A button which cycles among the notification modes: silent, vibrate,
   * ring, and so forth.
   */
  export type MannerMode = "MannerMode";
  export const MannerMode: MannerMode;

  /** The Voice Dial key. Initiates voice dialing. */
  export type VoiceDial = "VoiceDial";
  export const VoiceDial: VoiceDial;

  /** Switches to the previous channel. */
  export type ChannelDown = "ChannelDown";
  export const ChannelDown: ChannelDown;

  /** Switches to the next channel. */
  export type ChannelUp = "ChannelUp";
  export const ChannelUp: ChannelUp;

  /** Starts, continues, or increases the speed of fast forwarding the media. */
  export type MediaFastForward = "MediaFastForward";
  export const MediaFastForward: MediaFastForward;

  /**
   * Pauses the currently playing media.
   * Note: Some older applications use
   * "Pause", but this is not correct.
   */
  export type MediaPause = "MediaPause";
  export const MediaPause: MediaPause;

  /**
   * Starts or continues playing media at normal speed, if not already doing
   * so. Has no effect otherwise.
   */
  export type MediaPlay = "MediaPlay";
  export const MediaPlay: MediaPlay;

  /** Toggles between playing and pausing the current media. */
  export type MediaPlayPause = "MediaPlayPause";
  export const MediaPlayPause: MediaPlayPause;

  /** Starts or resumes recording media. */
  export type MediaRecord = "MediaRecord";
  export const MediaRecord: MediaRecord;

  /** Starts, continues, or increases the speed of rewinding the media. */
  export type MediaRewind = "MediaRewind";
  export const MediaRewind: MediaRewind;

  /**
   * Stops the current media activity (such as playing, recording, pausing,
   * forwarding, or rewinding). Has no effect if the media is currently
   * stopped already.
   */
  export type MediaStop = "MediaStop";
  export const MediaStop: MediaStop;

  /** Seeks to the next media or program track. */
  export type MediaTrackNext = "MediaTrackNext";
  export const MediaTrackNext: MediaTrackNext;

  /** Seeks to the previous media or program track. */
  export type MediaTrackPrevious = "MediaTrackPrevious";
  export const MediaTrackPrevious: MediaTrackPrevious;

  /** Adjusts audio balance toward the left. */
  export type AudioBalanceLeft = "AudioBalanceLeft";
  export const AudioBalanceLeft: AudioBalanceLeft;

  /** Adjusts audio balance toward the right. */
  export type AudioBalanceRight = "AudioBalanceRight";
  export const AudioBalanceRight: AudioBalanceRight;

  /** Decreases the amount of bass. */
  export type AudioBassDown = "AudioBassDown";
  export const AudioBassDown: AudioBassDown;

  /**
   * Reduces bass boosting or cycles downward through bass boost modes or
   * states.
   */
  export type AudioBassBoostDown = "AudioBassBoostDown";
  export const AudioBassBoostDown: AudioBassBoostDown;

  /** Toggles bass boosting on and off. */
  export type AudioBassBoostToggle = "AudioBassBoostToggle";
  export const AudioBassBoostToggle: AudioBassBoostToggle;

  /**
   * Increases the amount of bass boosting, or cycles upward through a set of
   * bass boost modes or states.
   */
  export type AudioBassBoostUp = "AudioBassBoostUp";
  export const AudioBassBoostUp: AudioBassBoostUp;

  /** Increases the amount of bass. */
  export type AudioBassUp = "AudioBassUp";
  export const AudioBassUp: AudioBassUp;

  /** Adjusts the audio fader toward the front. */
  export type AudioFaderFront = "AudioFaderFront";
  export const AudioFaderFront: AudioFaderFront;

  /** Adjusts the audio fader toward the rear. */
  export type AudioFaderRear = "AudioFaderRear";
  export const AudioFaderRear: AudioFaderRear;

  /** Selects the next available surround sound mode. */
  export type AudioSurroundModeNext = "AudioSurroundModeNext";
  export const AudioSurroundModeNext: AudioSurroundModeNext;

  /** Decreases the amount of treble. */
  export type AudioTrebleDown = "AudioTrebleDown";
  export const AudioTrebleDown: AudioTrebleDown;

  /** Increases the amount of treble. */
  export type AudioTrebleUp = "AudioTrebleUp";
  export const AudioTrebleUp: AudioTrebleUp;

  /** Decreases the audio volume. */
  export type AudioVolumeDown = "AudioVolumeDown";
  export const AudioVolumeDown: AudioVolumeDown;

  /** Mutes the audio. */
  export type AudioVolumeMute = "AudioVolumeMute";
  export const AudioVolumeMute: AudioVolumeMute;

  /** Increases the audio volume. */
  export type AudioVolumeUp = "AudioVolumeUp";
  export const AudioVolumeUp: AudioVolumeUp;

  /** Toggles the microphone on and off. */
  export type MicrophoneToggle = "MicrophoneToggle";
  export const MicrophoneToggle: MicrophoneToggle;

  /** Decreases the microphone's input volume. */
  export type MicrophoneVolumeDown = "MicrophoneVolumeDown";
  export const MicrophoneVolumeDown: MicrophoneVolumeDown;

  /** Mutes the microphone input. */
  export type MicrophoneVolumeMute = "MicrophoneVolumeMute";
  export const MicrophoneVolumeMute: MicrophoneVolumeMute;

  /** Increases the microphone's input volume. */
  export type MicrophoneVolumeUp = "MicrophoneVolumeUp";
  export const MicrophoneVolumeUp: MicrophoneVolumeUp;

  /** Switches into TV viewing mode. */
  export type TV = "TV";
  export const TV: TV;

  /** Toggles 3D TV mode on and off. */
  export type TV3DMode = "TV3DMode";
  export const TV3DMode: TV3DMode;

  /** Toggles between antenna and cable inputs. */
  export type TVAntennaCable = "TVAntennaCable";
  export const TVAntennaCable: TVAntennaCable;

  /** Toggles audio description mode on and off. */
  export type TVAudioDescription = "TVAudioDescription";
  export const TVAudioDescription: TVAudioDescription;

  /**
   * Decreases the audio description's mixing volume; reduces the volume of
   * the audio descriptions relative to the program sound.
   */
  export type TVAudioDescriptionMixDown = "TVAudioDescriptionMixDown";
  export const TVAudioDescriptionMixDown: TVAudioDescriptionMixDown;

  /**
   * Increases the audio description's mixing volume; increases the volume of
   * the audio descriptions relative to the program sound.
   */
  export type TVAudioDescriptionMixUp = "TVAudioDescriptionMixUp";
  export const TVAudioDescriptionMixUp: TVAudioDescriptionMixUp;

  /**
   * Displays or hides the media contents available for playback (this may be
   * a channel guide showing the currently airing programs, or a list of
   * media files to play).
   */
  export type TVContentsMenu = "TVContentsMenu";
  export const TVContentsMenu: TVContentsMenu;

  /** Displays or hides the TV's data service menu. */
  export type TVDataService = "TVDataService";
  export const TVDataService: TVDataService;

  /** Cycles the input mode on an external TV. */
  export type TVInput = "TVInput";
  export const TVInput: TVInput;

  /** Switches to the input "Component 1." */
  export type TVInputComponent1 = "TVInputComponent1";
  export const TVInputComponent1: TVInputComponent1;

  /** Switches to the input "Component 2." */
  export type TVInputComponent2 = "TVInputComponent2";
  export const TVInputComponent2: TVInputComponent2;

  /** Switches to the input "Composite 1." */
  export type TVInputComposite1 = "TVInputComposite1";
  export const TVInputComposite1: TVInputComposite1;

  /** Switches to the input "Composite 2." */
  export type TVInputComposite2 = "TVInputComposite2";
  export const TVInputComposite2: TVInputComposite2;

  /** Switches to the input "HDMI 1." */
  export type TVInputHDMI1 = "TVInputHDMI1";
  export const TVInputHDMI1: TVInputHDMI1;

  /** Switches to the input "HDMI 2." */
  export type TVInputHDMI2 = "TVInputHDMI2";
  export const TVInputHDMI2: TVInputHDMI2;

  /** Switches to the input "HDMI 3." */
  export type TVInputHDMI3 = "TVInputHDMI3";
  export const TVInputHDMI3: TVInputHDMI3;

  /** Switches to the input "HDMI 4." */
  export type TVInputHDMI4 = "TVInputHDMI4";
  export const TVInputHDMI4: TVInputHDMI4;

  /** Switches to the input "VGA 1." */
  export type TVInputVGA1 = "TVInputVGA1";
  export const TVInputVGA1: TVInputVGA1;

  /** The Media Context menu key. */
  export type TVMediaContext = "TVMediaContext";
  export const TVMediaContext: TVMediaContext;

  /** Toggle the TV's network connection on and off. */
  export type TVNetwork = "TVNetwork";
  export const TVNetwork: TVNetwork;

  /** Put the TV into number entry mode. */
  export type TVNumberEntry = "TVNumberEntry";
  export const TVNumberEntry: TVNumberEntry;

  /** The device's power button. */
  export type TVPower = "TVPower";
  export const TVPower: TVPower;

  /** Radio button. */
  export type TVRadioService = "TVRadioService";
  export const TVRadioService: TVRadioService;

  /** Satellite button. */
  export type TVSatellite = "TVSatellite";
  export const TVSatellite: TVSatellite;

  /** Broadcast Satellite button. */
  export type TVSatelliteBS = "TVSatelliteBS";
  export const TVSatelliteBS: TVSatelliteBS;

  /** Communication Satellite button. */
  export type TVSatelliteCS = "TVSatelliteCS";
  export const TVSatelliteCS: TVSatelliteCS;

  /** Toggles among available satellites. */
  export type TVSatelliteToggle = "TVSatelliteToggle";
  export const TVSatelliteToggle: TVSatelliteToggle;

  /**
   * Selects analog terrestrial television service (analog cable or antenna
   * reception).
   */
  export type TVTerrestrialAnalog = "TVTerrestrialAnalog";
  export const TVTerrestrialAnalog: TVTerrestrialAnalog;

  /**
   * Selects digital terrestrial television service (digital cable or antenna
   * reception).
   */
  export type TVTerrestrialDigital = "TVTerrestrialDigital";
  export const TVTerrestrialDigital: TVTerrestrialDigital;

  /** Timer programming button. */
  export type TVTimer = "TVTimer";
  export const TVTimer: TVTimer;

  /** Changes the input mode on an external audio/video receiver (AVR) unit. */
  export type AVRInput = "AVRInput";
  export const AVRInput: AVRInput;

  /** Toggles the power on an external AVR unit. */
  export type AVRPower = "AVRPower";
  export const AVRPower: AVRPower;

  /**
   * General-purpose media function key, color-coded red. This has index
   * 0 among the colored keys.
   */
  export type ColorF0Red = "ColorF0Red";
  export const ColorF0Red: ColorF0Red;

  /**
   * General-purpose media function key, color-coded green. This has index
   * 1 among the colored keys.
   */
  export type ColorF1Green = "ColorF1Green";
  export const ColorF1Green: ColorF1Green;

  /**
   * General-purpose media function key, color-coded yellow. This has index
   * 2 among the colored keys.
   */
  export type ColorF2Yellow = "ColorF2Yellow";
  export const ColorF2Yellow: ColorF2Yellow;

  /**
   * General-purpose media function key, color-coded blue. This has index
   * 3 among the colored keys.
   */
  export type ColorF3Blue = "ColorF3Blue";
  export const ColorF3Blue: ColorF3Blue;

  /**
   * General-purpose media function key, color-coded grey. This has index
   * 4 among the colored keys.
   */
  export type ColorF4Grey = "ColorF4Grey";
  export const ColorF4Grey: ColorF4Grey;

  /**
   * General-purpose media function key, color-coded brown. This has index
   * 5 among the colored keys.
   */
  export type ColorF5Brown = "ColorF5Brown";
  export const ColorF5Brown: ColorF5Brown;

  /** Toggles closed captioning on and off. */
  export type ClosedCaptionToggle = "ClosedCaptionToggle";
  export const ClosedCaptionToggle: ClosedCaptionToggle;

  /**
   * Adjusts the brightness of the device by toggling between two brightness
   * levels or by cycling among multiple brightness levels.
   */
  export type Dimmer = "Dimmer";
  export const Dimmer: Dimmer;

  /** Cycles among video sources. */
  export type DisplaySwap = "DisplaySwap";
  export const DisplaySwap: DisplaySwap;

  /** Switches the input source to the Digital Video Recorder (DVR). */
  export type DVR = "DVR";
  export const DVR: DVR;

  /** The Exit button, which exits the current application or menu. */
  export type Exit = "Exit";
  export const Exit: Exit;

  /** Clears the program or content stored in the first favorites list slot. */
  export type FavoriteClear0 = "FavoriteClear0";
  export const FavoriteClear0: FavoriteClear0;

  /** Clears the program or content stored in the second favorites list slot. */
  export type FavoriteClear1 = "FavoriteClear1";
  export const FavoriteClear1: FavoriteClear1;

  /** Clears the program or content stored in the third favorites list slot. */
  export type FavoriteClear2 = "FavoriteClear2";
  export const FavoriteClear2: FavoriteClear2;

  /** Clears the program or content stored in the fourth favorites list slot. */
  export type FavoriteClear3 = "FavoriteClear3";
  export const FavoriteClear3: FavoriteClear3;

  /**
   * Selects (recalls) the program or content stored in the first favorites
   * list slot.
   */
  export type FavoriteRecall0 = "FavoriteRecall0";
  export const FavoriteRecall0: FavoriteRecall0;

  /**
   * Selects (recalls) the program or content stored in the second favorites
   * list slot.
   */
  export type FavoriteRecall1 = "FavoriteRecall1";
  export const FavoriteRecall1: FavoriteRecall1;

  /**
   * Selects (recalls) the program or content stored in the third favorites
   * list slot.
   */
  export type FavoriteRecall2 = "FavoriteRecall2";
  export const FavoriteRecall2: FavoriteRecall2;

  /**
   * Selects (recalls) the program or content stored in the fourth favorites
   * list slot.
   */
  export type FavoriteRecall3 = "FavoriteRecall3";
  export const FavoriteRecall3: FavoriteRecall3;

  /**
   * Stores the current program or content into the first favorites list
   * slot.
   */
  export type FavoriteStore0 = "FavoriteStore0";
  export const FavoriteStore0: FavoriteStore0;

  /**
   * Stores the current program or content into the second favorites list
   * slot.
   */
  export type FavoriteStore1 = "FavoriteStore1";
  export const FavoriteStore1: FavoriteStore1;

  /**
   * Stores the current program or content into the third favorites list
   * slot.
   */
  export type FavoriteStore2 = "FavoriteStore2";
  export const FavoriteStore2: FavoriteStore2;

  /**
   * Stores the current program or content into the fourth favorites list
   * slot.
   */
  export type FavoriteStore3 = "FavoriteStore3";
  export const FavoriteStore3: FavoriteStore3;

  /** Toggles the display of the program or content guide. */
  export type Guide = "Guide";
  export const Guide: Guide;

  /**
   * If the guide is currently displayed, this button tells the guide to
   * display the next day's content.
   */
  export type GuideNextDay = "GuideNextDay";
  export const GuideNextDay: GuideNextDay;

  /**
   * If the guide is currently displayed, this button tells the guide to
   * display the previous day's content.
   */
  export type GuidePreviousDay = "GuidePreviousDay";
  export const GuidePreviousDay: GuidePreviousDay;

  /**
   * Toggles the display of information about the currently selected content,
   * program, or media.
   */
  export type Info = "Info";
  export const Info: Info;

  /**
   * Tells the device to perform an instant replay (typically some form of
   * jumping back a short amount of time then playing it again, possibly but
   * not usually in slow motion).
   */
  export type InstantReplay = "InstantReplay";
  export const InstantReplay: InstantReplay;

  /** Opens content linked to the current program, if available and possible. */
  export type Link = "Link";
  export const Link: Link;

  /** Lists the current program. */
  export type ListProgram = "ListProgram";
  export const ListProgram: ListProgram;

  /** Toggles a display listing currently available live content or programs. */
  export type LiveContent = "LiveContent";
  export const LiveContent: LiveContent;

  /** Locks or unlocks the currently selected content or pgoram. */
  export type Lock = "Lock";
  export const Lock: Lock;

  /**
   * Presents a list of media applications, such as photo viewers, audio and
   * video players, and games. [1]
   */
  export type MediaApps = "MediaApps";
  export const MediaApps: MediaApps;

  /** The Audio Track key. */
  export type MediaAudioTrack = "MediaAudioTrack";
  export const MediaAudioTrack: MediaAudioTrack;

  /** Jumps back to the last-viewed content, program, or other media. */
  export type MediaLast = "MediaLast";
  export const MediaLast: MediaLast;

  /** Skips backward to the previous content or program. */
  export type MediaSkipBackward = "MediaSkipBackward";
  export const MediaSkipBackward: MediaSkipBackward;

  /** Skips forward to the next content or program. */
  export type MediaSkipForward = "MediaSkipForward";
  export const MediaSkipForward: MediaSkipForward;

  /** Steps backward to the previous content or program. */
  export type MediaStepBackward = "MediaStepBackward";
  export const MediaStepBackward: MediaStepBackward;

  /** Steps forward to the next content or program. */
  export type MediaStepForward = "MediaStepForward";
  export const MediaStepForward: MediaStepForward;

  /**
   * Top Menu button. Opens the media's main menu (e.g., for a DVD or Blu-Ray
   * disc).
   */
  export type MediaTopMenu = "MediaTopMenu";
  export const MediaTopMenu: MediaTopMenu;

  /** Navigates into a submenu or option. */
  export type NavigateIn = "NavigateIn";
  export const NavigateIn: NavigateIn;

  /** Navigates to the next item. */
  export type NavigateNext = "NavigateNext";
  export const NavigateNext: NavigateNext;

  /** Navigates out of the current screen or menu. */
  export type NavigateOut = "NavigateOut";
  export const NavigateOut: NavigateOut;

  /** Navigates to the previous item. */
  export type NavigatePrevious = "NavigatePrevious";
  export const NavigatePrevious: NavigatePrevious;

  /** Cycles to the next channel in the favorites list. */
  export type NextFavoriteChannel = "NextFavoriteChannel";
  export const NextFavoriteChannel: NextFavoriteChannel;

  /**
   * Cycles to the next saved user profile, if this feature is supported and
   * multiple profiles exist.
   */
  export type NextUserProfile = "NextUserProfile";
  export const NextUserProfile: NextUserProfile;

  /**
   * Opens the user interface for selecting on demand content or programs to
   * watch.
   */
  export type OnDemand = "OnDemand";
  export const OnDemand: OnDemand;

  /** Starts the process of pairing the remote with a device to be controlled. */
  export type Pairing = "Pairing";
  export const Pairing: Pairing;

  /** A button to move the picture-in-picture view downward. */
  export type PinPDown = "PinPDown";
  export const PinPDown: PinPDown;

  /** A button to control moving the picture-in-picture view. */
  export type PinPMove = "PinPMove";
  export const PinPMove: PinPMove;

  /** Toggles display of the picture-in-picture view on and off. */
  export type PinPToggle = "PinPToggle";
  export const PinPToggle: PinPToggle;

  /** A button to move the picture-in-picture view upward. */
  export type PinPUp = "PinPUp";
  export const PinPUp: PinPUp;

  /** Decreases the media playback rate. */
  export type PlaySpeedDown = "PlaySpeedDown";
  export const PlaySpeedDown: PlaySpeedDown;

  /** Returns the media playback rate to normal. */
  export type PlaySpeedReset = "PlaySpeedReset";
  export const PlaySpeedReset: PlaySpeedReset;

  /** Increases the media playback rate. */
  export type PlaySpeedUp = "PlaySpeedUp";
  export const PlaySpeedUp: PlaySpeedUp;

  /** Toggles random media (also known as "shuffle mode") on and off. */
  export type RandomToggle = "RandomToggle";
  export const RandomToggle: RandomToggle;

  /**
   * A code sent when the remote control's battery is low. This doesn't
   * actually correspond to a physical key at all.
   */
  export type RcLowBattery = "RcLowBattery";
  export const RcLowBattery: RcLowBattery;

  /** Cycles among the available media recording speeds. */
  export type RecordSpeedNext = "RecordSpeedNext";
  export const RecordSpeedNext: RecordSpeedNext;

  /**
   * Toggles radio frequency (RF) input bypass mode on and off. RF bypass
   * mode passes RF input directly to the RF output without any processing or
   * filtering.
   */
  export type RfBypass = "RfBypass";
  export const RfBypass: RfBypass;

  /**
   * Toggles the channel scan mode on and off. This is a mode which flips
   * through channels automatically until the user stops the scan.
   */
  export type ScanChannelsToggle = "ScanChannelsToggle";
  export const ScanChannelsToggle: ScanChannelsToggle;

  /** Cycles through the available screen display modes. */
  export type ScreenModeNext = "ScreenModeNext";
  export const ScreenModeNext: ScreenModeNext;

  /** Toggles display of the device's settings screen on and off. */
  export type Settings = "Settings";
  export const Settings: Settings;

  /** Toggles split screen display mode on and off. */
  export type SplitScreenToggle = "SplitScreenToggle";
  export const SplitScreenToggle: SplitScreenToggle;

  /** Cycles among input modes on an external set-top box (STB). */
  export type STBInput = "STBInput";
  export const STBInput: STBInput;

  /** Toggles on and off an external STB. */
  export type STBPower = "STBPower";
  export const STBPower: STBPower;

  /** Toggles the display of subtitles on and off if they're available. */
  export type Subtitle = "Subtitle";
  export const Subtitle: Subtitle;

  /**
   * Toggles display of teletext,
   * if available.
   */
  export type Teletext = "Teletext";
  export const Teletext: Teletext;

  /** Cycles through the available video modes. */
  export type VideoModeNext = "VideoModeNext";
  export const VideoModeNext: VideoModeNext;

  /**
   * Causes the device to identify itself in some fashion, such as by
   * flashing a light, briefly changing the brightness of indicator lights,
   * or emitting a tone.
   */
  export type Wink = "Wink";
  export const Wink: Wink;

  /**
   * Toggles between full-screen and scaled content display, or otherwise
   * change the magnification level.
   */
  export type ZoomToggle = "ZoomToggle";
  export const ZoomToggle: ZoomToggle;

  /**
   * Presents a list of possible corrections for a word which was incorrectly
   * identified.
   */
  export type SpeechCorrectionList = "SpeechCorrectionList";
  export const SpeechCorrectionList: SpeechCorrectionList;

  /**
   * Toggles between dictation mode and command/control mode. This lets the
   * speech engine know whether to interpret spoken words as input text or as
   * commands.
   */
  export type SpeechInputToggle = "SpeechInputToggle";
  export const SpeechInputToggle: SpeechInputToggle;

  /** Closes the current document or message. Must not exit the application. */
  export type Close = "Close";
  export const Close: Close;

  /** Creates a new document or message. */
  export type New = "New";
  export const New: New;

  /** Opens an existing document or message. */
  export type Open = "Open";
  export const Open: Open;

  /** Prints the current document or message. */
  export type Print = "Print";
  export const Print: Print;

  /** Saves the current document or message. */
  export type Save = "Save";
  export const Save: Save;

  /** Starts spell checking the current document. */
  export type SpellCheck = "SpellCheck";
  export const SpellCheck: SpellCheck;

  /** Opens the user interface to forward a message. */
  export type MailForward = "MailForward";
  export const MailForward: MailForward;

  /** Opens the user interface to reply to a message. */
  export type MailReply = "MailReply";
  export const MailReply: MailReply;

  /** Sends the current message. */
  export type MailSend = "MailSend";
  export const MailSend: MailSend;

  /**
   * The Calculator key, often labeled with an icon. This is often
   * used as a generic application launcher key
   * (APPCOMMAND_LAUNCH_APP2).
   */
  export type LaunchCalculator = "LaunchCalculator";
  export const LaunchCalculator: LaunchCalculator;

  /** The Calendar key. Often labeled with an icon. */
  export type LaunchCalendar = "LaunchCalendar";
  export const LaunchCalendar: LaunchCalendar;

  /** The Contacts key. */
  export type LaunchContacts = "LaunchContacts";
  export const LaunchContacts: LaunchContacts;

  /** The Mail key. Often labeled with an icon. */
  export type LaunchMail = "LaunchMail";
  export const LaunchMail: LaunchMail;

  /** The Media Player key. */
  export type LaunchMediaPlayer = "LaunchMediaPlayer";
  export const LaunchMediaPlayer: LaunchMediaPlayer;

  /** The Music Player key. Often labeled with an icon. */
  export type LaunchMusicPlayer = "LaunchMusicPlayer";
  export const LaunchMusicPlayer: LaunchMusicPlayer;

  /**
   * The My Computer key on Windows keyboards. This is often used
   * as a generic application launcher key
   * (APPCOMMAND_LAUNCH_APP1).
   */
  export type LaunchMyComputer = "LaunchMyComputer";
  export const LaunchMyComputer: LaunchMyComputer;

  /**
   * The Phone key. Opens the phone dialer application (if one is
   * present).
   */
  export type LaunchPhone = "LaunchPhone";
  export const LaunchPhone: LaunchPhone;

  /** The Screen Saver key. */
  export type LaunchScreenSaver = "LaunchScreenSaver";
  export const LaunchScreenSaver: LaunchScreenSaver;

  /** The Spreadsheet key. This key may be labeled with an icon. */
  export type LaunchSpreadsheet = "LaunchSpreadsheet";
  export const LaunchSpreadsheet: LaunchSpreadsheet;

  /**
   * The Web Browser key. This key is frequently labeled with an
   * icon.
   */
  export type LaunchWebBrowser = "LaunchWebBrowser";
  export const LaunchWebBrowser: LaunchWebBrowser;

  /** The WebCam key. Opens the webcam application. */
  export type LaunchWebCam = "LaunchWebCam";
  export const LaunchWebCam: LaunchWebCam;

  /**
   * The Word Processor key. This may be an icon of a specific
   * word processor application, or a generic document icon.
   */
  export type LaunchWordProcessor = "LaunchWordProcessor";
  export const LaunchWordProcessor: LaunchWordProcessor;

  /** The first generic application launcher button. */
  export type LaunchApplication1 = "LaunchApplication1";
  export const LaunchApplication1: LaunchApplication1;

  /** The second generic application launcher button. */
  export type LaunchApplication2 = "LaunchApplication2";
  export const LaunchApplication2: LaunchApplication2;

  /** The third generic application launcher button. */
  export type LaunchApplication3 = "LaunchApplication3";
  export const LaunchApplication3: LaunchApplication3;

  /** The fourth generic application launcher button. */
  export type LaunchApplication4 = "LaunchApplication4";
  export const LaunchApplication4: LaunchApplication4;

  /** The fifth generic application launcher button. */
  export type LaunchApplication5 = "LaunchApplication5";
  export const LaunchApplication5: LaunchApplication5;

  /** The sixth generic application launcher button. */
  export type LaunchApplication6 = "LaunchApplication6";
  export const LaunchApplication6: LaunchApplication6;

  /** The seventh generic application launcher button. */
  export type LaunchApplication7 = "LaunchApplication7";
  export const LaunchApplication7: LaunchApplication7;

  /** The eighth generic application launcher button. */
  export type LaunchApplication8 = "LaunchApplication8";
  export const LaunchApplication8: LaunchApplication8;

  /** The ninth generic application launcher button. */
  export type LaunchApplication9 = "LaunchApplication9";
  export const LaunchApplication9: LaunchApplication9;

  /** The 10th generic application launcher button. */
  export type LaunchApplication10 = "LaunchApplication10";
  export const LaunchApplication10: LaunchApplication10;

  /** The 11th generic application launcher button. */
  export type LaunchApplication11 = "LaunchApplication11";
  export const LaunchApplication11: LaunchApplication11;

  /** The 12th generic application launcher button. */
  export type LaunchApplication12 = "LaunchApplication12";
  export const LaunchApplication12: LaunchApplication12;

  /** The 13th generic application launcher button. */
  export type LaunchApplication13 = "LaunchApplication13";
  export const LaunchApplication13: LaunchApplication13;

  /** The 14th generic application launcher button. */
  export type LaunchApplication14 = "LaunchApplication14";
  export const LaunchApplication14: LaunchApplication14;

  /** The 15th generic application launcher button. */
  export type LaunchApplication15 = "LaunchApplication15";
  export const LaunchApplication15: LaunchApplication15;

  /** The 16th generic application launcher button. */
  export type LaunchApplication16 = "LaunchApplication16";
  export const LaunchApplication16: LaunchApplication16;

  /**
   * Navigates to the previous content or page in the current Web view's
   * history.
   */
  export type BrowserBack = "BrowserBack";
  export const BrowserBack: BrowserBack;

  /** Opens the user's list of bookmarks/favorites. */
  export type BrowserFavorites = "BrowserFavorites";
  export const BrowserFavorites: BrowserFavorites;

  /** Navigates to the next content or page in the current Web view's history. */
  export type BrowserForward = "BrowserForward";
  export const BrowserForward: BrowserForward;

  /** Navigates to the user's preferred home page. */
  export type BrowserHome = "BrowserHome";
  export const BrowserHome: BrowserHome;

  /** Refreshes the current page or content. */
  export type BrowserRefresh = "BrowserRefresh";
  export const BrowserRefresh: BrowserRefresh;

  /**
   * Activates the user's preferred search engine or the search interface
   * within their browser.
   */
  export type BrowserSearch = "BrowserSearch";
  export const BrowserSearch: BrowserSearch;

  /** Stops loading the currently displayed Web view or content. */
  export type BrowserStop = "BrowserStop";
  export const BrowserStop: BrowserStop;

  /**
   * The decimal point key (typically . or
   * , depending on the region).
   * In newer browsers, this value to be the character generated by the
   * decimal key (one of those two characters). [1]
   */
  export type Decimal = "Decimal";
  export const Decimal: Decimal;

  /** The 11 key found on certain media numeric keypads. */
  export type Key11 = "Key11";
  export const Key11: Key11;

  /** The 12 key found on certain media numeric keypads. */
  export type Key12 = "Key12";
  export const Key12: Key12;

  /** The numeric keypad's multiplication key, *. */
  export type Multiply = "Multiply";
  export const Multiply: Multiply;

  /** The numeric keypad's addition key, +. */
  export type Add = "Add";
  export const Add: Add;

  /** The numeric keypad's division key, /. */
  export type Divide = "Divide";
  export const Divide: Divide;

  /** The numeric keypad's subtraction key, -. */
  export type Subtract = "Subtract";
  export const Subtract: Subtract;

  /**
   * The numeric keypad's places separator character.
   * (In the United States this is a comma, but elsewhere it is frequently
   * a period.)
   */
  export type Separator = "Separator";
  export const Separator: Separator;
}

export default Key;
