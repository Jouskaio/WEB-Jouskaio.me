module.exports = {
    apps: [
        {
            name: 'WEB-jouskaio.me',
            cwd: 'apps/web',
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'production',
            },
            time: true,
        },
        {
            name: 'WEB-storybook',
            cwd: 'packages/ui',
            script: 'npx',
            args: 'serve storybook-static -l 6060 -c ../serve.json',
            env: {
                NODE_ENV: 'production',
            },
            time: true,
        }
    ],
};
