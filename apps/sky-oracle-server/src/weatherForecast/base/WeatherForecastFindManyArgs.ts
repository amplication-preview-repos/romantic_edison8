/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WeatherForecastWhereInput } from "./WeatherForecastWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WeatherForecastOrderByInput } from "./WeatherForecastOrderByInput";

@ArgsType()
class WeatherForecastFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WeatherForecastWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WeatherForecastWhereInput, { nullable: true })
  @Type(() => WeatherForecastWhereInput)
  where?: WeatherForecastWhereInput;

  @ApiProperty({
    required: false,
    type: [WeatherForecastOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WeatherForecastOrderByInput], { nullable: true })
  @Type(() => WeatherForecastOrderByInput)
  orderBy?: Array<WeatherForecastOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { WeatherForecastFindManyArgs as WeatherForecastFindManyArgs };
