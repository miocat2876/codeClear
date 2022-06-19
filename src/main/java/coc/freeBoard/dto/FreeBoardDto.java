package coc.freeBoard.dto;

import coc.structure.dto.CrudDto;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Getter
@Setter
public class FreeBoardDto extends CrudDto {

	@NotEmpty(message = "고유식별번호는 필수 입니다")
//	@Size(max = 10)
	private String freeNumPk;

	@NotBlank(message = "제목은 필수 입니다")
	private String freeSusbject;
	@NotBlank(message = "내용은 필수 입니다")
	private String freeContent;
	@NotBlank(message = "제목은 필수 입니다")
	private String freeDateUpd;
	private String freeDel;
	private String freeDateCre;
	private String memberNumFk;


}
