import { tabsApi } from '@/../api/tabs/Tabs-api'
import { DialogContext } from '@/contexts/Dialog-context'
import { ModalComponentInitialContext } from '@/contexts/Modal-component'
import { ITabsLink } from '@/interfaces/Tabs-interface'
import { Box, Button } from '@chakra-ui/react'
import { FC, useContext, useEffect } from 'react'
import { AiTwotoneDelete } from 'react-icons/ai'
import { ButtonComponent } from '../button/ButtonComponent'

export const TabsLink: FC<{ data: ITabsLink[] }> = ({ data }) => {
	const { handlerOpen } = useContext(ModalComponentInitialContext)
	const [deleteTabLink, { isLoading }] = tabsApi.useDeleteTabLinkByIdMutation()

	return (
		<>
			{data.map(link => (
				<Box
					key={link.id}
					sx={{ display: 'flex', alignItems: 'center', mb: '20px' }}
				>
					<a
						href={`${process.env.NEXT_PUBLIC_APP_STATIC_FILES}/${link.link}`}
						target='_blank'
						rel='noreferrer'
						style={{ fontSize: '14px' }}
					>
						{link.name}
					</a>
					<Box
						ml={50}
						sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}
					>
						<ButtonComponent
							btnType='Update'
							size='xs'
							onClick={() => handlerOpen(link.id, 'UPDATETABLINK', 'UPDATE')}
						/>
						<ButtonComponent
							btnType='Delete'
							size='xs'
							onClick={() => deleteTabLink(link.id)}
						/>
					</Box>
				</Box>
			))}
		</>
	)
}
