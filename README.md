# Autario Votes - Simcoe County (Provincial & Municipal Elections)

A non-partisan, community-maintained civic resource covering both **Ontario Provincial Elections** and **Simcoe County Municipal Elections**. Created and maintained by the Simcoelandic Autarian Development Corporation.

## Dual Election Switcher

The website features an election level drop-down selector at the top of every page allowing voters to toggle instantly between:
1. 🏛️ **Ontario Provincial Elections**:
   - 5 Provincial Ridings (*Barrie—Innisfil*, *Barrie—Springwater—Oro-Medonte*, *Simcoe—Grey*, *Simcoe North*, *York—Simcoe*)
   - Sitting Members of Provincial Parliament (MPPs) in the 44th Parliament of Ontario
   - Results from the February 27, 2025 General Election and September 3, 2026 York—Simcoe By-Election
   - Official Elections Ontario voting regulations and identification rules under the *Election Act*
2. 🏙️ **Simcoe County Municipal Elections**:
   - **Mayors & Deputy Mayors** across all 18 Simcoe County municipalities (16 towns/townships + 2 separated cities: Barrie & Orillia)
   - **Wardens & County Council**: County of Simcoe 32-member Council led by Warden Basil Clarke (Mayor of Ramara) and Deputy Warden Jennifer Coughlin (Mayor of Springwater)
   - **Municipal Councillors**: Comprehensive roster of Ward and At-Large councillors for all 18 local councils
   - **School Board Trustees**: Trustee ward allocations across all 4 regional school boards (SCDSB English Public, SMCDSB English Catholic, CSV French Public, MonAvenir French Catholic)
   - Voting rules under the *Municipal Elections Act, 1996* (including non-resident property owner/cottager voting rights, internet/telephone voting, and preliminary voter lookup via VoterLookup.ca)
   - Key dates for the **Monday, October 26, 2026** municipal voting day

## Features

- **Interactive Level Selector**: Switch between Provincial and Municipal modes in the header. The selection is preserved across navigation via `localStorage` and URL parameters (`?election=provincial` or `?election=municipal`).
- **Comprehensive Candidate Directory**: Filter by provincial ridings or municipal offices (Mayors, Councillors, School Board Trustees).
- **Municipalities Directory**: Cross-references local municipal governments with their provincial ridings and sitting MPPs.
- **Dual How-to-Vote Guide**: Distinct step-by-step voting guides for Elections Ontario provincial procedures and Municipal Elections Act rules.
- **Public Affairs & Media Hub**: Official government portals, school board links, Queen's Park reporting, and local Simcoe County news outlets.

## Contributing

This site is open source. You can contribute representative information, update constituency offices, fix errors, or suggest improvements.
* To submit changes, open a pull request on GitHub.
* To add or update candidate information, inspect [/src/content/candidates](https://github.com/JmaJeremy/autario-votes/tree/main/src/content/candidates) and [/src/data/](https://github.com/JmaJeremy/autario-votes/tree/main/src/data/).
* Candidate photos can be placed in [/public/images/candidates](https://github.com/JmaJeremy/autario-votes/tree/main/public/images/candidates).

## License

This site is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](LICENSE.md).

## Privacy Policy

This site does not collect personal voter information. It is a static site generated using Astro and deployed to Cloudflare Pages.