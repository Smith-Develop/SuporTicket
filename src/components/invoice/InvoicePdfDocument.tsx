import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer'

// Register fonts if needed, or use standard Helvetica
// Font.register({ family: 'Inter', src: '...' })

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 40,
        fontFamily: 'Helvetica',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    logo: {
        width: 80,
        height: 80,
        objectFit: 'contain',
    },
    companyName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0066FF',
    },
    titleBlock: {
        textAlign: 'right',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    metaData: {
        fontSize: 10,
        color: '#666',
        marginTop: 5,
    },
    row: {
        flexDirection: 'row',
        marginTop: 20,
    },
    col: {
        flex: 1,
    },
    colRight: {
        flex: 1,
        textAlign: 'right',
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#999',
        textTransform: 'uppercase',
        marginBottom: 5,
    },
    normalText: {
        fontSize: 12,
        marginBottom: 2,
    },
    smallText: {
        fontSize: 10,
        color: '#666',
    },
    table: {
        marginTop: 30,
        borderTopWidth: 1,
        borderColor: '#EEE',
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#0066FF',
        padding: 8,
    },
    headerText: {
        color: '#FFF',
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    tableRow: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    descCol: {
        flex: 3,
    },
    amtCol: {
        flex: 1,
        textAlign: 'right',
    },
    totalsBlock: {
        marginTop: 20,
        alignSelf: 'flex-end',
        width: 200,
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    totalLabel: {
        fontSize: 10,
        color: '#666',
    },
    totalValue: {
        fontSize: 10,
    },
    grandTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F5',
        padding: 8,
        marginTop: 5,
    },
    grandTotalLabel: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    grandTotalValue: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    notesSection: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    signatureBlock: {
        width: 150,
        textAlign: 'center',
    },
    signatureImage: {
        height: 50,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#0066FF',
    },
    signatureLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        height: 50,
        marginBottom: 5,
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 40,
        right: 40,
        textAlign: 'center',
        fontSize: 8,
        color: '#AAA',
        borderTopWidth: 1,
        borderColor: '#EEE',
        paddingTop: 10,
    },
})

interface InvoiceProps {
    ticket: any
    settings: any
}

export const InvoicePdfDocument = ({ ticket, settings }: InvoiceProps) => {
    // Calculations
    const subtotal = (ticket.laborCost || 0) + (ticket.partsCost || 0)
    const ivaRate = (settings?.ivaPercentage || 21) / 100
    const ivaAmount = ticket.includeIva ? (subtotal * ivaRate) : 0
    const total = subtotal + ivaAmount

    const dateStr = ticket.createdAt instanceof Date 
        ? ticket.createdAt.toLocaleDateString('es-ES') 
        : new Date(ticket.createdAt).toLocaleDateString('es-ES')
    
    const friendlyId = ticket.category?.prefix 
        ? `${ticket.category.prefix}${ticket.ticketNumber.toString().padStart(3, '0')}`
        : ticket.id.slice(-6).toUpperCase()

    // Invoice Meta
    const invoiceName = ticket.invoiceName || ticket.customerName
    const invoiceAddress = ticket.invoiceAddress || `${ticket.addressStreet}, ${ticket.addressColony}`
    const invoiceTaxId = ticket.invoiceTaxId || ''
    const invoiceEmail = ticket.invoiceEmail || ticket.customer?.email || ''

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={{ flex: 1 }}>
                        {settings?.logoUrl ? (
                            // eslint-disable-next-line jsx-a11y/alt-text
                            <Image src={settings.logoUrl} style={styles.logo} />
                        ) : (
                            <Text style={styles.companyName}>{settings?.name || 'SuporTicket'}</Text>
                        )}
                    </View>
                    <View style={styles.titleBlock}>
                        <Text style={styles.title}>FACTURA</Text>
                        <Text style={styles.metaData}>#{friendlyId}</Text>
                        <Text style={styles.metaData}>{dateStr}</Text>
                    </View>
                </View>

                {/* Addresses */}
                <View style={styles.row}>
                    <View style={styles.col}>
                        <Text style={styles.sectionTitle}>DE</Text>
                        <Text style={styles.normalText}>{settings?.name || 'SuporTicket'}</Text>
                        <Text style={styles.smallText}>{settings?.address}</Text>
                        <Text style={styles.smallText}>{settings?.email}</Text>
                        <Text style={styles.smallText}>{settings?.phone}</Text>
                        {settings?.taxId && <Text style={styles.smallText}>NIF: {settings.taxId}</Text>}
                    </View>
                    <View style={styles.colRight}>
                        <Text style={styles.sectionTitle}>FACTURAR A</Text>
                        <Text style={styles.normalText}>{invoiceName}</Text>
                        <Text style={styles.smallText}>{invoiceAddress}</Text>
                        <Text style={styles.smallText}>{invoiceEmail}</Text>
                        {invoiceTaxId && <Text style={styles.smallText}>NIF: {invoiceTaxId}</Text>}
                    </View>
                </View>

                {/* Table */}
                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <View style={styles.descCol}><Text style={styles.headerText}>DESCRIPCIÓN</Text></View>
                        <View style={styles.amtCol}><Text style={styles.headerText}>IMPORTE</Text></View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={styles.descCol}>
                            <Text style={styles.normalText}>Servicio Técnico</Text>
                            <Text style={styles.smallText}>{ticket.issueDescription}</Text>
                        </View>
                        <View style={styles.amtCol}>
                            <Text style={styles.normalText}>€{(ticket.laborCost || 0).toFixed(2)}</Text>
                        </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={styles.descCol}>
                            <Text style={styles.normalText}>Repuestos / Materiales</Text>
                            <Text style={styles.smallText}>{ticket.isRepaired ? 'Utilizados' : 'Estimados'}</Text>
                        </View>
                        <View style={styles.amtCol}>
                            <Text style={styles.normalText}>€{(ticket.partsCost || 0).toFixed(2)}</Text>
                        </View>
                    </View>
                </View>

                {/* Totals */}
                <View style={styles.totalsBlock}>
                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>Subtotal:</Text>
                        <Text style={styles.totalValue}>€{subtotal.toFixed(2)}</Text>
                    </View>
                    {ticket.includeIva && (
                         <View style={styles.totalRow}>
                            <Text style={styles.totalLabel}>IVA ({(ivaRate * 100).toFixed(0)}%):</Text>
                            <Text style={styles.totalValue}>€{ivaAmount.toFixed(2)}</Text>
                        </View>
                    )}
                    <View style={styles.grandTotal}>
                        <Text style={styles.grandTotalLabel}>TOTAL:</Text>
                        <Text style={styles.grandTotalValue}>€{total.toFixed(2)}</Text>
                    </View>
                </View>

                {/* Notes & Signature */}
                <View style={styles.notesSection}>
                    <View style={{ flex: 1, paddingRight: 20 }}>
                        <Text style={styles.sectionTitle}>NOTAS</Text>
                        <Text style={styles.smallText}>{ticket.technicianNotes || 'Sin observaciones.'}</Text>
                    </View>
                    <View style={styles.signatureBlock}>
                        {ticket.signatureUrl ? (
                             // eslint-disable-next-line jsx-a11y/alt-text
                            <Image src={ticket.signatureUrl} style={styles.signatureImage} />
                        ) : (
                            <View style={styles.signatureLine} />
                        )}
                         <Text style={styles.sectionTitle}>FIRMA CLIENTE</Text>
                    </View>
                </View>

                {/* Footer */}
                <Text style={styles.footer}>
                    Gracias por su preferencia. {settings?.companyName} - {settings?.address}
                </Text>
            </Page>
        </Document>
    )
}
