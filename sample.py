emails = [
    "alertjohn@suspect.com",
    "normaluser@gmail.com",
    "admin@secure.org",
    "johnhackerman@yahoo.com",
    "alertme@trust.com",
    "jane@suspect.com"
]

suspicious =[]

for mail in emails:
    if(mail.endswith('@suspect.com') or mail.startswith('alert') or 'hack' in mail):
        suspicious.append(mail)
print(suspicious)