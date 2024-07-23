module.exports = {   
    setupFilesAfterEnv: 
        ['<rootDir>/src/setupTests.js'],   
        transform: {    
            '^.+\\.jsx?$':'babel-jest',
         },
    testEnvironment: 'jsdom',  
    moduleNameMapper: {    
        '\\.(css|less|scss|sass)$':'identity-obj-proxy',
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js'
    } };