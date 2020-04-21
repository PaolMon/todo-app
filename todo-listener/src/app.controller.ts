import { Controller, Get } from '@nestjs/common';
import {Ctx, EventPattern, MqttContext, Payload} from "@nestjs/microservices";
import {NewTodolistDTO, UpdateTodolistDTO, DeleteTodolistDTO} from "./models/TodolistDTO";
import {AppService} from "./app.service";
import {Logger} from '@nestjs/common'

@Controller()
export class AppController {

  constructor(private appService: AppService) {}


  private logger = new Logger('App Controller Listener');

  @EventPattern('create')
  insert(@Payload() data: NewTodolistDTO, @Ctx() context: MqttContext) {
    this.logger.log(data);
    this.appService.insert(data);
  }

  @EventPattern('update')
  update(@Payload() data, @Ctx() context: MqttContext) {
    this.logger.log(data);
    this.appService.update(data).catch(
        function() {
          console.error("oh no, update non riuscito");
        }
    );
  }

  @EventPattern('delete')
  delete(@Payload() data: DeleteTodolistDTO, @Ctx() context: MqttContext) {
    this.logger.log(data);
    this.appService.delete(data).catch(
        function() {
          console.error("oh no, delete non riuscito");
        }
    );
  }

}
