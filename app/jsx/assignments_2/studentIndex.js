/*
 * Copyright (C) 2018 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import {ApolloProvider, createClient} from '../canvas-apollo'
import ErrorBoundary from '../shared/components/ErrorBoundary'
import errorShipUrl from './student/SVG/ErrorShip.svg'
import GenericErrorPage from '../shared/components/GenericErrorPage/index'
import InitialQuery from './student/components/InitialQuery'
import React from 'react'
import ReactDOM from 'react-dom'

const client = createClient()

export default function renderAssignmentsApp(env, elt) {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <ErrorBoundary
        errorComponent={
          <GenericErrorPage
            imageUrl={errorShipUrl}
            errorCategory="Assignments 2 Student Error Page"
          />
        }
      >
        <InitialQuery assignmentLid={ENV.ASSIGNMENT_ID.toString()} />
      </ErrorBoundary>
    </ApolloProvider>,
    elt
  )
}
