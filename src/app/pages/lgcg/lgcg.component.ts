import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-lgcg',
  templateUrl: './lgcg.component.html',
  styles: []
})
export class LgcgComponent implements OnInit {

  configModules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      ['blockquote'],
      [{ align: [] }],
      ['link', 'image', 'video'],
      [{ list: 'ordered'}, { list: 'bullet' }],
      [{ header: [1, 2, false] }],
    ]
  };

  editorForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.editorForm = new FormGroup({
      municipio: new FormControl(),
      dif: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.editorForm.value)
  }

  municipio( event: any ) {
    let htmlEditorTemp = event
  }

  dif( event: any ) {
    let htmlEditorTemp = event
  }

}
