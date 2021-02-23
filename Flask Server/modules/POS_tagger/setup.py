import setuptools

setuptools.setup(
    name='pos_tagger',
    version='0.1',
    description='Adds pos tags',
    url='#',
    author='caleb',
    python_requires='>=3.8',
    author_email='',
    packages=setuptools.find_packages(),
    zip_safe=False,
    package_data={'': ['data/*']}
)