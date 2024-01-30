import { describe, expect, it, jest } from '@jest/globals';
import { Logger } from './logger';

// Here we use spies to mock the console methods. We can then check that the
// methods are called with the correct arguments. We also use the `mockRestore`
// method to restore the original methods after the test has run.

describe('logger', () => {
  it('should log info', async () => {
    const spy = jest.spyOn(console, 'info').mockImplementation(() => {});
    new Logger().info('info');
    expect(spy).toHaveBeenCalledWith(['info']);
    spy.mockRestore();
  });

  it('should log warn', async () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation(() => {});

    new Logger().warn('hello');
    expect(spy).toHaveBeenCalledWith(['hello']);
    spy.mockRestore();
  });

  it('should log error', async () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    new Logger().error('error');
    expect(spy).toHaveBeenCalledWith(['error']);
    spy.mockRestore();
  });

  it('should not log info if silent', async () => {
    const spy = jest.spyOn(console, 'info').mockImplementation(() => {});
    const silentLogger = new Logger(true);
    silentLogger.info('info');
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it('should not log warn if silent', async () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const silentLogger = new Logger(true);
    silentLogger.warn('hello');
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it('should not log error if silent', async () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const silentLogger = new Logger(true);
    silentLogger.error('error');
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
});
