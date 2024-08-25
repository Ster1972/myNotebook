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
    "title": "ChatGPT",
    "category": "AI Tool",
    "link": "https://chat.openai.com",
    "comment": "ChatGPT is designed to engage in text-based conversations with users, providing responses that are contextually relevant and coherent.",
    "id": "150617b8-fcb7-4594-a5bc-d0212513dee1"
  },
  {
    "title": "Ctrl + Alt + T ( Launch Terminal in Linux)",
    "category": "Linux Keyboard shortcut",
    "link": "",
    "comment": "Used to launch a terminal window",
    "id": "05b8bbe9-4623-4e5a-8c52-e8ce8b838b5d"
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
    "title": "Gemini (Google)",
    "category": "AI Tool",
    "link": "https://gemini.google.com/app",
    "comment": "Allows you to access Google AI model. Similar to ChatGPT.",
    "id": "e443f304-c50c-4fa5-97d2-c4a1a1a1f1b7"
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
    "title": "Windows Key + D (Access Desktop)",
    "category": " Windows Keyboard shortcut",
    "link": "",
    "comment": "This shortcut gets the user to the desktop without having to adjust any of the open windows",
    "id": "458385b8-a9b6-4130-a6eb-a5edb42d9595"
  },
  {
    "title": "Windows Key + H (Voice Dictation)",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Shortcut key to open the Microsoft Speech Services which gives you access to voice dictation",
    "id": "fff55e70-7d74-4e9f-baae-cfe8cbcdc3c9"
  },
  {
    "title": "Ctrl + Windows Key + Q (Windows Quick Assist)",
    "category": "Windows Keyboard shortcut",
    "link": "",
    "comment": "Allows a user to view or control a remote Windows computer over the network or Internet.",
    "id": "eaaf8e15-543e-416e-b349-c2de5a9d78ab"
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
    "title": "VS Code keyboard shortcuts",
    "category": "VS Code",
    "link": "",
    "comment": "Ctrl + Z (undo changes)\r\nCtrl + Y (redo changes)\r\nCtrl + Shift + P (Show Command Palette)",
    "id": "f1ac2f6e-7c37-4754-a9ce-02991bf57713"
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
  }
]
