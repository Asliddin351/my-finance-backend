import {
  IsNumber,
  IsOptional,
  isString,
  IsString,
  Matches,
} from 'class-validator';

export class CategotyDto {
  id: number;
  name: string;
  image?: string;
}

export class CreateOrUpdateCategoryDto {
  @IsString()
  name: string;

  @IsOptional()
  @Matches(
    /^data:image\/(png|jpeg|jpg|webp|gif|avif);base64,[A-Za-z0-9+/]+=*$/,
    {
      message:
        'image must be a valid base64 data URI (png, jpeg, jpg, webp, gif, avif)',
    },
  )
  image?: string;
}
