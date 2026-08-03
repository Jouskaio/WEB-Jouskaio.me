module.exports = {
    apps: [
        {
            name: 'WEB-jouskaio.me',
            cwd: 'apps/web',
            script: 'yarn',
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
            args: 'serve -s storybook-static -l tcp://0.0.0.0:6060',
            env: {
                NODE_ENV: 'production',
            },
            time: true,
        }
    ],
};
