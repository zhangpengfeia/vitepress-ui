set -e

cd dist/ff-ui-plus

npm publish --registry=https://registry.npmjs.org/

echo "Successfully published ff-ui-plus"

cd -