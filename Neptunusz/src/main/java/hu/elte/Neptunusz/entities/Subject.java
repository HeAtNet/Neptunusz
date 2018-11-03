package hu.elte.Neptunusz.entities;

import java.time.LocalTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Subject {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(nullable = false)
	private String name;
	
	//@Column(nullable = false)
	//private User author;
	
	@Column(nullable = false,name = "START_OF_LESSON")
	private String lessonStart;
	
	@Column(nullable = false,name="END_OF_LESSON")
	private String lessonEnd;
	
	@Column(nullable = false)
	private String classroom;
	
	//@Column(nullable = false)
    //@Enumerated(EnumType.STRING)
	//private Type type;
	
	@OneToMany(mappedBy="subject")
	@Column
	private List<Exam> exams;
	
	@Column(nullable = false)
    private Boolean is_del;
	
	public enum Type{
		LECTURE,PRACTICE;
	}
	
}
