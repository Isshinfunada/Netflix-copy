if [! -d "vite-project"]; then
    create-vite vite-project
fi

npm install

npm run dev