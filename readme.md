### AI Gen Avatar
* Front End 
* OAuth with Cognito
* Lambda Functions 
* Stripe Connection 
* OpenAI [source](https://platform.openai.com/docs/api-reference/images/createEdit)


### Billing Source


<details>
    <summary> Generate Image </summary>

* my gmail 17 has account, 
* Each image is 0.04$ charge as 
```javascript
// send request 
curl https://api.openai.com/v1/images/generations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "prompt": "generate Futuristic  man live in Cyberpunk city",
    "n": 1,
    "size": "256x256"
  }'
"
// receive request 
{
  "created": 1693678029,
  "data": [
    {
      "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-wQI16QAQuchnwernDyasqH2a"
    },
    {
      "url": "https://oaidalleapiprodscus.blob.core.windows.net"
    }
  ]
}
```
* More prompts:
```javascript
// add below keys before any promot start description 
- Luminous, Transcendent, Innovative, Futurism ,Cyberpunk  Hypnotic  city
// like below
- Cyberpunk  face enhance animate enhance  a beautiful woman
- generate Innovative  man with eyeglasses in space city
- generate Futurism  man
// add below if there is a man/woman 
- add generate generate beautiful fashion, looks like real  before creation
- face enhance animate enhance  
```
* Extended version
```javascript
// convert image to proper format first using imagemagick
convert img1.png -type TrueColor -define png:color-type=6 otter_rgba.png

curl https://api.openai.com/v1/images/edits \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F image="@otter_rgba.png" \
  -F mask="@otter_rgba.png" \
  -F prompt="A cool man with eyeglass" \
  -F n=1 \
  -F size="256x256"
```
</details>

## FrontEnd

* A react app




