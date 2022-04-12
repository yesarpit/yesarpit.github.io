
# Vulnerabilities 
##Cross Site Scripting
#### It Allows attacker to introduce malicious script into webpages.

### Types of XSS:



1) Stored XSS: This is usually a <script> abc </script> written in form, so that when the form is submitted, this malicious script is triggered/stored in db - its called as stored because malicious script is stored by web application and later presented to unsuspecting victim

2) Reflected XSS: (also called a non-persistent XSS attack)
attacker can make user click on a link which takes to search engine with the malicious script appended in url. result of which user will get ticked to believe that content is coming from search engine and hence this is reflected xss.

![Image](https://i.ibb.co/25yVh47/reflected-cross-site-scripting.jpg)

3) DOM Based XSS:
In both the above types backend in impacted, however in below server is not reached and attack happens in the browser , server never knows about it.
Modern framework doesnt trigger a page reload hence this attack make use of it and insert malicious content into dom.