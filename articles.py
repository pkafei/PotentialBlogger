from bs4 import BeautifulSoup
from urllib2 import urlopen


BASE_URL = "http://www.chicagoreader.com"

def get_category_links(section_url):
    html = urlopen(section_url).read()
    soup = BeautifulSoup(html, "lxml")
    boccat = soup.find("dl", "boccat")
    category_links = [BASE_URL + p.a["href"] for p in boccat.findAll("dd")]
    print category_links
    return category_links


get_category_links(BASE_URL)
