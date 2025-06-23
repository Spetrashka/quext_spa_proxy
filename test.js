import { exec } from "child_process";

const COMMUNITY_ID = "2736838d-d952-4fba-960e-333326ff4e42";

const curlCommand = `curl -s 'https://report.prod.quext.io/api/v1/cube/IOTU04_H1?endDate=02%2F28%2F2025&startDate=02%2F20%2F2025' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:136.0) Gecko/20100101 Firefox/136.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: be,en-US;q=0.7,en;q=0.3' -H 'Accept-Encoding: gzip, deflate, br, zstd' -H 'Authorization: Bearer eyJraWQiOiJxNFczSlRCdjFhaVdXUFVxNXA4TVwvUjE5Yk5qdlNNeUdUSk5WZFZIc3c2cz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIwODA2ZGJiZi02MWExLTQ1ZTYtOGFjYi03N2E4MzRhZTE4MWUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfcUxpeVRmVlZHIiwiY29nbml0bzp1c2VybmFtZSI6ImIyZGIzMWE4LTQ2YTctNGQxZi04YmYwLTkxNGM1MGM3YmQzNSIsIm9yaWdpbl9qdGkiOiJhYzBmNjBmMi01YjVlLTQ3NDItYmViMy02MTQzZmY5NzgwMGQiLCJhdWQiOiIxOGNudDRwcG5lN2NsaXI3YzhpMjR0cmhmMiIsImV2ZW50X2lkIjoiMjRjYTk2NzctNDJmOC00ZWU3LTg4NTAtMTc3YmM2YzE4YjcxIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3NDY3MDk0NDcsImV4cCI6MTc0NjcxMzEwNywiaWF0IjoxNzQ2NzA5NDQ3LCJqdGkiOiJjMWUwNDE1MC1kNWMzLTQyM2YtYmY1ZS05YzUyYmIyMDgzMWQiLCJlbWFpbCI6InNwZXRyYXNoa2ErcHJvZEBrbGlrYS10ZWNoLmNvbSJ9.WWxRouimeHllDuCNmLanVWBJueEw98SVMgu77ZFRl2r5fkxtAob2RmQ2fv3VaUJ43tdGObWy1R3eqaKOhL8zUQJvTHHCROYX0sPtUz2l8yfz6iiramKaTExV_QfR23h5jNo0ujRmqzieF6D6j0oCI9rSOeRjI-qJwXwi0EDSc7LTCiRqckQtIIYd4ub1uQ7LjxUNiAaFFkNdHF46jfFQuQAanP94RvoHnB4GYRfLPd2RpMsVYs3hs7aEDZZDJ8g7BWrVqeW0SVyPGRifMXe9BL9kHla0RcSTXPM6FGfKOrIMX5dU9yYNqMhEHeQ_sRt4PjwM8pODMlY6xb5jcSt7Qg' -H 'X-Customer-User-Id: f7fd28cc-01cf-4b4f-918b-5af090535ea4' -H 'X-Quext-Customer: 2c9bb09c-a76d-4e85-873f-b69499c51897' -H 'X-Quext-Customer-Id: 2c9bb09c-a76d-4e85-873f-b69499c51897' -H 'X-Quext-Community-Id: ${COMMUNITY_ID}' -H 'x-quext-access-quext-admin: true' -H 'x-quext-community-ids: {"comIds":[{"id":"${COMMUNITY_ID}","name":"The Armstrong at Knox","timezoneId":"US/Central"}]}' -H 'Origin: https://quext.io' -H 'Connection: keep-alive' -H 'Referer: https://quext.io/' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-site' -H 'TE: trailers'`;

exec(curlCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`Response:\n${stdout}`);
});
