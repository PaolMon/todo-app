import { Controller, Get } from '@nestjs/common';
import {Ctx, EventPattern, MqttContext, Payload} from "@nestjs/microservices";
import {TodoModel} from "./models/todo.dto.model";
import {AppService} from "./app.service";
import {Logger} from '@nestjs/common'

@Controller()
export class AppController {

  constructor(private appService: AppService) {}


  private logger = new Logger('App Controller Listener');

  @EventPattern('createTodo')
  insert(@Payload() data: TodoModel, @Ctx() context: MqttContext) {
    this.logger.log(data);
    this.appService.insert(data);
  }

  @EventPattern('updateTodo')
  update(@Payload() data: TodoModel, @Ctx() context: MqttContext) {
    this.logger.log(data);
    this.appService.update(data).catch(
        function() {
          console.error("oh no, update non riuscito");
        }
    );
  }

  @EventPattern('deleteTodo')
  delete(@Payload() data: TodoModel, @Ctx() context: MqttContext) {
    this.logger.log(data);
    this.appService.delete(data).catch(
        function() {
          console.error("oh no, delete non riuscito");
        }
    );
  }

}
