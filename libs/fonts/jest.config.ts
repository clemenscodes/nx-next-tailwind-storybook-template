/* eslint-disable */
export default {
    displayName: 'fonts',
    preset: '../../jest.preset.js',
    transform: {
        '^.+\\.[tj]sx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/tests/jest/__mocks__/styleMock.js',
        '@next/font/(.*)': require.resolve('next/dist/build/jest/__mocks__/nextFontMock.js'),
    },
};
