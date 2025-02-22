
export.newPackage = await prisma.package.create({
      data: req.body,
    });
    res.status(201).json(newPackage);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
