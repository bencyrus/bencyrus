This is just an idea dump

1. A blog post about moving Glovee's backend. Lessons learned about what tool is good for what job.
- Debate microservices and talk about service oriented architechture in monolith.
- Entangled frontend and business logic.
- Need for a dedicated RESTApi service.
- Transactions. ORMs run them by default but when I ran raw sql, I didn't.
- Benefits of writing raw sql.
- How I ended up turning every query I wrote for go into PL/pgSQL functions.
- Why I decided to completely move off of go (It ended up just being a serializer + email sending and small things like that).
- Validations on input where done in Go at first but processing in Postgres. Did not make sense.
- I saw massive speed of development increase with functions so decided learning PostgREST and fully moving there would be much much faster than turning this go into a nice serializer/http server.
- PostgREST challenges. Point to the article about it.
- Lambda functions, EC2, Services?
- AWS, DO?
- Cold start time of lambda functions. Ease of setup.
- We can do Http calls from within postgres.
- Should we do http calls within it?
- Synchronously calling the function per record vs async.
- Sample query that shows how many times putting functions with side effects calls this:
- How many times is the function ⁠ c() ⁠ called? select vs select distinct.
```sql
select distinct c(), foo_id from hidden_stuff.foo limit 2;
```
![WhatsApp Image 2024-11-02 at 23 03 52](https://github.com/user-attachments/assets/ebf5af86-94a9-488a-8964-534205387bb0)

and this?
```sql
select c(), foo_id from hidden_stuff.foo limit 2;
```
![WhatsApp Image 2024-11-02 at 23 05 30](https://github.com/user-attachments/assets/d72716bc-9ef2-4579-9607-c28190d83c3e)
- One or many services on 1 ec2, multiple docker instances or lambda functions?
- IAM role configurations
- Trust policies.
- Tying ourselves to AWS.


2. My experience writing raw sql. Why this is incredibly useful for both learning and prod.
- How I learned so much about thinking in data and entity relationships, database design.
- So much control over everything that happens to the data.
- Speed.

3. A first timer’s guide to PostgREST or maybe title it Not so obvious at first in PostgREST
- See Glovee's learn section for this. https://github.com/GloveeCRM/glovee-postgrest/blob/main/lessons.md
