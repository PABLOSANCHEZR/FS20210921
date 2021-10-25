import { inject, TestBed } from '@angular/core/testing';

import { ERROR_LEVEL, LoggerService } from './logger.service';

describe('LoggerService', () => {
  const message = 'Notificación a consola'
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService],
    });
    service = TestBed.inject(LoggerService);
  });

  beforeEach(() => {
    spyOn(console, 'error');
    spyOn(console, 'warn');
    spyOn(console, 'info');
    spyOn(console, 'log');
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('error', () => {
    service.error(message)
    expect(console.error).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(message)
    expect(console.warn).not.toHaveBeenCalled();
    expect(console.info).not.toHaveBeenCalled();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('warn', () => {
    service.warn(message)
    expect(console.warn).toHaveBeenCalled();
    expect(console.warn).toHaveBeenCalledWith(message)
    expect(console.error).not.toHaveBeenCalled();
    expect(console.info).not.toHaveBeenCalled();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('info', () => {
    service.info(message)
    expect(console.info).toHaveBeenCalled();
    expect(console.info).toHaveBeenCalledWith(message)
    expect(console.error).not.toHaveBeenCalled();
    expect(console.warn).not.toHaveBeenCalled();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('log', () => {
    service.log(message)
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith(message)
    expect(console.error).not.toHaveBeenCalled();
    expect(console.warn).not.toHaveBeenCalled();
    expect(console.info).not.toHaveBeenCalled();
  });

  it('ERROR_LEVEL 0', () => {
    let service = new LoggerService(0)
    service.error(message)
    service.warn(message)
    service.info(message)
    service.log(message)
    expect(console.error).not.toHaveBeenCalled();
    expect(console.warn).not.toHaveBeenCalled();
    expect(console.info).not.toHaveBeenCalled();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('ERROR_LEVEL 1', () => {
    let service = new LoggerService(1)
    service.error(message)
    service.warn(message)
    service.info(message)
    service.log(message)
    expect(console.error).toHaveBeenCalled();
    expect(console.warn).not.toHaveBeenCalled();
    expect(console.info).not.toHaveBeenCalled();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('ERROR_LEVEL 2', () => {
    let service = new LoggerService(2)
    service.error(message)
    service.warn(message)
    service.info(message)
    service.log(message)
    expect(console.error).toHaveBeenCalled();
    expect(console.warn).toHaveBeenCalled();
    expect(console.info).not.toHaveBeenCalled();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('ERROR_LEVEL 3', () => {
    let service = new LoggerService(3)
    service.error(message)
    service.warn(message)
    service.info(message)
    service.log(message)
    expect(console.error).toHaveBeenCalled();
    expect(console.warn).toHaveBeenCalled();
    expect(console.info).toHaveBeenCalled();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('ERROR_LEVEL 4', () => {
    let service = new LoggerService(4)
    service.error(message)
    service.warn(message)
    service.info(message)
    service.log(message)
    expect(console.error).toHaveBeenCalled();
    expect(console.warn).toHaveBeenCalled();
    expect(console.info).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalled();
  });

});
