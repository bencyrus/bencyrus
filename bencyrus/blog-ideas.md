1. The hiring manager said we want someone who has built something in production. Build something that 1000 people use. I joined that company as a QA engineer and focused one year on building that product. Unfortunatly, I was not able to finish it withing the year because the product I chose was too complex. We did market research, user interviews, built prototypes, abd then built an MVP. Users liked it but needed change so to do it, we basically rewrote the product. In all the iterations, I learned a ton which boosted my confidence massively. I personally builts an equivalant of Notion Forms before Notion forms was released! That was a strategic mistake but a very complex product full of learning opportunities. I lobbied other devs and managers in the company to give me a dev role and they said we won't have a formal leetcode style interview so I did not do a single one for a year. Once a position opened up, I had an interview and even though they said it won't be leetcode style, there it was. I was flustered and did not perform well. I was ready to build a feature or something in the interview. Result was that, "Had you interviewed like this last year, we would have hired you but you did not display the confidence we want for the higher requirements we have this year.". I would have nailed it if I did 1-2 weeks of Leetcode. I am genuinely not a fan. Algorithms feel like a huge waste of time if you like building products. But not doing at least a little of it, is a huge mistake. I am taking two off now + 1 week of holidays to do 30-40 leetcode questions to be ready for the next job openings post holidays. I will also try to finish up the CRM product I have been building for a year. After the interview, I was angry at myself for spending all that time and gaining so much knowledge but having nothing to show for it. So I built an options returns calculator in 2 days. A full, useful project that I use on a daily basis! I got even more frustrated when I realized I could have built something much simpler yet more usable but I also realized I could not have done this in 2 days at least last year. If I didn't setup my db on digitalocean, migrate to AWS RDS, write the backend in NextJS then move to Golang and then rewrite the whole thing with new structures in PL/pgSQL and optimize my editor tool and remove complexicites, I wouldn't be so flexible and quick to learn all the interview prep stuff I am learning. I am also drastically more confident in my abilities now. While this sounds like this sets me up really well to rapidly grow as an engineer, I only have 1.5 years on my work permit so not sure if that matters at all for my current life sitation. Meantime Notion just released their Form builder tool. I felt angry for how nice their experience is compared to mine for basically the exact same functionality as mine. But I felt proud to have built something that functions bascially the same as a product that a large team with massive resources built!

2. My project optioncalc is something I built in 2 days. It is a calculator for myself and a few of my friends who trade options. Initial design was not well thought out since I just wanted to see if such a calculator works for our needs. Turned out surpringly useful. For the calculations in my current design, on every ticker, date, scenario change I make hundereds of http calls to Polygon.io and perform calculations on the results. Then the page and components are re-rendered. Due to the number of calls per request and all the rerenders and unnecessary calls made because of back effect hooks, the processing is not the best. When I deployed it on the Amazon free tier computers, it kept crashing. I kept upping the specs untill I got to a server that works. It costs me 50$ a month to run!!! And that is with a handful of active users. My options are:

- Move the calculations to the user's computer.
- Redesign the NextJS app to be more efficient and make as few calls as possibble. Also do some caching.
  The first one does not work for me since I need to include my API keys on the requests to Polygon.io and I do not want to do that. The second one is a much better solution....