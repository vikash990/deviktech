import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

import datastructurePDF from './datastructure.pdf';


class DataStructure extends Component {
 
 
  
    render() {
        return (
          <Document
            file={datastructurePDF}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={1} />
          </Document>
        );
      }
    }

export default DataStructure