import os
import requests
import re

def get_contributors(repo):
    url = f"https://api.github.com/repos/{repo}/contributors"
    response = requests.get(url, headers={"Authorization": f"token {os.environ['GITHUB_TOKEN']}"})
    return response.json()

def generate_contributor_html(contributor):
    return f'<a href="{contributor["html_url"]}" target="_blank" rel="noopener noreferrer"><img src="{contributor["avatar_url"]}" alt="{contributor["login"]}" title="{contributor["login"]}"></a>'

repos = ["nuruprogramming/nuru", "nuruprogramming/nyaraka"]
contributors = []

for repo in repos:
    contributors.extend(get_contributors(repo))

contributors = list({c["id"]: c for c in contributors}.values())
contributor_html = "".join(generate_contributor_html(c) for c in contributors)

def update_file(file_path):
    with open(file_path, "r") as f:
        content = f.read()

    updated_content = re.sub(
        r'(<!-- CONTRIBUTORS_START -->).*?(<!-- CONTRIBUTORS_END -->)',
        f'\\1\n        {contributor_html}\n        \\2',
        content,
        flags=re.DOTALL
    )

    with open(file_path, "w") as f:
        f.write(updated_content)

update_file("docs/src/index.md")
update_file("docs/src/en/index.md")
