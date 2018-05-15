#! /bin/bash
jekyll b -s . -d dist || exit 1

cp .gitignore dist/ || exit 1

git add --force dist || exit 1
tree=$(git write-tree --prefix=dist/) || exit 1

echo tree is $tree

commit=$(
{
cat <<-END
Build release-v2
END
} | git commit-tree $tree -p release-v2
) || exit 1

echo commit is $commit

git update-ref refs/heads/release-v2 $commit || exit 1

git reset --hard HEAD

echo "successfully build branch release-v2. you'll need to push release-v2"