// Reading settings kept on this device: text size ("", "m" or "l") and focus mode.
export const TEXT_KEY = "vv-text";
export const FOCUS_KEY = "vv-focus";

// Applied before first paint so a remembered size or focus mode doesn't flash.
export const READING_SCRIPT = `try{var r=document.documentElement,s=localStorage.getItem("${TEXT_KEY}"),f=localStorage.getItem("${FOCUS_KEY}");if(s)r.dataset.read=s;if(f==="1")r.dataset.focus="1"}catch(e){}`;
