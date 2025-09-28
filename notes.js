const notes = [
  {
    "title": "AllDup",
    "category": "Utility",
    "link": "https://alldup.info/",
    "comment": "AllDup is a freeware tool for searching and removing file duplicates on your Windows computer. The fast search algorithm find duplicates of any file type, e.g., text, pictures, music or movies",
    "id": "e719df4c-382c-49c4-a9f3-1ad5e39082cc"
  },
  {
    "title": "Belarc Advisor",
    "category": "Utility",
    "link": "https://www.belarc.com/products/belarc-advisor",
    "comment": "The Belarc Advisor displays a detailed profile of your installed software, hardware and security vulnerabilities in your Web browser. The Belarc Advisor is licensed for personal use only and is not permitted to be used for any commercial or government purposes. Download link: https://www.belarc.com/products/belarc-advisor/download",
    "id": "04325048-1952-4447-b219-95139c1a131e"
  },
  {
    "id": "150617b8-fcb7-4594-a5bc-d0212513dee1",
    "title": "ChatGPT",
    "category": "AI Tool",
    "link": "https://chat.openai.com",
    "comment": "ChatGPT is designed to engage in text-based conversations with users, providing responses that are contextually relevant and coherent. It also contains other tools such as \"Canvas\" which helps you write code."
  },
  {
    "id": "05b8bbe9-4623-4e5a-8c52-e8ce8b838b5d",
    "title": "Ctrl + Alt + T",
    "category": "Linux Keyboard shortcut",
    "link": "",
    "comment": "Used to launch a terminal window in Linux OS"
  },
  {
    "title": "Delete garbage files from Windows",
    "category": "Windows help",
    "link": " https://www.youtube.com/watch?v=U4132uo1oXc&t=9s",
    "comment": "Improve your Windows performance, fix Windows issues, and reclaim hard-drive space back when you follow these steps.",
    "id": "63d22648-ba1d-4ede-9b56-1da28acfb145"
  },
  {
    "title": "Everything (Search tool)",
    "category": "Windows Utility",
    "link": "https://www.voidtools.com/",
    "comment": "Locate files and folders by name instantly",
    "id": "24c8d52c-cc4d-46d4-b185-09a95bb6bd73"
  },
  {
    "id": "e443f304-c50c-4fa5-97d2-c4a1a1a1f1b7",
    "title": "Gemini (Google)",
    "category": "AI Tool",
    "link": "https://gemini.google.com/app",
    "comment": "This is a suite of generative AI models and tools developed by Google, with significant contributions from DeepMind. Gemini models are multimodal, meaning they can process and generate text, images, and other data types. They are designed for practical applications, such as powering AI apps, assisting with tasks, and integrating into Google's services like Gmail and Google Docs"
  },
  {
    "title": "LockHunter",
    "category": "Window Utility",
    "link": " https://lockhunter.com/index.htm",
    "comment": "It is a free tool to delete files blocked by something you do not know. LockHunter is useful for fighting against malware, and other programs that are blocking files without a reason. Unlike other similar tools it deletes files into the recycle bin so you may restore them if deleted by mistake",
    "id": "9b2e5417-3a86-435d-9b11-188a5336a7e8"
  },
  {
    "title": "Meta AI",
    "category": "AI Tool",
    "link": "https://www.meta.ai",
    "comment": "Meta AI is an intelligent assistant that is capable of complex reasoning, following instructions, visualising ideas, and solving nuanced problems. Competition to ChatGPT.",
    "id": "d3846195-1d64-486e-99f7-fb4b2c4e03db"
  },
  {
    "title": "Node.js Passport Login System Tutorial",
    "category": "YouTube",
    "link": " https://www.youtube.com/watch?v=-RCnNyD0L-s",
    "comment": "Video on user authentication and login.",
    "id": "10f5ba13-7118-4130-87ab-ad5d86fb103e"
  },
  {
    "title": "Norton Bootable Recovery Tool",
    "category": "Recovery Tool",
    "link": " https://support.norton.com/sp/static/external/tools/nbrt.html",
    "comment": "Allows you to create an USB/DVD bootable antivirus checker. This tool is designed to help you when your computer is in dire state due to infection or other issues.",
    "id": "c09b608f-5dc5-48d9-ad0e-18ec10c10363"
  },
  {
    "title": "ToffeeShare (file sharing)",
    "category": "Utility",
    "link": "https://toffeeshare.com",
    "comment": "Share files directly (peer to peer) from any device. Uses webrtc datachannel to perform large file transfer.",
    "id": "3f7a5ad8-977b-4223-8f25-20997d11c0d3"
  },
  {
    "title": "Vaildrive",
    "category": "USB Utility",
    "link": "https://www.grc.com/validrive.htm",
    "comment": "Quickly spot-check any USB-connected mass storage drive for read/write errors and fraud.",
    "id": "4bce1026-5f2f-405e-9205-f3fbfdf58641"
  },
  {
    "title": "WiFi password revealer",
    "category": "Windows Utility",
    "link": "https://www.magicaljellybean.com/wifi-password-revealer/",
    "comment": "WiFi password revealer (finder) is a small freeware utility which will show you all your saved WiFi passwords",
    "id": "6476d735-6985-4511-babc-01f8da39cda3"
  },
  {
    "id": "458385b8-a9b6-4130-a6eb-a5edb42d9595",
    "title": "Windows Key + D ",
    "category": " Windows Keyboard shortcut",
    "link": "",
    "comment": "This shortcut gets the user to the desktop without having to adjust any of the open windows"
  },
  {
    "id": "fff55e70-7d74-4e9f-baae-cfe8cbcdc3c9",
    "title": "Windows Key + H",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Shortcut key to open the Microsoft Speech Services which gives you access to voice dictation"
  },
  {
    "id": "eaaf8e15-543e-416e-b349-c2de5a9d78ab",
    "title": "Ctrl + Windows Key + Q ",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Windows Quick Assist -  Allows a user to view or control a remote Windows computer over the network or Internet."
  },
  {
    "id": "6ba136e2-7365-4491-9ef3-889bd7a23a14",
    "title": "Claude",
    "category": "AI Tool",
    "link": "https://www.anthropic.com/claude",
    "comment": "AI Chatbot.  Claude can conversationally answer prompts for anything you need assistance with including coding, math, writing, research and more."
  },
  {
    "title": "Perplexity",
    "category": "AI Tool",
    "link": "https://www.perplexity.ai",
    "comment": "AI Chat bot. Similiar to ChatGPT.",
    "id": "db4080e7-2b2e-4c5f-bd9a-2a10889d7bc4"
  },
  {
    "title": "DuckDuckGo AI Chat",
    "category": "AI Tool",
    "link": "https://duckduckgo.com/?q=DuckDuckGo&ia=chat&atb=v429-1",
    "comment": "Like ChatGPT",
    "id": "5ba5b0ef-befc-49ee-bf75-d4fd2c957113"
  },
  {
    "title": "Adafruit Blog",
    "category": "Tech News",
    "link": "https://blog.adafruit.com",
    "comment": "The Adafruit Blog is a platform where Adafruit Industries shares updates, tutorials, and news related to DIY electronics and maker projects.",
    "id": "4fa0fdec-1923-4d12-a9f1-568a6dd6803c"
  },
  {
    "title": "AV Interactive",
    "category": "Tech News",
    "link": "https://www.avinteractive.com",
    "comment": "AV Interface is a valuable resource for audiovisual (AV) professionals. It provides AV news and serves as a buyer's guide for pro AV solutions.",
    "id": "8ca5712c-f495-4cd4-bf5d-142e7a499074"
  },
  {
    "title": "Commercial Integrator",
    "category": "Tech News",
    "link": "https://www.commercialintegrator.com",
    "comment": "Commercial Integrator is a publication dedicated to the business needs of professional integrators who serve the small and midsize business (SMB) market.",
    "id": "3c9b6cc8-af14-4917-a2af-b96dd2a94c48"
  },
  {
    "id": "189fd87d-d2af-4b11-a77d-e725398b9761",
    "title": "Computer Weekly",
    "category": "Tech News",
    "link": "https://www.computerweekly.com",
    "comment": "Computer Weekly is a comprehensive source for the latest information technology (IT) news, analysis, and jobs.  It covers a wide range of topics including IT management, technology trends, cyber-security, and more."
  },
  {
    "title": "Digital AV Magazine",
    "category": "Tech News",
    "link": "https://www.digitalavmagazine.com/en/",
    "comment": "Digital AV Magazine is a professional portal that provides information on the latest technologies and trends in audio and video professional environments.",
    "id": "23202d36-ed2d-48b2-9586-74342d03f55e"
  },
  {
    "title": "GoAndroid",
    "category": "Tech News",
    "link": "https://www.thegoandroid.com",
    "comment": "GoAndroid is a website that covers Android-related news, updates and gossip.",
    "id": "a3a46b51-8f11-403a-aebd-36c6aaa1fa42"
  },
  {
    "title": "IT World Canada",
    "category": "Tech News",
    "link": "https://www.itworldcanada.com",
    "comment": "IT World Canada is a leading online resource for IT professionals in Canada.",
    "id": "c58ae225-99a8-4fd8-bf6c-dcc431f1a52e"
  },
  {
    "title": "ITPro Today",
    "category": "Tech News",
    "link": "https://www.itprotoday.com",
    "comment": "ITPro Today is a valuable resource for IT professionals. It provides daily news, analysis, opinions, and how-to's related to the information technology industry. It also has information on IT security.",
    "id": "d6d15029-8c97-4f45-9aa8-26b1a324e442"
  },
  {
    "title": "Linux Magazine",
    "category": "Tech News",
    "link": "https://www.linux-magazine.com",
    "comment": "",
    "id": "a28878c1-fac3-4fbd-8f0a-5c826d449fbb"
  },
  {
    "title": "Network Computing",
    "category": "Tech News",
    "link": "https://www.networkcomputing.com",
    "comment": "Network Computing is a website that provides IT professionals with news, analysis, and insights on various topics related to networking and IT infrastructure.",
    "id": "81a07b54-e06a-4dce-816b-8648b73c58fc"
  },
  {
    "title": "PC Magazine",
    "category": "Tech News",
    "link": "https://www.pcmag.com",
    "comment": "PCMag is a well-known technology publication that provides comprehensive reviews, news, tips and deals on a wide range of tech products and services.",
    "id": "cd660c16-faf7-427d-ab73-23e8d91a6aad"
  },
  {
    "title": "PC World",
    "category": "Tech News",
    "link": "https://www.pcworld.com",
    "comment": "PC World is an online publication that focuses on various aspects of personal technology such as mainstream PC hardware components, software and utilties.",
    "id": "48519a0f-ea6b-4054-b280-d62be64be62b"
  },
  {
    "title": "rAVe PUBS",
    "category": "Tech News",
    "link": "https://www.ravepubs.com",
    "comment": "rAVe PUBS is a news organization that focuses on the audiovisual (AV) industry. They cover a wide range of topics related to both commerical (ProAV) and residential (HomeAV) audiovisual markets.",
    "id": "7f05a9fd-0e57-4995-9306-f89d1b21f262"
  },
  {
    "title": "TechPowerUP",
    "category": "Tech News",
    "link": "https://www.techpowerup.com",
    "comment": "TechPowerUp is a website that covers the latest news, reviews, and opinions on hardware and gaming topics.",
    "id": "023a47b6-e216-49c6-9a4a-33508df4b351"
  },
  {
    "title": "techradar",
    "category": "Tech News",
    "link": "https://www.techradar.com",
    "comment": "TechRadar is a website that provides the latest technology news, reviews and features.",
    "id": "b61e2a41-943f-46f3-a77d-412344878537"
  },
  {
    "title": "The New Stack",
    "category": "Tech News",
    "link": "https://thenewstack.io",
    "comment": "The New Stack is a media platform that provides context and explanation of at-scale technologies. It covers modern architectures, components of the software development life cycle, and operations tools and culture.",
    "id": "4208ef9a-7284-4e54-80e9-ae4a443f01dc"
  },
  {
    "title": "TheWindowClub",
    "category": "Tech News",
    "link": "https://news.thewindowsclub.com",
    "comment": "TheWindowsClub News is a website that covers a wide range of technology news and developments, with a particular focus on Microsoft Windows software and services, as well as the Internet in general.",
    "id": "444d3ed5-940d-4f21-8ce6-d20686f6a0e0"
  },
  {
    "title": "UbuntuPit",
    "category": "Tech News",
    "link": "https://www.ubuntupit.com",
    "comment": "UbuntuPit is a leading technology blog focused on Ubuntu Linux and other open-source software. It offers a wide range of content, including news, tutorials, reviews and guides.",
    "id": "b320780e-fc8e-48dc-8b8d-67074124a3c8"
  },
  {
    "title": "Wonder How To",
    "category": "Tech News",
    "link": "https://null-byte.wonderhowto.com",
    "comment": "WonderHowTo is a comprehensive platform that offers a wide range of how-to videos and tutorials across various topics. This site is organized into niche communities called \"Worlds\".  These include WonderHowTo, Gadgets Hacks, Next Reality and Null Byte.",
    "id": "848beae8-2b9b-4995-90f6-e5d823bc28ee"
  },
  {
    "title": "XDA Developers",
    "category": "Tech News",
    "link": "https://www.xda-developers.com",
    "comment": "XDA Developers is a tech site that covers a wide range of topics related to computing. ",
    "id": "4c5eb497-9f83-4577-9482-a4b6f56333a6"
  },
  {
    "title": "ZDNET",
    "category": "Tech News",
    "link": "https://www.zdnet.com",
    "comment": "ZDNET is a technology news website that provides the latest updates, reviews and advice on various tech innovations and products which include software, hardware, cyber-security and emerging technologies.",
    "id": "c2cbb15a-fb85-4ac7-9006-cd9f20d56da2"
  },
  {
    "title": "Ctrl + C",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Copy selected text or item",
    "id": "e68ab506-8e2c-4520-9175-0bd593a3f8ba"
  },
  {
    "title": "Ctrl + V",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Paste copied text or item",
    "id": "cf931f3c-93d8-4af0-8047-96ad7be823bc"
  },
  {
    "title": "Ctrl + X",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Cut selected text or item",
    "id": "e7a1cddd-28ce-40b8-b1d2-741992bd9ed6"
  },
  {
    "title": "Ctrl + Z",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Undo last action",
    "id": "57d7eb73-1c80-4af0-9640-079b005ae2ca"
  },
  {
    "title": "Ctrl + Y",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Redo the last action",
    "id": "7eca3e0e-3d14-4815-9c09-77ad0ac5edd3"
  },
  {
    "title": "Ctrl + A",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Select all items in a document or window",
    "id": "e6257d0c-68b7-424f-9ac6-c946e67a99ff"
  },
  {
    "title": "Ctrl + F",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Open the Find dialog to search for text with a document or web page",
    "id": "c0e278d4-4738-4cef-9b5a-d38c1c49f039"
  },
  {
    "title": "Ctrl + S ",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Save the current document or file",
    "id": "11f26a6d-d00c-451d-af97-d38f30c7d1e0"
  },
  {
    "title": "Ctrl + P",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Print the current document or page",
    "id": "e6cc5112-aaa1-4b7f-983d-7d806630ae76"
  },
  {
    "title": "Ctrl + Shift + T",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Reopen the last closed tab in a browser",
    "id": "c04b9a9f-f912-41a8-8684-248368c1b9df"
  },
  {
    "title": "Alt + Tab",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Switch between open applications",
    "id": "2e86f5bc-ccaa-45cd-8eb8-91608b2e3797"
  },
  {
    "title": "Alt + F4",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Close the active window or application",
    "id": "6d49512a-27d9-4a54-a8ee-2f6c7567db24"
  },
  {
    "title": "Windows Key + D",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Minimize all windows and show the decktop",
    "id": "c804e3d3-2b03-4796-8f0b-29ab4dcf354b"
  },
  {
    "title": "Windows Key + E",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Open File Explorer",
    "id": "3ece0ec6-1bc8-4929-b74c-59d139879cf7"
  },
  {
    "title": "Windows Key + Tab",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Open Task View to see all open windows",
    "id": "26cebf41-7dd3-497a-962d-11d27705c46f"
  },
  {
    "title": "Windows Key + S",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Open the Search bar to find apps, file, or web results",
    "id": "f6b102ff-89d4-495b-b9e4-7ed523eddeb3"
  },
  {
    "title": "Wi;ndows + I",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Open Settings",
    "id": "20e6c607-9748-4a3d-9de8-728cc89cd4c2"
  },
  {
    "title": "Ctrl + Shift + Esc",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Open Task Manager directly",
    "id": "06dcd3aa-4a31-42f9-9391-a0b7159a5778"
  },
  {
    "title": "Ctrl + Windows Key + Left/Right Arrow",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Snap windows to the left or right of the screen, or switch between virtual desktops",
    "id": "60ff9699-972e-4778-92f5-f3c88b2a1fcf"
  },
  {
    "title": "Ctrl + N",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Open a new window or document",
    "id": "e173a52f-26ba-464d-91f0-334bdd169cfe"
  },
  {
    "title": "Ctrl + R or F5",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Refresh the current page or window",
    "id": "7ec4f8cd-b8f1-48a2-9442-c2de7aa3a8ac"
  },
  {
    "title": "Windows Key + Up Arrow",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Maximize the current window",
    "id": "c3329b27-392e-4553-82e3-cd14205b3884"
  },
  {
    "title": "Windows Key + Down Arrow",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Minimize the current window or restore it if it's maximized",
    "id": "d821d316-509b-4528-acea-b00796a4b695"
  },
  {
    "title": "Windows  Key + P",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Open display settings to project to a second screen or manage multiple monitors",
    "id": "87a8274f-0732-4e4a-a331-d6322b58fccf"
  },
  {
    "title": "Windows Key + \"+\"",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Open the Magnifier tool for zooming in on the screen",
    "id": "b8ca9aca-0412-4b90-93fc-ecf12ba2c2e5"
  },
  {
    "title": "F2",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Rename the selected file or folder",
    "id": "ed72fccc-a7d9-4fb4-a0cb-2d11b07b5294"
  },
  {
    "title": "Ctrl + Shift + Delete",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Open options to clear browsing data in most browsers",
    "id": "39815daf-e08f-494b-ae35-4602e47b898a"
  },
  {
    "title": "Ctrl + Right/Left Arrow",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Move the cursor to the beginning of the next or previous word in text editing",
    "id": "602c9190-8266-4ea1-9937-10bcb3af3a05"
  },
  {
    "title": "Ctrl + Backspace",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Delete the previous word in text editing",
    "id": "29832c1a-5bcd-4259-ad89-359ba9e6a899"
  },
  {
    "title": "Shift + Delete",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Permanently delete selected items (bypasses the Recycle Bin)",
    "id": "f6c8f937-d089-4fc3-b4b8-7b8474c13967"
  },
  {
    "title": "Alt + Enter",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Open properties for the selected item (file, folder, etc...)",
    "id": "b69bcc0e-8e16-44cb-9698-cf0e3c939278"
  },
  {
    "title": "Windows Key + V",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Open the clipboard history",
    "id": "d6a9d6ff-583a-47f3-b38e-9c94de764a46"
  },
  {
    "title": "Windows Key + Ctrl + D",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Create a new virtual desktop",
    "id": "1ea8640d-32e0-4b2f-986c-eaef57c958d6"
  },
  {
    "title": "Ctrl + T",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Open a new tab",
    "id": "0e7131e4-43ec-430e-93d8-cc4254387cf2"
  },
  {
    "title": "Ctrl + W",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Close the current tab",
    "id": "22081c7f-60fe-423d-a662-d48d94acbe2a"
  },
  {
    "title": "Ctrl + Shift + T",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Reopen the last closed tab",
    "id": "3f122c97-631b-487d-b5ff-da8eddc707e6"
  },
  {
    "title": "Ctrl + T",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Switch to the next open tab",
    "id": "ba843386-dd4d-40fb-9ac5-5d3ba8ee95e3"
  },
  {
    "title": "Ctrl +Shift + Tab",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Switch to the previous open tab",
    "id": "ea6c49d8-0fba-4b87-a29c-2a85b13e404b"
  },
  {
    "title": "Ctrl + L",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Highlight the full address bar",
    "id": "71bd926f-ec17-4c07-885f-628ebb1c2fd3"
  },
  {
    "title": "Ctrl + Shift + N",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Open a new private or incognito window (works in most browsers)",
    "id": "878f40d6-7e25-4d5c-9def-fe55d7636380"
  },
  {
    "title": "Google Passkey",
    "category": "Security",
    "link": "https://www.google.com/account/about/passkeys/",
    "comment": "Passkey are a more secure alternative to passwords. They let you sign in with your fingerprint, face scan or screen lock.",
    "id": "9b75e568-383a-4d6e-b396-f17d6d4f4c67"
  },
  {
    "title": "Lexica",
    "category": "AI Tool",
    "link": "https://lexica.art/",
    "comment": "Lexica Art is an AI-powered platform that combines an image search engine with a text-to-image generation tool. It utilizes the Stable Diffusion model to create and curate diverse artworks. Users can enter text to explore a vast gallery of AI-generated images or create their own.",
    "id": "8fedb236-17f5-4bb4-aae9-12e5187582f6"
  },
  {
    "title": "Heygen",
    "category": "AI Tool",
    "link": "https://www.heygen.com/",
    "comment": "Heygen is an innovative AI-powered video generation platform that allows users to create professional-quality video quickly and easily.  It offers a range of features, including customizable AI avatars, text-to-speech capabilities in multiple languages, and a wide variety of video templates. Has three AI avatars.",
    "id": "35272a3d-106c-4cfe-b575-02fe34b800f3"
  },
  {
    "id": "524801f4-5b92-4824-b83d-03b13d1ce7c0",
    "title": "Colossyan",
    "category": "AI Tool",
    "link": "https://colossyan.com",
    "comment": "Colossyan.com is a platform that provides AI-powered tools for creating realistic video content. The service allows users to generate videos featuring virtual presenters or avatars, which can speak text in multiple languages, making it particularly useful for creating training videos, tutorials, presentations, or marketing content without needing a human presenter"
  },
  {
    "title": "Quanta Magazine",
    "category": "Tech News",
    "link": "https://www.quantamagazine.org/",
    "comment": "Science and Math News",
    "id": "77509ad0-9bb1-40e3-a7f7-213253f79981"
  },
  {
    "title": "Grok",
    "category": "AI Tool",
    "link": "https://grok.com",
    "comment": "\"Grok.com\" is associated with xAI, an AI company founded by Elon Musk. It offers advanced AI tools, including Grok 3, which specializes in reasoning, coding, and problem-solving. Grok.com provides access to these tools, allowing users to explore AI capabilities for tasks like document summarization, coding assistance, and real-time data analysis",
    "id": "92783077-4443-4424-aa0d-3afdbff06062"
  },
  {
    "title": "Google DeepMind",
    "category": "AI Tool",
    "link": "https://deepmind.google",
    "comment": "This is Google's advanced AI research lab, originally founded as \"DeepMind\" before being acquired by Google. It focuses on cutting-edge AI research and development, including breakthroughs in reinforcement learning, neural networks, and applications like AlphaGo and AlphaFold.",
    "id": "f096e661-966c-4ab9-8801-72873ec7ab9e"
  },
  {
    "title": "NotebookLM",
    "category": "AI Tool",
    "link": "https://notebooklm.google.com",
    "comment": "It’s designed to act as a virtual collaborator, making it easier to synthesize complex information and refine ideas. NotebookLM also offers features like audio overviews, where users can listen to summaries of their research. It helps users organize, summarize, and interact with their information more effectively. By uploading documents, notes, or web content, NotebookLM can analyze the material, extract key details, and create summaries, timelines, FAQs, study guides, and even mind maps.",
    "id": "e5ef5073-0b23-4864-9745-c2d42b591e65"
  },
  {
    "title": "Chef",
    "category": "AI Tool",
    "link": "https://chef.convex.dev",
    "comment": "Chef by Convex is an AI-powered tool designed to help developers create full-stack, real-time web applications with ease. It leverages Convex's backend capabilities to handle complex tasks like database management, authentication, file uploads, and real-time user interfaces. Chef is particularly adept at building applications such as multiplayer games, social platforms, and AI-powered tools.\r\n\r\nWhat sets Chef apart is its focus on backend engineering, using Convex's APIs to simplify challenges like concurrency, consistency, and caching. It also offers features like instant hosting, project sharing, and built-in dashboards for seamless app development.",
    "id": "76f14a3a-dba6-43da-aac4-35c00f4cbe33"
  },
  {
    "title": "Deepsite AI",
    "category": "AI Tool",
    "link": "https://enzostvs-deepsite.hf.space",
    "comment": "DeepSite AI is an AI-powered website generator that allows users to create professional websites without coding. It uses DeepSeek V3 technology to generate responsive designs, optimize SEO, and provide real-time previews1. DeepSite AI supports various website types, including business sites, blogs, e-commerce platforms, portfolios, and landing pages.",
    "id": "53d73ae1-aa9d-4c30-9c5f-27ef53c52508"
  },
  {
    "title": "Hugging Face Ai",
    "category": "AI Tool",
    "link": "https://huggingface.co",
    "comment": "Hugging Face is an open-source platform that provides tools for building, sharing, and collaborating on machine learning models",
    "id": "1af0d8b2-7770-4e85-9465-371ee56c2ee8"
  },
  {
    "title": "V0 Dev",
    "category": "AI Tool",
    "link": "https://v0.dev",
    "comment": "V0.dev is a platform by Vercel that allows users to generate UI components, code, and entire projects using AI-powered prompts. It supports frameworks like React, Vue, Svelte, and HTML with CSS, making it a useful tool for developers looking to streamline their workflow.\r\n\r\nIt also offers Blocks, which are unique content types that unlock new functionality, such as UI generation and code execution",
    "id": "eae50960-3225-49d6-9ff9-3727641fe6e0"
  },
  {
    "title": "Firebase Studio",
    "category": "AI Tool",
    "link": "https://firebase.studio/",
    "comment": "Firebase Studio is a full-stack AI workspace that helps developers build, test, and deploy applications efficiently. It integrates AI-powered tools like Gemini in Firebase, allowing users to code, debug, and optimize their projects with AI assistance.",
    "id": "cc1cf701-611b-43b0-90b9-40a7332b39aa"
  },
  {
    "title": "Claude",
    "category": "AI Tool",
    "link": "https://claude.ai",
    "comment": "Claude is an AI assistant developed by Anthropic. It's designed to be safe, accurate, and secure, helping users with tasks like drafting content, generating code, analyzing text and images, and more.",
    "id": "909348b9-4684-4eed-a75b-dafff045918b"
  },
  {
    "title": "YouLearn",
    "category": "AI Tool",
    "link": "https://app.youlearn.ai",
    "comment": "YouLearn is an AI-powered learning assistant designed to help students understand their lecture materials more effectively. It allows users to upload content like YouTube videos, PDFs, slides, and recorded lectures, then interact with an AI tutor that provides summaries, key takeaways, quizzes, and personalized exams2.\r\n\r\nIt’s built to make studying more efficient by offering features like flashcards, voice mode, and answer breakdown",
    "id": "c08192b0-660a-4902-b480-2812a34040df"
  },
  {
    "title": "GenSpark",
    "category": "AI Tool",
    "link": "https://www.genspark.ai",
    "comment": "Genspark is an AI-powered search and research engine designed to assist users with various tasks, from analyzing data to planning travel and generating reports. It features specialized AI agents that perform deep research and create custom pages called Sparkpages, which synthesize trustworthy information without SEO-driven biases2. Users can interact with AI agents to receive summaries, break down complex text, and explore different types of searches, including travel, product, and image searches.",
    "id": "10a5ef88-c893-47a5-b691-d12f07107703"
  },
  {
    "title": "Notion",
    "category": "AI Tool",
    "link": "https://www.notion.com",
    "comment": "Notion is an all-in-one workspace designed for wikis, docs, projects, and collaboration. It combines note-taking, project management, and knowledge sharing into a single platform, making it a powerful tool for individuals and teams.\r\n\r\nWith Notion, you can:\r\n\r\nCreate and organize documents with AI-assisted editing. \r\nManage projects and tasks using custom views like calendars and boards.\r\nCollaborate with teams through shared spaces and integrations.\r\nUse AI-powered search to find information across your workspace.\r\n\r\nIt’s widely used by businesses, students, and creatives to streamline workflows and keep everything in one place. You can explore more about Notion",
    "id": "3ca70c52-19ad-40f0-8c39-e9ddae3bee7f"
  },
  {
    "title": "Windows Key + Shift Key + R",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Starts the Snipping Tool video record feature. Also can be reached via the Snipping Menu.",
    "id": "3334e9c7-3c09-46af-9678-3318a223c96c"
  },
  {
    "title": "Claude Code",
    "category": "Coding",
    "link": "https://www.anthropic.com/claude-code",
    "comment": "Claude Code is an agentic coding tool developed by Anthropic that integrates directly into a developer's terminal. It allows users to edit files, fix bugs, execute tests, and manage repositories.",
    "id": "b8b83a24-5668-4804-b35d-1d9f26125290"
  },
  {
    "title": "Vectal AI",
    "category": "Coding",
    "link": "https://www.vectal.ai/login",
    "comment": "Vectal.ai is an AI-powered productivity app that leverages cutting-edge models like o3 to help users work more efficiently. It offers AI agents designed to streamline workflows and enhance productivity",
    "id": "cdbdfeee-665a-41a2-8801-33cd05a2500d"
  },
  {
    "title": "It's Foss News",
    "category": "Tech News",
    "link": "https://news.itsfosss.com",
    "comment": "Provides the latest Linux distributions: announcements, beta releases, and updates for distros like Ubuntu, Fedora, Debian, Zorin OS, etc",
    "id": "bb5f6baf-c93a-4395-b556-d38a9d5f6a5e"
  }
]